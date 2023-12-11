"use client";
import {
  addDocument,
  updateDocumentByField,
} from "@config/Services/Firebase/FireStoreDB";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { Modal, notification } from "antd";
import Lottie from "lottie-react";
import React, { useState } from "react";
import iconCoin from "@assets/animation/coin-icon.json";
import { useSmartContract } from "@context/ContractProviders";

const FormConfirm = ({ setStep, setOrderId }: any) => {
  const { Bill, currentUser, setCurrentUser } = useData();
  const { buyShoe } = useSmartContract();
  const { setIsLoading } = useStateProvider();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const HandlePayment = () => {
    setIsLoading(true);
    buyShoe(Bill.pId, Bill.price).then((res: any) => {
      if (res) {
        addDocument("orders", Bill).then((res: any) => {
          const updateUserCollection = [
            ...currentUser.productscollection,
            Bill?.productId,
          ];

          updateDocumentByField(
            "accounts",
            currentUser.id,
            updateUserCollection,
            "productscollection"
          );
          notification.success({ message: "Thành công" });

          const updatedUser = {
            ...currentUser,
            productscollection: updateUserCollection,
          };

          setCurrentUser(updatedUser);

          setStep(3);
          setOrderId(res);
          setIsLoading(false);
        });
      }
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-[25px] font-normal">Thông tin đơn hàng</h2>
      <div className="grid grid-cols-2 gap-5">
        <div className="border">
          <div className="p-4 flex flex-col gap-2">
            <p>
              <strong>Khách hàng:</strong> {Bill?.name}
            </p>
            <p>
              <strong>Số điện thoại:</strong> {Bill?.phone}
            </p>
            <p>
              <strong>Địa chỉ:</strong> {Bill?.address}
            </p>
            <p>
              <strong>Email</strong> {Bill?.email}
            </p>
          </div>
        </div>
        <div className="border">
          <div className=" p-4 flex h-full justify-between flex-col">
            <div className="pb-2 flex flex-col gap-2">
              <div className="flex gap-2">
                <strong>Sản phẩm:</strong>{" "}
                <div
                  className="text-mainorange font-normal cursor-pointer hover:text-orange-600 duration-300"
                  onClick={() => setIsModalOpen(true)}
                >
                  {Bill?.productId}
                </div>
              </div>
              <p>
                <strong>Cấp sản phẩm:</strong> {Bill?.level}
              </p>
              <p>
                <strong>giá:</strong> {Bill?.price} SepoliaETH
              </p>
            </div>
            <div className="flex w-full justify-between border-t pt-2">
              <div className="text-[22px] font-normal">Tổng thanh toán:</div>
              <div>
                <span className="text-[22px] font-normal">
                  {Bill?.price} SepoliaETH
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-[25px] font-normal">Phương thức thanh toán</h2>
        <p>Thanh toán thông qua MetaMask</p>
      </div>
      <div className="grid grid-cols-2">
        <div className="font-normal text-[18px] flex justify-between w-full">
          <div>Tổng thanh toán</div>
          <div>
            <span className=" font-normal"> {Bill?.price} SepoliaETH</span>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex w-full  gap-5">
        <div
          className="py-2 px-6  duration-300 cursor-pointer text-mainyellow border-mainyellow uppercase border rounded-full font-normal hover:text-orange-500 hover:border-orange-500"
          onClick={() => setStep(1)}
        >
          Quay về
        </div>
        <div
          className="py-2  px-10 duration-300 cursor-pointer text-white bg-mainyellow border-mainyellow uppercase border rounded-full font-normal hover:bg-orange-500 hover:border-orange-500"
          onClick={() => HandlePayment()}
        >
          Tiếp tục
        </div>
      </div>
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <div className="flex gap-3 py-3 border-b cursor-pointer hover:bg-gray-100">
          <div className="flex-[30%]">
            <img src={Bill?.image} alt="similarProduct" />
          </div>
          <div className="flex-[60%] ">
            <div>
              <h3 className="truncate1">
                {Bill?.name} - cấp {Bill?.level}
              </h3>

              <div className="flex items-center ">
                <div className="w-10">
                  <Lottie animationData={iconCoin} />
                </div>
                <span className="text-red-500">{Bill?.price} SepoliaETH</span>
              </div>
              <div className="flex flex-col">
                <p>
                  {" "}
                  Tốc độ tối đa:{" "}
                  <span className="text-green-500">
                    +${Bill?.limitspeed} km/h
                  </span>
                </p>
                <p>
                  {" "}
                  Quãng đường tối đa :{" "}
                  <span className="text-green-500">
                    +${Bill?.limitdistance} km{" "}
                  </span>
                </p>
                <p>
                  {" "}
                  Số coin nhận được:{" "}
                  <span className="text-green-500">
                    +${Bill?.limitcoinearning} SepoliaETH{" "}
                  </span>
                </p>
                <p>
                  {" "}
                  Thời gian chờ:{" "}
                  <span className="text-green-500">
                    +${Bill?.limittime} phút{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FormConfirm;
