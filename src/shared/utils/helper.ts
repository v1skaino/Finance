import moment from "moment";
import { Platform } from "react-native";

const isIOS = () => Platform.OS === "ios";

const validateEmail = (email: string) => {
  const isEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email.match(isEmailRegex);
};

const formatCurrency = (currency: number) => {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
  }).format(currency);
};

const maskOnlyNumbers = (numbers: string) => {
  return numbers.replace(/[^0-9]/g, "");
};

const generateGreetings = () => {
  const currentHour = +moment().format("HH");
  if (currentHour >= 6 && currentHour < 12) return "Bom Dia";
  if (currentHour >= 12 && currentHour < 18) return "Boa Tarde";
  if (
    (currentHour >= 18 && currentHour < 23) ||
    (currentHour >= 0 && currentHour < 6)
  )
    return "Boa noite";
  return "Olá";
};

const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export {
  capitalizeFirstLetter,
  formatCurrency,
  generateGreetings,
  isIOS,
  maskOnlyNumbers,
  validateEmail,
};
