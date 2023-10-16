"use client";
import Content from "@components/admin/Content/Content";
import AdminDropDown from "@components/admin/Item/AdminDropDown";
import Header from "@components/layout/admin-layout/Header";
import Sidebar from "@components/layout/admin-layout/Sidebar";
import ClientLogin from "@components/login/ClientLogin";
import { ParticlesCustom } from "@components/login/Items/ParticlesCustom";
import { useAuth } from "@context/AuthProviders";

import React from "react";

const AdminPage = () => {
  const { verify } = useAuth();

  return (
    <div>
      {verify ? (
        <div className="grid grid-flow-col font-LexendDeca relative ">
          <AdminDropDown />

          <div className="flex w-full">
            <div
              className={`overflow-hidden  d:min-w-[310px] 
          d:block p:hidden`}
            >
              <Sidebar />
            </div>
            <div className="flex-[80%]  bg-[#292929] ">
              <div className="d:relative p:fixed w-full z-20">
                <Header />
              </div>
              <div className="d:mt-0 p:mt-16">
                <Content />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <ParticlesCustom />
          <div className="bg-[rgba(0,0,0,0.3)] w-full h-full z-50 absolute">
            <div className="d:w-[880px] p:w-[90vw] h-[529px] absolute  bg-white bottom-[25%] p:left-[5%] d:left-[30%] flex font-LexendDeca cursor-pointer rounded-sm -z-10">
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
      )}
    </div>
  );
};

export default AdminPage;
