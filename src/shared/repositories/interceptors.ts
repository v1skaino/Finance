import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import { AsyncStorageService } from "../services/AsyncStorage";
import { debug } from "../utils/debug";

const { globalState: logs } = debug;
const { getItem } = AsyncStorageService;

const onRequest = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig<any>> => {
  const token = await getItem("@finance_token__");
  const { data, url } = config;
  logs({ data, url }, "REQUEST", "#4867e5");
  if (!token || !config.headers) return config;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  logs(error, "REQUEST", "red");
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  logs(response, "RESPONSE", "#4867e5");
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  logs(error, "RESPONSE", "red");
  return Promise.reject(error);
};

const setupInterceptorsTo = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};

export { setupInterceptorsTo };
