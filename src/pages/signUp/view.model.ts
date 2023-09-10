import { useState } from "react";
import { signUp } from "../../shared/repositories/auth/auth.repository";
import { SignUpModel, UseSignUpViewModel } from "./model";

const useSignUpViewModel = ({
  navigation,
}: UseSignUpViewModel): SignUpModel => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    try {
      await signUp({ name, email, password });
      navigation.goBack();
    } catch (error) {}
  };

  return {
    state: { name, email, password },
    methods: { setName, setEmail, setPassword, submit },
  };
};

export { useSignUpViewModel };
