import { useState } from "react";
import { useGlobal } from "../../../shared/contexts/global/global.context";
import { SignInDataModel } from "../../../shared/repositories/auth/auth.model";
import { signIn } from "../../../shared/repositories/auth/auth.repository";
import { AsyncStorageService } from "../../../shared/services/AsyncStorage";
import { errorToast } from "../../../shared/utils/toast";
import { SignInModel, UseSignInViewModel } from "./model";

const { saveToken } = AsyncStorageService;

const useSignInViewModel = ({
  navigation,
}: UseSignInViewModel): SignInModel => {
  const {
    methods: { setUser },
  } = useGlobal();
  const navigateToSignUp = () => navigation.navigate("SignUp");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const submit = async () => {
    setLoader(true);
    try {
      const { data }: { data: SignInDataModel } = await signIn({
        email,
        password,
      });
      saveToken(data?.token);
      setUser({ ...data, email });
    } catch (error) {
      errorToast("ERRO", "Usuário ou senha incorreto!");
    } finally {
      setLoader(false);
    }
  };

  return {
    state: { email, password, loader },
    methods: { navigateToSignUp, setEmail, setPassword, submit },
  };
};

export { useSignInViewModel };
