import { View } from "react-native";
import { AuthRoutes } from "./auth.routes";

function Routes() {
  const loading = false;
  const authenticated = false;

  return authenticated ? <View></View> : <AuthRoutes />;
}

export { Routes };
