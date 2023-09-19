import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Dispatch, SetStateAction } from "react";
import {
  BalanceDataModel,
  TransactionsDataModel,
} from "../../../shared/repositories/app/app.model";

type Methods = {
  deleteTransaction: (id: string) => void;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  filterMovementDate: (selectedDate: Date) => Promise<void>;
};

type State = {
  balanceList: BalanceDataModel[];
  transactions: TransactionsDataModel[];
  loader: boolean;
  movementDate: Date;
  showModal: boolean;
};

type HomeModel = {
  state: State;
  methods: Methods;
};

type HomeViewModel = { navigation: NavigationProp<ParamListBase> };

interface UseHomeViewModel extends HomeViewModel {}

export type { HomeModel, HomeViewModel, UseHomeViewModel };
