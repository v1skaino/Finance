import React from "react";
import styled from "styled-components/native";
import { isIOS } from "../../shared/utils/helper";

export function SignUpView(): React.JSX.Element {
  return (
    <Background>
      <Wrapper behavior={isIOS() ? "padding" : undefined} enabled>
        <InputWrapper>
          <Input placeholder="Nome" />
        </InputWrapper>
        <InputWrapper>
          <Input placeholder="Email" />
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder="Senha"
            secureTextEntry
            textContentType="password"
          />
        </InputWrapper>
        <SubmitButton activeOpacity={0.8}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Wrapper>
    </Background>
  );
}

const Background = styled.View`
  flex: 1;
  background-color: #f0f4ff;
`;

const Wrapper = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const InputWrapper = styled.View`
  flex-direction: row;
`;

const Input = styled.TextInput`
  background-color: #fff;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color: #121212;
  margin-bottom: 15px;
`;

const SubmitButton = styled.TouchableOpacity`
  margin-top: 10px;
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color: #3b3bbf;
  align-items: center;
  justify-content: center;
`;

const SubmitText = styled.Text`
  font-size: 20px;
  color: #fff;
`;
