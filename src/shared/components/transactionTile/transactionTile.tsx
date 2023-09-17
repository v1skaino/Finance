import Ionicons from "@expo/vector-icons/Ionicons";
import moment from "moment";
import "moment/locale/pt-br";
import { Text } from "react-native";
import styled from "styled-components/native";
import { TransactionsDataModel } from "../../repositories/app/app.model";
import { capitalizeFirstLetter, formatCurrency } from "../../utils/helper";

type Config = {
  icon: "trending-down" | "trending-up";
  color: string;
};

const renderIcon = (type: TransactionsDataModel["type"]) => {
  const config: Config =
    type == "despesa"
      ? { icon: "trending-down", color: "red" }
      : { icon: "trending-up", color: "#008000" };
  return <Ionicons name={config?.icon} color={config.color} size={26} />;
};

export const TransactionTile = ({
  type,
  description,
  date,
  value,
}: TransactionsDataModel) => {
  const operator = () => {
    return type == "despesa" ? "-" : "+";
  };

  const formatDate = (date: string) => {
    if (!date) return "";
    return moment(date, "DD/MM/YYYY").format("DD MMM YYYY");
  };

  return (
    <Wrapper>
      <Row>
        <LeftSideWrapper>
          <IconWrapper>{renderIcon(type)}</IconWrapper>
          <DescriptionWrapper>
            <Text numberOfLines={1} ellipsizeMode="tail">
              {description}
            </Text>
            <Type>{capitalizeFirstLetter(type)}</Type>
          </DescriptionWrapper>
        </LeftSideWrapper>
        <RightSideWrapper>
          <Currency $type={type}>
            {operator()} R$ {formatCurrency(value ?? 0)}
          </Currency>
          <DateWrapper>{formatDate(date)}</DateWrapper>
        </RightSideWrapper>
      </Row>
      <Separator />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  padding: 10px;
  flex-direction: column;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LeftSideWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const DescriptionWrapper = styled.View`
  flex-direction: column;
`;

const IconWrapper = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #f0f4ff;
`;

const Type = styled.Text`
  color: #989797;
  font-size: 10px;
`;

const RightSideWrapper = styled.View`
  flex-direction: column;
  align-items: flex-end;
`;

const Currency = styled.Text<{ $type: "receita" | "despesa" }>`
  color: ${(props) => (props.$type == "despesa" ? "red" : "#008000")};
`;

const DateWrapper = styled.Text`
  color: #989797;
  font-size: 10px;
`;

const Separator = styled.View`
  height: 1px;
  background-color: #dddbdb;
  margin-top: 10px;
`;
