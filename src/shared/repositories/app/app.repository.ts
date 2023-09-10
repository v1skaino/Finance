import { AxiosResponse } from "axios";
import { client } from "../client";
import { BalanceListDTO } from "./app.dto";

const getBalanceList = async (
  params: BalanceListDTO,
): Promise<AxiosResponse> => {
  return await client.get("balance", { params: params });
};

export { getBalanceList };
