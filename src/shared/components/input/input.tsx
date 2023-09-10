import { TextInputProps } from "react-native";
import styled from "styled-components/native";

interface InputProps extends TextInputProps {
  error?: boolean;
  errorMessage?: string;
}

export const Input = ({ error, errorMessage, ...rest }: InputProps) => {
  return (
    <Wrapper>
      <TextField {...rest} error={error} />
      {error && <HelperText>{errorMessage ?? "Campo obrigatório!"}</HelperText>}
    </Wrapper>
  );
};

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  row-gap: 2px;
`;

const TextField = styled.TextInput<{ error?: boolean }>`
  background-color: #fff;
  width: 100%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color: #121212;

  border: 1px solid #fff;
  border-color: ${(props) => (props.error ? "#ef0d0d" : "#fff")};
`;

const HelperText = styled.Text`
  color: #ef0d0d;
  font-size: 12px;
`;
