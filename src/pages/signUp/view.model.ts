import { useState } from "react";
import { signUp } from "../../shared/repositories/auth/auth.repository";
import { validateEmail } from "../../shared/utils/helper";
import { SignUpModel, UseSignUpViewModel } from "./model";

const useSignUpViewModel = ({
  navigation,
}: UseSignUpViewModel): SignUpModel => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const isValid = () => {
    if (!name || !password || !email) return false;
    if (!validateEmail(email)) return false;

    return true;
  };

  const submit = async () => {
    if (!isValid()) return;
    try {
      setLoader(true);
      await signUp({ name, email, password });
      navigation.goBack();
    } catch (error) {
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
