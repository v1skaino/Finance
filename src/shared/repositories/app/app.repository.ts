import { AxiosResponse } from "axios";
import { client } from "../client";
import { BalanceListDTO, ReceiveDTO } from "./app.dto";

const getBalanceList = async (
  params: BalanceListDTO,
): Promise<AxiosResponse> => {
  return await client.get("balance", { params: params });
};

const receive = async (reqBody: ReceiveDTO): Promise<AxiosResponse> => {
  return await client.post("receive", reqBody);
};

export { getBalanceList, receive };
