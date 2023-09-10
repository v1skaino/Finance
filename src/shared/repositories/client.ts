import axios from "axios";
import { BASE_API_PATH } from "../settings/settings";
import { setupInterceptorsTo } from "./interceptors";

const client = setupInterceptorsTo(axios.create({ baseURL: BASE_API_PATH }));

export { client };
