import { AxiosResponse } from "axios";
import { client } from "../client";
import { BalanceListDTO, ReceiveDTO, TransactionsDTO } from "./app.dto";

const getBalanceList = async (
  params: BalanceListDTO,
): Promise<AxiosResponse> => {
  return await client.get("balance", { params: params });
};

const receive = async (reqBody: ReceiveDTO): Promise<AxiosResponse> => {
  return await client.post("receive", reqBody);
};

const getTransactions = async (
  params: TransactionsDTO,
): Promise<AxiosResponse> => {
  return await client.get("receives", { params });
};

export { getBalanceList, getTransactions, receive };
