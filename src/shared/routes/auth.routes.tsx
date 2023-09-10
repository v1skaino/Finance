import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInView, SignUpView } from "../../pages";

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignInView}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen name="SignUp" component={SignUpView} />
    </AuthStack.Navigator>
  );
}

export { AuthRoutes };
