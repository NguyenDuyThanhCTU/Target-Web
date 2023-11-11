"use client";
import React, { useState } from "react";
import { ChangePassword } from "./Section/ChangePassword";
import { Login } from "./Section/Login";
import Register from "./Section/Register";

const ClientLogin = () => {
  const [changeState, setChangeState] = useState(0);

  return (
    <>
      {changeState === 0 ? (
        <Login setChangeState={setChangeState} />
      ) : changeState === 1 ? (
        <ChangePassword setChangeState={setChangeState} />
      ) : (
        <Register setChangeState={setChangeState} />
      )}
    </>
  );
};

export default ClientLogin;
