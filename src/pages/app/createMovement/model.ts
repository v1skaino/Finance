import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Dispatch, SetStateAction } from "react";

type Methods = {
  setDescription: Dispatch<SetStateAction<string>>;
  setCurrency: (value: string) => void;
  setType: Dispatch<SetStateAction<"receita" | "despesa">>;
  submit: () => Promise<void>;
};

type State = {
  description: string;
  currency: string;
  type: "receita" | "despesa";
  loader: boolean;
  formValidator: {
    description: boolean;
    currency: boolean;
  };
};

type CreateMovementModel = {
  state: State;
  methods: Methods;
};

type CreateMovementViewModel = { navigation: NavigationProp<ParamListBase> };

interface UseCreateMovementViewModel extends CreateMovementViewModel {}

export type {
  CreateMovementModel,
  CreateMovementViewModel,
  UseCreateMovementViewModel,
};
