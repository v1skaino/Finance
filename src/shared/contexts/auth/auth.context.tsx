import { createContext, useContext, useMemo, useState } from "react";
import { debug } from "../../utils/debug";
import { GlobalProviderType, GlobalStateType } from "./types";

export const GlobalStateCtx = createContext<GlobalStateType>(
  {} as GlobalStateType,
);

const GlobalProvider = ({ children }: GlobalProviderType) => {
  const [username, setUsername] = useState<string>("Teste");

  const globalProviderValues = useMemo(() => {
    return { state: { username }, methods: { setUsername } };
  }, [username, setUsername]);

  debug.globalState(globalProviderValues?.state, "Global", "#8F2D56");

  return (
    <GlobalStateCtx.Provider value={globalProviderValues}>
      {children}
    </GlobalStateCtx.Provider>
  );
};

const useGlobal = (): GlobalStateType => useContext(GlobalStateCtx);

export { GlobalProvider, useGlobal };
