import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Dispatch, SetStateAction } from "react";

type Methods = {
  navigateToSignUp: () => void;
  setPassword: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  submit: () => Promise<void>;
};

type State = {
  email: string;
  password: string;
  loader: boolean;
};

type SignInModel = {
  state: State;
  methods: Methods;
};

type SignInViewModel = { navigation: NavigationProp<ParamListBase> };

interface UseSignInViewModel extends SignInViewModel {}

export type { SignInModel, SignInViewModel, UseSignInViewModel };
