import { AxiosResponse } from "axios";
import { client } from "../client";
import { SignInDTO, SignUpDTO } from "./auth.dto";

const signUp = async (requestBody: SignUpDTO): Promise<AxiosResponse> => {
  return await client.post("users", requestBody);
};

const signIn = async (requestBody: SignInDTO) => {
  return await client.post("login", requestBody);
};

const loadUserData = async () => {
  return await client.get("me");
};

export { loadUserData, signIn, signUp };
