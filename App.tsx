import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { GlobalProvider } from "./src/shared/contexts/auth/auth.context";
import { Routes } from "./src/shared/routes/routes";

export default function App() {
  return (
    <NavigationContainer>
      <GlobalProvider>
        <StatusBar backgroundColor="#F0F4FF" style="dark" />
        <Routes />
      </GlobalProvider>
    </NavigationContainer>
  );
}
