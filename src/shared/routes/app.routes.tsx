import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeView } from "../../pages";

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTintColor: "#121212",
        headerStyle: { backgroundColor: "#f0f4ff" },
        drawerStyle: { backgroundColor: "#fff", paddingTop: 20 },
        drawerActiveBackgroundColor: "#3b3dbd",
        drawerActiveTintColor: "#fff",
        drawerInactiveBackgroundColor: "#f0f0f0",
        drawerInactiveTintColor: "#121212",
      }}
    >
      <AppDrawer.Screen
        name="Home"
        component={HomeView}
        options={{ headerTitle: "Minhas movimentações" }}
      />
    </AppDrawer.Navigator>
  );
}

export { AppRoutes };
