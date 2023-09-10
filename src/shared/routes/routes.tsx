import { useGlobal } from "../contexts/global/global.context";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

function Routes() {
  const {
    state: { authenticated, isLoading },
  } = useGlobal();

  return authenticated ? <AppRoutes /> : <AuthRoutes />;
}

export { Routes };
