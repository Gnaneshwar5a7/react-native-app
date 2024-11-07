import React, {createContext, useEffect, useState} from 'react';

import {getAuthUserFromStore, setAuthUserToStore} from '../store/authStore';

export interface AuthUserType {
  loginStatus: boolean;
  username: string;
  token?: string;
}

export interface AuthContextType {
  authUser?: AuthUserType;
  loginAuthUser(data: AuthUserType): void;
  logoutAuthUser(data: AuthUserType): void;
}

interface AuthContextProviderProps {
  children: JSX.Element;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export default function AuthContextProvider(props: AuthContextProviderProps) {
  const [authUser, setAuthUser] = useState<AuthUserType | undefined>();

  useEffect(() => {
    getAuthUserFromStore(setAuthUser);
  }, []);

  function loginAuthUser(data: AuthUserType) {
    setAuthUser(data);
    setAuthUserToStore(data);
  }
  function logoutAuthUser(data: AuthUserType) {
    setAuthUser(data);
    setAuthUserToStore(data);
  }

  return (
    <AuthContext.Provider
      value={{authUser, loginAuthUser, logoutAuthUser}}
      children={props.children}
    />
  );
}
