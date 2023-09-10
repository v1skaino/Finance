import { Loader } from "../components/loader/loader";
import { useGlobal } from "../contexts/global/global.context";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

function Routes() {
  const {
    state: { authenticated, isLoading },
  } = useGlobal();

  if (isLoading) return <Loader />;

  return authenticated ? <AppRoutes /> : <AuthRoutes />;
}

export { Routes };
