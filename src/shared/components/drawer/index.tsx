import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/src/types";
import { Image } from "react-native";
import styled from "styled-components/native";
import { useGlobal } from "../../contexts/global/global.context";

export const Drawer = (props: DrawerContentComponentProps) => {
  const { methods } = useGlobal();

  return (
    <DrawerContentScrollView {...props}>
      <Wrapper>
        <Image source={require("../../../../assets/Logo.png")} />
      </Wrapper>
      <DrawerItemList {...props} />
      <DrawerItem label="Sair" onPress={methods?.signOut} />
    </DrawerContentScrollView>
  );
};

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  gap: 5px;
`;
