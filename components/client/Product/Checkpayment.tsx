"use client";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { Modal } from "antd";
import React, { useEffect, useState } from "react";

const Checkpayment = ({ Product, pId }: any) => {
  console.log(Product);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentUser } = useData();
  const { setLoginState } = useStateProvider();
  const HandleLogin = () => {
    setLoginState(true);
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (!currentUser) {
      setIsModalOpen(true);
    }
  }, []);
  return (
    <div>
      <>
        <Modal
          closable={false}
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
        >
          <div>
            <h2 className="text-[24px] font-semibold">Đến trang đăng nhập</h2>
            <p>Đăng nhập để giao dịch</p>
            <div className="flex w-full justify-center gap-5 mt-5">
              <div
                className="py-2 px-6 rounded-full border border-mainyellow cursor-pointer text-mainyellow duration-300 hover:border-orange-500 hover:text-orange-500"
                onClick={() => setIsModalOpen(false)}
              >
                Hủy
              </div>
              <div
                className="py-2 px-6 rounded-full border border-mainyellow bg-mainyellow text-white duration-300 hover:bg-orange-500 hover:border-orange-500 cursor-pointer"
                onClick={() => HandleLogin()}
              >
                Đăng nhập
              </div>
            </div>
          </div>
        </Modal>
      </>
    </div>
  );
};

export default Checkpayment;
