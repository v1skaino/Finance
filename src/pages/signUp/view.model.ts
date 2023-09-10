import { useState } from "react";
import { signUp } from "../../shared/repositories/auth/auth.repository";
import { validateEmail } from "../../shared/utils/helper";
import { errorToast, infoToast, successToast } from "../../shared/utils/toast";
import { SignUpModel, UseSignUpViewModel } from "./model";

const useSignUpViewModel = ({
  navigation,
}: UseSignUpViewModel): SignUpModel => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const isValid = () => {
    if (!name || !password || !email) {
      infoToast("Info", "Preencha os campos corretamente!");
      return false;
    }

    if (!validateEmail(email)) {
      infoToast("Info", "Por favor adicione um email válido!");
      return false;
    }

    return true;
  };

  const submit = async () => {
    if (!isValid()) return;
    try {
      setLoader(true);
      await signUp({ name, email, password });
      successToast("Cadastro", "Cadastro realizado com sucesso!");
      navigation.goBack();
    } catch (error) {
      errorToast("ERRO", "Ocorreu um erro interno!");
    } finally {
      setLoader(false);
    }
  };

  return {
    state: { name, email, password, loader },
    methods: { setName, setEmail, setPassword, submit },
  };
};

export { useSignUpViewModel };
