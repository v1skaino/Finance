import { NavigationProp, ParamListBase } from "@react-navigation/native";
import {
  BalanceDataModel,
  TransactionsDataModel,
} from "../../../shared/repositories/app/app.model";

type Methods = {
  deleteTransaction: (id: string) => void;
};

type State = {
  balanceList: BalanceDataModel[];
  transactions: TransactionsDataModel[];
  loader: boolean;
};

type HomeModel = {
  state: State;
  methods: Methods;
};

type HomeViewModel = { navigation: NavigationProp<ParamListBase> };

interface UseHomeViewModel extends HomeViewModel {}

export type { HomeModel, HomeViewModel, UseHomeViewModel };
