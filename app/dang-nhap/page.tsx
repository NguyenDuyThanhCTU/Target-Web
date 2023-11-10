import ClientLogin from "@components/login/ClientLogin";
import { ParticlesCustom } from "@components/login/Items/ParticlesCustom";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <ParticlesCustom />
      <div className="bg-[rgba(0,0,0,0.3)] w-full h-full z-50 absolute flex justify-center items-center">
        <div className="d:w-[880px] p:w-[90vw] h-max   bg-white   flex font-LexendDeca cursor-pointer rounded-sm -z-10">
          <ClientLogin />

          <div className="d:flex flex-1 p:hidden ">
            <div className="overflow-hidden h-full">
              <img
                src="https://vieclam24h.vn/img/loginv2/bg-register.png"
                alt=""
                className="object-contain "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
