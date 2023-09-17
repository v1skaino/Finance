import { useIsFocused } from "@react-navigation/native";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import {
  BalanceDataModel,
  TransactionsDataModel,
} from "../../../shared/repositories/app/app.model";
import {
  getBalanceList,
  getTransactions,
} from "../../../shared/repositories/app/app.repository";
import { HomeModel, UseHomeViewModel } from "./model";

const useHomeViewModel = ({ navigation }: UseHomeViewModel): HomeModel => {
  const [balanceList, setBalanceList] = useState<BalanceDataModel[]>([]);
  const [movementDate, setMovementDate] = useState(new Date());
  const [transactions, setTransactions] = useState<TransactionsDataModel[]>([]);
  const isFocused = useIsFocused();

  const getMovements = useCallback(async () => {
    const date = moment(movementDate).format("DD/MM/YYYY");

    const [balance, transactions] = await Promise.all([
      getBalanceList({ date }),
      getTransactions({ date }),
    ]);

    const { data: balanceData }: { data: BalanceDataModel[] } = balance;
    const { data: transactionsData }: { data: TransactionsDataModel[] } =
      transactions;

    setBalanceList(balanceData);
    setTransactions(transactionsData);
  }, [setBalanceList, setTransactions]);

  useEffect(() => {
    getMovements();
  }, [getMovements, isFocused]);

  return {
    state: { balanceList, transactions },
    methods: {},
  };
};

export { useHomeViewModel };
