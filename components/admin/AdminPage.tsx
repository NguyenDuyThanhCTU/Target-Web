"use client";
import Content from "@components/admin/Content/Content";
import AdminDropDown from "@components/admin/Item/AdminDropDown";
import Header from "@components/layout/admin-layout/Header";
import Sidebar from "@components/layout/admin-layout/Sidebar";
import ClientLogin from "@components/login/ClientLogin";
import { ParticlesCustom } from "@components/login/Items/ParticlesCustom";
import { useAuth } from "@context/AuthProviders";
import { useSmartContract } from "@context/ContractProviders";
import { Alert, Modal, Spin } from "antd";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";

const AdminPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(true);
  const { connect } = useSmartContract();
  const { verify } = useAuth();
  const router = useRouter();
  const HandleConnectMetamask = () => {
    connect().then(() => setIsModalOpen(false));
  };
  verify ? router.push("/dang-nhap") : null;
  return (
    <div>
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
        <Modal
          footer={false}
          closable={false}
          className="bg-none"
          open={isModalOpen}
          style={{ background: "none" }}
        >
          <div className="w-full flex items-center justify-center">
            <button
              className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] bg-[#1dc071] hover:bg-[#298257] duration-300`}
              onClick={() => HandleConnectMetamask()}
            >
              Kết nối với ví Metamask
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default AdminPage;
