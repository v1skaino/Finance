type BalanceListDTO = {
  date: string;
};

type ReceiveDTO = {
  description: string;
  type: "receita" | "despesa";
  value: number;
  date: string;
};

type TransactionsDTO = {
  date: string;
};

export type { BalanceListDTO, ReceiveDTO, TransactionsDTO };
