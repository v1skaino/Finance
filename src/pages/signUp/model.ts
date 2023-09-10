import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Dispatch, SetStateAction } from "react";

type Methods = {
  setEmail: Dispatch<SetStateAction<string>>;
  setName: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  submit: () => Promise<void>;
};

type State = { name: string; email: string; password: string; loader: boolean };

type SignUpModel = {
  state: State;
  methods: Methods;
};

type SignUpViewModel = { navigation: NavigationProp<ParamListBase> };

interface UseSignUpViewModel extends SignUpViewModel {}

export type { SignUpModel, SignUpViewModel, UseSignUpViewModel };
