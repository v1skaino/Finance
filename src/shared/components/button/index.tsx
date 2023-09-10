import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { styled } from "styled-components/native";

interface MainButtonProps extends TouchableOpacityProps {
  label: string;
  loader?: boolean;
  bgColor?: string;
}

export const MainButton = ({
  label,
  loader,
  bgColor,
  ...rest
}: MainButtonProps) => {
  return (
    <SubmitButton $bgColor={bgColor ?? "#3b3bbf;"} {...rest} disabled={loader}>
      {loader && <ActivityIndicator size={20} color="#fff" />}
      {!loader && <SubmitText>{label}</SubmitText>}
    </SubmitButton>
  );
};

const SubmitButton = styled.TouchableOpacity<{ $bgColor: string }>`
  margin-top: 10px;
  width: 100%;
  height: 45px;
  border-radius: 8px;
  background-color: ${(props) => props.$bgColor};
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const SubmitText = styled.Text`
  font-size: 20px;
  color: #fff;
`;
