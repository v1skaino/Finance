import Toast, { ToastShowParams } from "react-native-toast-message";

const showToast = (params: ToastShowParams) => Toast.show(params);

const successToast = (title: string, message: string) => {
  showToast({ type: "success", text1: title, text2: message });
};

const errorToast = (title: string, message: string) => {
  showToast({ type: "error", text1: title, text2: message });
};

const infoToast = (title: string, message: string) => {
  showToast({ type: "info", text1: title, text2: message });
};

export { errorToast, infoToast, showToast, successToast };
