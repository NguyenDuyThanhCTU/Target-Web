"use client";
import React, { useState } from "react";
import FormOrder from "./FormOrder";
import FormConfirm from "./FormConfirm";
import Success from "./Success";
import { Modal } from "antd";
import { useSmartContract } from "@context/ContractProviders";

const Payment = () => {
  const [step, setStep] = React.useState(1);
  const [isModalOpen, setIsModalOpen] = React.useState(true);
  const { connect } = useSmartContract();
  const [OrderId, setOrderId] = useState<any>();

  const HandleConnectMetamask = () => {
    connect().then(() => setIsModalOpen(false));
  };
  return (
    <div>
      <div className="d:w-[1300px] d:mx-auto p:w-auto p:mx-2 py-10">
        <div className="d:px-20 p:px-0">
          <div className="grid items-center grid-cols-8 gap-2 justify-center">
            <div className="flex items-center gap-2 col-span-2">
              <div
                className={`${
                  step === 1 || step === 2
                    ? "bg-mainyellow text-white"
                    : "bg-gray-400 text-white"
                } w-8 flex items-center  justify-center  h-8 rounded-full `}
              >
                <span>1</span>
              </div>
              <p>Chọn địa chỉ giao hàng</p>
            </div>
            <div className="h-[1px] w-full bg-black"></div>
            <div className="flex items-center gap-2 w-full col-span-2 justify-center ">
              <div
                className={`${
                  step === 2
                    ? "bg-mainyellow text-white"
                    : "bg-gray-400 text-white"
                } w-8 flex items-center  justify-center  h-8 rounded-full `}
              >
                <span>2</span>
              </div>
              <p>Xác nhận Thông tin đơn hàng</p>
            </div>
            <div className="h-[1px] w-full bg-black"></div>

            <div className="flex items-center gap-2 col-span-2 justify-center">
              <div
                className={`${
                  step === 3
                    ? "bg-mainyellow text-white"
                    : "bg-gray-400 text-white"
                } w-8 flex items-center  justify-center  h-8 rounded-full `}
              >
                <span>3</span>
              </div>
              Đặt hàng thành công
            </div>
          </div>

          <div>
            <div
              className={`${
                step === 1 ? "block" : "hidden"
              } p:px-0 d:px-20 my-5`}
            >
              <FormOrder setStep={setStep} />
            </div>
            <div
              className={`${
                step === 2 ? "block" : "hidden"
              } p:px-0 d:px-20 my-5`}
            >
              <FormConfirm setStep={setStep} setOrderId={setOrderId} />
            </div>
            <div
              className={`${
                step === 3 ? "block" : "hidden"
              } p:px-0 d:px-20 my-5`}
            >
              <Success OrderId={OrderId} />
            </div>
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
  );
};

export default Payment;
