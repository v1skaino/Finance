import { NavigationProp, ParamListBase } from "@react-navigation/native";

type Methods = { navigateToSignUp: () => void };

type State = {};

type SignInModel = {
  state: State;
  methods: Methods;
};

type SignInViewModel = { navigation: NavigationProp<ParamListBase> };

interface UseSignInViewModel extends SignInViewModel {}

export type { SignInModel, SignInViewModel, UseSignInViewModel };
