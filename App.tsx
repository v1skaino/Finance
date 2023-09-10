import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { GlobalProvider } from "./src/shared/contexts/global/global.context";
import { Routes } from "./src/shared/routes/routes";

export default function App() {
  return (
    <Fragment>
      <NavigationContainer>
        <GlobalProvider>
          <StatusBar backgroundColor="#F0F4FF" style="dark" />
          <Routes />
        </GlobalProvider>
      </NavigationContainer>
      <Toast />
    </Fragment>
  );
}
