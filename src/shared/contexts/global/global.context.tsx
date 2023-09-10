import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { loadUserData } from "../../repositories/auth/auth.repository";
import { AsyncStorageService } from "../../services/AsyncStorage";
import { debug } from "../../utils/debug";
import { GlobalProviderType, GlobalStateType, UserType } from "./types";

const { getItem, clear } = AsyncStorageService;

export const GlobalStateCtx = createContext<GlobalStateType>(
  {} as GlobalStateType,
);

const GlobalProvider = ({ children }: GlobalProviderType) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signOut = () => {
    clear();
    setUser(null);
  };

  useEffect(() => {
    async function loadStorage() {
      const token = await getItem("@finance_token__");

      if (!token) clear();

      if (token) {
        setIsLoading(true);
        try {
          const { data } = await loadUserData();
          setUser(data);
        } catch (error) {
          clear();
          setUser(null);
        } finally {
          setIsLoading(false);
        }
      }
    }

    loadStorage();
  }, []);

  const globalProviderValues = useMemo(() => {
    return {
      state: { user, isLoading, authenticated: !!user },
      methods: { setUser, setIsLoading, signOut },
    };
  }, [user, setUser, isLoading, setIsLoading, signOut]);

  debug.globalState(globalProviderValues?.state, "Global", "#8F2D56");

  return (
    <GlobalStateCtx.Provider value={globalProviderValues}>
      {children}
    </GlobalStateCtx.Provider>
  );
};

const useGlobal = (): GlobalStateType => useContext(GlobalStateCtx);

export { GlobalProvider, useGlobal };
