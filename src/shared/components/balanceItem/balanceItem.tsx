import { useMemo } from "react";
import { styled } from "styled-components/native";
import { formatCurrency } from "../../utils/helper";

export const BalanceListItem = ({ saldo, tag }: BalanceDataModel) => {
  const cardConfig = useMemo(() => {
    if (tag === "saldo") {
      return {
        label: "Saldo atual",
        color: "#3b3dbf",
      };
    }

    if (tag === "despesa") {
      return {
        label: "Saídas de hoje",
        color: "#EF463a",
      };
    }

    if (tag === "receita") {
      return {
        label: "Entradas de hoje",
        color: "#00b94a",
      };
    }
  }, [tag, saldo]);

  return (
    <Container $bgColor={cardConfig?.color}>
      <Label>{cardConfig?.label}</Label>
      <Balance>R$ {formatCurrency(saldo)}</Balance>
    </Container>
  );
};

const Container = styled.View<{ $bgColor?: string }>`
  background-color: ${(props) => props.$bgColor};
  margin-left: 14px;
  margin-right: 14px;
  border-radius: 4px;
  justify-content: center;
  align-items: flex-start;
  width: 300px;
  padding-left: 14px;
`;

const Label = styled.Text`
  color: #fff;
  font-size: 19px;
  font-weight: bold;
`;

const Balance = styled.Text`
  margin-top: 5px;
  color: #fff;
  font-size: 30px;
`;
