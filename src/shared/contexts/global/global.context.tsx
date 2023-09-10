import { createContext, useContext, useMemo, useState } from "react";
import { debug } from "../../utils/debug";
import { GlobalProviderType, GlobalStateType, UserType } from "./types";

export const GlobalStateCtx = createContext<GlobalStateType>(
  {} as GlobalStateType,
);

const GlobalProvider = ({ children }: GlobalProviderType) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const globalProviderValues = useMemo(() => {
    return {
      state: { user, isLoading, authenticated: !!user },
      methods: { setUser, setIsLoading },
    };
  }, [user, setUser]);

  debug.globalState(globalProviderValues?.state, "Global", "#8F2D56");

  return (
    <GlobalStateCtx.Provider value={globalProviderValues}>
      {children}
    </GlobalStateCtx.Provider>
  );
};

const useGlobal = (): GlobalStateType => useContext(GlobalStateCtx);

export { GlobalProvider, useGlobal };
