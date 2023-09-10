import { NavigationProp, ParamListBase } from "@react-navigation/native";

type Methods = {};

type State = {
  balanceList: BalanceDataModel[];
};

type HomeModel = {
  state: State;
  methods: Methods;
};

type HomeViewModel = { navigation: NavigationProp<ParamListBase> };

interface UseHomeViewModel extends HomeViewModel {}

export type { HomeModel, HomeViewModel, UseHomeViewModel };
