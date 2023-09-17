import { AxiosResponse } from "axios";
import { client } from "../client";
import { BalanceListDTO, ReceiveDTO, TransactionsDTO } from "./app.dto";
import { TransactionsDeleteDTO } from "./app.model";

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

const fetchDeleteTransactions = async (
  params: TransactionsDeleteDTO,
): Promise<AxiosResponse> => {
  return await client.delete("receives/delete", { params });
};

export { fetchDeleteTransactions, getBalanceList, getTransactions, receive };
