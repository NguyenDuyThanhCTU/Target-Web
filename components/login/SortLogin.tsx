"use client";
import { Modal } from "antd";
import React from "react";
import ClientLogin from "./ClientLogin";
import { useStateProvider } from "@context/StateProvider";

const SortLogin = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { LoginState } = useStateProvider();
  return (
    <Modal
      closable={false}
      open={LoginState}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      <ClientLogin />
    </Modal>
  );
};

export default SortLogin;
