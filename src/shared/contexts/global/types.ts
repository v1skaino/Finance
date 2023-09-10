import React, { Dispatch, SetStateAction } from "react";

type GlobalStateType = {
  state: { username: string; isLoading: boolean };
  methods: {
    setUsername: Dispatch<SetStateAction<string>>;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
  };
};

type GlobalProviderType = {
  children: React.ReactElement | React.ReactElement[];
};

export type { GlobalProviderType, GlobalStateType };
