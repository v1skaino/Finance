import { SignInModel, UseSignInViewModel } from "./model";

const useSignInViewModel = ({
  navigation,
}: UseSignInViewModel): SignInModel => {
  const navigateToSignUp = () => navigation.navigate("SignUp");

  return {
    state: {},
    methods: { navigateToSignUp },
  };
};

export { useSignInViewModel };
