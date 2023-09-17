import { useIsFocused } from "@react-navigation/native";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import {
  BalanceDataModel,
  TransactionsDataModel,
} from "../../../shared/repositories/app/app.model";
import {
  fetchDeleteTransactions,
  getBalanceList,
  getTransactions,
} from "../../../shared/repositories/app/app.repository";
import { errorToast, successToast } from "../../../shared/utils/toast";
import { HomeModel, UseHomeViewModel } from "./model";

const useHomeViewModel = ({ navigation }: UseHomeViewModel): HomeModel => {
  const [balanceList, setBalanceList] = useState<BalanceDataModel[]>([]);
  const [movementDate, setMovementDate] = useState(new Date());
  const [transactions, setTransactions] = useState<TransactionsDataModel[]>([]);
  const [loader, setLoader] = useState(false);
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

  const showConfirmDialog = (id: string) => {
    return Alert.alert(
      "Tem certeza?",
      "Tem certeza que deseja remover este registro?",
      [
        {
          text: "Não",
        },
        {
          text: "Sim",
          onPress: () => fetchToDelete(id),
        },
      ],
    );
  };

  const removeDeletedItemFromArray = (id: string) => {
    setTransactions(transactions.filter((item) => item.id != id));
  };

  const fetchToDelete = async (id: string): Promise<void> => {
    try {
      setLoader(true);
      await fetchDeleteTransactions({ item_id: id });
      removeDeletedItemFromArray(id);
      successToast("Sucesso!", "Registro removido com sucesso!");
    } catch {
      errorToast("ERRO", "Ocorreu um erro interno!");
    } finally {
      setLoader(false);
    }
  };

  const deleteTransaction = (id: string) => {
    showConfirmDialog(id);
  };

  return {
    state: { balanceList, transactions, loader },
    methods: { deleteTransaction },
  };
};

export { useHomeViewModel };
