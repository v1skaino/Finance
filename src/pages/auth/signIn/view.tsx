import React from "react";
import { styled } from "styled-components/native";
import { Input } from "../../../shared/components/input/input";
import { isIOS } from "../../../shared/utils/helper";
import { SignInViewModel } from "./model";
import { useSignInViewModel } from "./view.model";

export function SignInView({ navigation }: SignInViewModel): React.JSX.Element {
  const {
    methods: { navigateToSignUp },
    state: {},
  } = useSignInViewModel({ navigation });

  return (
    <Background>
      <Wrapper behavior={isIOS() ? "padding" : undefined} enabled>
        <Logo source={require("../../../assets/Logo.png")} />
        <InputWrapper>
          <Input placeholder="Email" />
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder="Senha"
            textContentType="password"
            secureTextEntry
          />
        </InputWrapper>
        <SubmitButton activeOpacity={0.8}>
          <SubmitText>Entrar</SubmitText>
        </SubmitButton>
        <Link onPress={navigateToSignUp}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>
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

const Logo = styled.Image`
  margin-bottom: 25px;
`;

const InputWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
  width: 90%;
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

const Link = styled.TouchableOpacity`
  margin: 10px 0px;
`;

const LinkText = styled.Text`
  color: #171717;
`;
