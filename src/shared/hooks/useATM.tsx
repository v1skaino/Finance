import { useState } from "react";

const { format: formatCurrency } = Intl.NumberFormat("pt-BR", {
  currency: "BRL",
  style: "currency",
});

function useATMInput(): [string, (value: string) => void] {
  const [value, setValue] = useState("");
  function handleChange(value: string) {
    const decimal = Number(value.replace(/\D/g, "")) / 100;
    if (decimal == 0) return setValue("");
    setValue(formatCurrency(decimal || 0).replace("R$\xa0", "R$ "));
  }
  return [value, handleChange];
}

export { useATMInput };
