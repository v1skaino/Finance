import moment from "moment";
import styled from "styled-components/native";

type NoDataFoundProps = {
  date: Date;
};

export const NoDataFound = ({ date }: NoDataFoundProps) => {
  const currentDate = moment(date);

  return (
    <Wrapper>
      <NoDataImage
        resizeMode="contain"
        source={require("../../../../assets/notDataFound.png")}
      />
      <OpssText>OPS...</OpssText>
      <InfoText>
        Nenhum registro encontrado no dia {"\n"}
        {currentDate.format("DD")} de {currentDate.format("MMMM")} de{" "}
        {currentDate.format("YYYY")}
      </InfoText>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: column;
  width: 100%;

  row-gap: 10px;

  justify-content: center;
  align-items: center;
`;

const NoDataImage = styled.Image`
  height: 150px;
  width: 190px;
`;

const OpssText = styled.Text`
  font-size: 22px;
  font-weight: 600;
`;

const InfoText = styled.Text`
  text-align: center;
  font-size: 16px;
`;
