import { AxiosResponse } from "axios";
import { client } from "../client";
import { SignUpDTO } from "./auth.dto";

const signUp = async (requestBody: SignUpDTO): Promise<AxiosResponse> => {
  return await client.post("users", requestBody);
};

export { signUp };
