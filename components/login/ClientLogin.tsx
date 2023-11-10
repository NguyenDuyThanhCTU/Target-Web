"use client";
import React, { useState } from "react";
import { ChangePassword } from "./Section/ChangePassword";
import { Login } from "./Section/Login";
import Register from "./Section/Register";

const ClientLogin = () => {
  const [isChangePasswords, setIsChangePasswords] = useState(false);
  const [changeState, setChangeState] = useState(0);

  return (
    <>
      {/* {changeState === 0 ? (
        <Login setChangeState={setChangeState} role={role} />
      ) : changeState === 1 ? (
        <ChangePassword setChangeState={setChangeState} />
      ) : null} */}
      <Register setChangeState={setChangeState} />
    </>
  );
};

export default ClientLogin;
