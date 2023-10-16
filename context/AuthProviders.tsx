"use client";
import React, { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export type AuthContextType = {
  verify: boolean;
  setVerify: (state: boolean) => void;
  accounts: any;
  setAccounts: (account: any) => void;
  users: any;
  setUsers: (user: any) => void;
};

export const AuthContext = createContext<AuthContextType>({
  verify: false,
  setVerify: () => {},
  accounts: "",
  setAccounts: () => {},
  users: "",
  setUsers: () => {},
});

export const AuthProviders: React.FC<Props> = ({ children }) => {
  const [verify, setVerify] = useState(false);
  const [accounts, setAccounts] = useState();
  const [users, setUsers] = useState();

  return (
    <AuthContext.Provider
      value={{ verify, setVerify, accounts, setAccounts, users, setUsers }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
