import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/src/types";
import { useGlobal } from "../../contexts/global/global.context";

export const Drawer = (props: DrawerContentComponentProps) => {
  const { methods } = useGlobal();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Sair" onPress={methods?.signOut} />
    </DrawerContentScrollView>
  );
};
