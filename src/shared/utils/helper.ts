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

export { formatCurrency, isIOS, maskOnlyNumbers, validateEmail };
