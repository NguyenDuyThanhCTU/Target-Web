"use client";
import Input from "@components/admin/Item/Input";
import {
  addDocument,
  updateDocumentByField,
} from "@config/Services/Firebase/FireStoreDB";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { Modal, notification } from "antd";
import React, { useEffect } from "react";
import { AiOutlineTransaction } from "react-icons/ai";

const Exchange = () => {
  const { currentUser, setCurrentUser } = useData();
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const { setIsRefetch } = useStateProvider();
  const [Point, setPoint] = React.useState(0);
  const [PointLabel, setPointLabel] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [updatePoint, setUpdatePoint] = React.useState(0);

  useEffect(() => {
    const updatedUser = {
      ...currentUser,
      collectionPoint: updatePoint,
    };
    setCurrentUser(updatedUser);
  }, [updatePoint]);
  const ExchangeItems = [
    {
      label: "10000 Điểm - 0.01 SepoliaETH",
      value: "10000",
    },
    {
      label: "20000 Điểm - 0.022 SepoliaETH",
      value: "20000",
    },
    {
      label: "30000 Điểm - 0.035 SepoliaETH",
      value: "30000",
    },
    {
      label: "40000 Điểm - 0.05 SepoliaETH",
      value: "40000",
    },
    {
      label: "50000 Điểm - 0.07 SepoliaETH",
      value: "50000",
    },
    {
      label: "60000 Điểm - 0.09 SepoliaETH",
      value: "60000",
    },
    {
      label: "70000 Điểm - 0.11 SepoliaETH",
      value: "70000",
    },
    {
      label: "80000 Điểm - 0.13 SepoliaETH",
      value: "80000",
    },
    {
      label: "90000 Điểm - 0.15 SepoliaETH",
      value: "90000",
    },
    {
      label: "100000 Điểm - 0.17 SepoliaETH",
      value: "100000",
    },
    {
      label: "200000 Điểm - 0.35 SepoliaETH",
      value: "200000",
    },
    {
      label: "300000 Điểm - 0.5 SepoliaETH",
      value: "300000",
    },
    {
      label: "400000 Điểm - 0.7 SepoliaETH",
      value: "400000",
    },
    {
      label: "500000 Điểm - 0.9 SepoliaETH",
      value: "500000",
    },
    {
      label: "600000 Điểm - 1.1 SepoliaETH",
      value: "600000",
    },
    {
      label: "700000 Điểm - 1.3 SepoliaETH",
      value: "700000",
    },
    {
      label: "800000 Điểm - 1.5 SepoliaETH",
      value: "800000",
    },
    {
      label: "900000 Điểm - 1.7 SepoliaETH",
      value: "900000",
    },
  ];
  const HandleExchange = async (value: any, label: any) => {
    const valueNumber = Number(value);
    const collectionPoint = Number(currentUser?.collectionPoint);

    if (collectionPoint >= valueNumber) {
      setPoint(valueNumber);
      setPointLabel(label);
      setIsModalVisible(true);
    } else {
      notification["error"]({
        message: "Đổi điểm thất bại",
        description: `Điểm thưởng của bạn không đủ để đổi !`,
      });
    }
  };

  const HandleContinue = async () => {
    //check address format here
    const addressFormat = /^0x[a-fA-F0-9]{40}$/;
    const checkAddress = addressFormat.test(address);
    if (address === "") {
      notification["error"]({
        message: "Đổi điểm thất bại",
        description: `Vui lòng nhập địa chỉ ví SepoliaETH !`,
      });
      return;
    }
    if (!checkAddress) {
      notification["error"]({
        message: "Đổi điểm thất bại",
        description: `Địa chỉ ví SepoliaETH không hợp lệ !`,
      });
      return;
    } else {
      notification["success"]({
        message: "Yêu cầu đổi điểm của bạn đã được gửi !",
        description: `Vui lòng chờ xác nhận từ admin !`,
      });
      //update new collection point
      const newCollectionPoint = Number(currentUser?.collectionPoint) - Point;
      setUpdatePoint(newCollectionPoint);

      await updateDocumentByField(
        "accounts",
        currentUser?.id,
        newCollectionPoint,
        "collectionPoint"
      ).then(() => {
        setIsRefetch("CRUD account");
      });

      const dataNotification = {
        title: "Yêu cầu đổi điểm",
        Textamount: PointLabel,
        amount: Point,
        address: address,
        time: new Date(),
        userId: currentUser?.id,
        type: "exchange",
        state: "pending",
      };

      addDocument("notification", dataNotification).then(() => {
        setIsRefetch("CRUD notification");
      });
      setAddress("");
      setPoint(0);
      setPointLabel("");
      setIsModalVisible(false);
    }
  };

  return (
    <div>
      <h2 className="text-[24px] font-normal text-white">Đổi điểm thưởng</h2>
      <h2>
        <span className="text-[#D8D8D8]">Điểm hiện tại: </span>
        <span className="text-[#FFD700]">
          {updatePoint ? updatePoint : currentUser?.collectionPoint}
        </span>
      </h2>
      <div className="grid gap-5 p:grid-cols-2 d:grid-cols-4 mt-5">
        {ExchangeItems.map((item: any, idx: number) => (
          <div key={idx}>
            <div className="bg-[#2D2D2D] rounded-lg p-5">
              <div className="flex justify-between">
                <div className="text-[#D8D8D8]">{item.label}</div>
                <div
                  className="bg-redPrimmary rounded-lg p-2 cursor-pointer"
                  onClick={() => HandleExchange(item.value, item.label)}
                >
                  <AiOutlineTransaction />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <>
        <Modal
          closable={false}
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <div>
            <h2 className="text-[24px] font-semibold">Địa chỉ ví SepoliaETH</h2>
            <Input
              PlaceHolder="Nhập địa chỉ ví SepoliaETH"
              Input={true}
              Value={address}
              setValue={(e: any) => setAddress(e.target.value)}
            />

            <div className="flex w-full justify-center gap-5 mt-5">
              <div
                className="py-2 px-6 rounded-full border border-mainyellow cursor-pointer text-mainyellow duration-300 hover:border-orange-500 hover:text-orange-500"
                onClick={() => setIsModalVisible(false)}
              >
                Hủy
              </div>
              <div
                className="py-2 px-6 rounded-full border border-mainyellow bg-mainyellow text-white duration-300 hover:bg-orange-500 hover:border-orange-500 cursor-pointer"
                onClick={() => HandleContinue()}
              >
                Tiếp tục
              </div>
            </div>
          </div>
        </Modal>
      </>
    </div>
  );
};

export default Exchange;
