import { useState } from "react";
import { signUp } from "../../../shared/repositories/auth/auth.repository";
import { validateEmail } from "../../../shared/utils/helper";
import { errorToast, successToast } from "../../../shared/utils/toast";
import { SignUpModel, UseSignUpViewModel } from "./model";

const useSignUpViewModel = ({
  navigation,
}: UseSignUpViewModel): SignUpModel => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [formValidator, setFormValidator] = useState({
    name: false,
    email: { error: false, message: "" },
    password: false,
  });

  const isValid = () => {
    setFormValidator({
      name: !name,
      email: {
        error: !email || !validateEmail(email),
        message:
          email && !validateEmail(email)
            ? "Preencha o email corretamente!"
            : "Campo obrigatório!",
      },
      password: !password,
    });

    if (!name || !password || !email || !validateEmail(email)) return false;

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
    state: { name, email, password, loader, formValidator },
    methods: { setName, setEmail, setPassword, submit },
  };
};

export { useSignUpViewModel };
