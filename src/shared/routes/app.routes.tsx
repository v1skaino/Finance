import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeView } from "../../pages";
import { CreateMovementView } from "../../pages/app/createMovement/view";
import { Drawer } from "../components/drawer";

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
      drawerContent={Drawer}
    >
      <AppDrawer.Screen
        name="Home"
        component={HomeView}
        options={{
          headerTitle: "Minhas movimentações",
          headerStyle: { backgroundColor: "#fff" },
        }}
      />
      <AppDrawer.Screen
        name="Movimentação"
        component={CreateMovementView}
        options={{ headerTitle: "Nova Movimentação" }}
      />
    </AppDrawer.Navigator>
  );
}

export { AppRoutes };
