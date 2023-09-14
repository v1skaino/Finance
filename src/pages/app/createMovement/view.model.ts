import { format } from "date-fns";
import { useState } from "react";
import { Keyboard } from "react-native";
import { useATMInput } from "../../../shared/hooks/useATM";
import { receive } from "../../../shared/repositories/app/app.repository";
import { errorToast, successToast } from "../../../shared/utils/toast";
import { CreateMovementModel, UseCreateMovementViewModel } from "./model";

const useCreateMovementViewModel = ({
  navigation,
}: UseCreateMovementViewModel): CreateMovementModel => {
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useATMInput();
  const [type, setType] = useState<"receita" | "despesa">("receita");
  const [formValidator, setFormValidator] = useState({
    description: false,
    currency: false,
  });
  const [loader, setLoader] = useState(false);

  const isValid = () => {
    setFormValidator({ currency: !currency, description: !description });
    if (!description || !currency) return false;
    return true;
  };

  const formatCurrencyToSubmit = () => {
    const formatedCurrency = currency.replace("R$", "").trim();
    const currencyWithoutDots = formatedCurrency.replace(/\./g, "");
    const switchCommaToDot = currencyWithoutDots.replace(",", ".");
    return Number(switchCommaToDot);
  };

  const createRequestBody = () => {
    return {
      description,
      type,
      value: formatCurrencyToSubmit(),
      date: format(new Date(), "dd/MM/yyyy"),
    };
  };

  const resetValues = () => {
    setDescription("");
    setCurrency("");
    setType("receita");
  };

  const submit = async () => {
    Keyboard.dismiss();
    if (!isValid()) return;
    setLoader(true);

    try {
      await receive(createRequestBody());
      successToast("Sucesso!", "Movimentação adicionada com sucesso!");
      resetValues();
    } catch {
      errorToast("ERROR", "Ocorreu um erro interno!");
    } finally {
      setLoader(false);
    }
  };

  return {
    state: { description, currency, type, formValidator, loader },
    methods: { setDescription, setCurrency, setType, submit },
  };
};

export { useCreateMovementViewModel };
