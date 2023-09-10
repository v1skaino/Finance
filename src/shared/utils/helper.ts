import { Platform } from "react-native";

const isIOS = () => Platform.OS === "ios";

const validateEmail = (email: string) => {
  const isEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email.match(isEmailRegex);
};

export { isIOS, validateEmail };
