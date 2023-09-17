type BalanceDataModel = {
  saldo: number;
  tag: "saldo" | "receita" | "despesa";
};

type TransactionsDataModel = {
  id: string;
  description: string;
  value: number;
  type: "receita" | "despesa";
  date: string;
};

type TransactionsDeleteDTO = {
  item_id: string;
};

export type { BalanceDataModel, TransactionsDataModel, TransactionsDeleteDTO };
