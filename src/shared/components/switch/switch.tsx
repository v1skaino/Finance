import { Dispatch, SetStateAction, useState } from "react";
import { styled } from "styled-components/native";

type SwitchProps = {
  type: "receita" | "despesa";
  updateType: Dispatch<SetStateAction<"receita" | "despesa">>;
};

export const Switch = ({ type, updateType }: SwitchProps) => {
  const [checkedType, setCheckedType] = useState(type);

  const changeType = (newType: "receita" | "despesa") => {
    setCheckedType(newType);
    updateType(newType);
  };

  return (
    <Wrapper>
      <SwitchTypeButton
        $checked={checkedType === "receita"}
        onPress={() => changeType("receita")}
      >
        <SwitchTypeButtonLabel>Receita</SwitchTypeButtonLabel>
      </SwitchTypeButton>
      <SwitchTypeButton
        $checked={checkedType === "despesa"}
        onPress={() => changeType("despesa")}
      >
        <SwitchTypeButtonLabel>Despesa</SwitchTypeButtonLabel>
      </SwitchTypeButton>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  width: 100%;

  justify-content: space-between;
  align-items: center;
`;

const SwitchTypeButton = styled.TouchableOpacity<{ $checked: boolean }>`
  background-color: ${(props) => (props.$checked ? "#fff" : "#e7e7e7")};
  width: 47%;
  justify-content: center;
  align-items: center;
  height: 45px;
  border-radius: 4px;
  border-width: 1.5px;
  border-color: ${(props) => (props.$checked ? "#3b3dbf;" : "transparent")};
`;

const SwitchTypeButtonLabel = styled.Text`
  font-size: 17px;
`;
