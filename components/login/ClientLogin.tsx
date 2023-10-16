"use client";
import React, { useState } from "react";
import { ChangePassword } from "./Section/ChangePassword";
import { Login } from "./Section/Login";

const ClientLogin: React.FC = () => {
  const [isChangePasswords, setIsChangePasswords] = useState(false);

  return (
    <>
      {isChangePasswords ? (
        <ChangePassword setIsChangePasswords={setIsChangePasswords} />
      ) : (
        <Login setIsChangePasswords={setIsChangePasswords} />
      )}
    </>
  );
};

export default ClientLogin;
