import React, { Dispatch, SetStateAction } from "react";
import { SignInDataModel } from "../../repositories/auth/auth.model";

interface UserType extends SignInDataModel {
  email: string;
}

type GlobalStateType = {
  state: { user: UserType | null; isLoading: boolean; authenticated: boolean };
  methods: {
    setUser: Dispatch<SetStateAction<UserType | null>>;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
  };
};

type GlobalProviderType = {
  children: React.ReactElement | React.ReactElement[];
};

export type { GlobalProviderType, GlobalStateType, UserType };
