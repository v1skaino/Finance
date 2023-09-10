import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

function Routes() {
  const loading = false;
  const authenticated = true;

  return authenticated ? <AppRoutes /> : <AuthRoutes />;
}

export { Routes };
