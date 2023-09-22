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
import { getTimeZoneDiff } from "../../../shared/utils/helper";
import { errorToast, successToast } from "../../../shared/utils/toast";
import { HomeModel, UseHomeViewModel } from "./model";

const useHomeViewModel = ({ navigation }: UseHomeViewModel): HomeModel => {
  const [balanceList, setBalanceList] = useState<BalanceDataModel[]>([]);
  const [movementDate, setMovementDate] = useState(new Date());
  const [transactions, setTransactions] = useState<TransactionsDataModel[]>([]);
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const isFocused = useIsFocused();

  const getMovements = useCallback(async () => {
    const date = getTimeZoneDiff(new Date());
    const formattedDate = moment(date, "DD/MM/YYYY")
      .subtract(1, "day")
      .format("DD/MM/YYYY");

    const [balance, transactions] = await Promise.all([
      getBalanceList({ date: formattedDate }),
      getTransactions({ date: formattedDate }),
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
          onPress: () => {
            fetchToDelete(id);
          },
        },
      ],
    );
  };

  const refreshBalanceList = async () => {
    const date = getTimeZoneDiff(movementDate);
    const { data } = await getBalanceList({ date });
    setBalanceList(data);
  };

  const removeDeletedItemFromArray = (id: string) => {
    setTransactions(transactions.filter((item) => item.id != id));
  };

  const fetchToDelete = async (id: string): Promise<void> => {
    try {
      setLoader(true);
      await fetchDeleteTransactions({ item_id: id });
      removeDeletedItemFromArray(id);
      refreshBalanceList();
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

  const filterMovementDate = async (selectedDate: Date) => {
    try {
      setLoader(true);
      const date = getTimeZoneDiff(selectedDate);
      const { data } = await getTransactions({ date });
      setTransactions(data);
      refreshBalanceList();
    } catch {
      setTransactions([]);
      errorToast("ERRO", "Ocorreu um erro interno!");
    } finally {
      setMovementDate(selectedDate);
      setLoader(false);
    }
  };

  return {
    state: { balanceList, transactions, loader, movementDate, showModal },
    methods: { deleteTransaction, setShowModal, filterMovementDate },
  };
};

export { useHomeViewModel };
