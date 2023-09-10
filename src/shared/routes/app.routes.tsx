import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeView } from "../../pages";

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen name="Home" component={HomeView} />
    </AppDrawer.Navigator>
  );
}

export { AppRoutes };
