import React, { Dispatch, SetStateAction } from "react";

type GlobalStateType = {
  state: { username: string };
  methods: { setUsername: Dispatch<SetStateAction<string>> };
};

type GlobalProviderType = {
  children: React.ReactElement | React.ReactElement[];
};

export type { GlobalProviderType, GlobalStateType };
