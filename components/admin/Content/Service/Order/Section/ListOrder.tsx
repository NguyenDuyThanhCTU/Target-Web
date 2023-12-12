"use client";
import { IconMapping } from "@assets/item";
import {
  delDocument,
  updateDocument,
} from "@config/Services/Firebase/FireStoreDB";
import { useSmartContract } from "@context/ContractProviders";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { Modal, notification } from "antd";
import React from "react";

import { SlOptions } from "react-icons/sl";

const ListOrder: React.FC = () => {
  const { Notification } = useData();
  const [Data, setData] = React.useState<any>();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { transfer } = useSmartContract();
  const { setIsRefetch } = useStateProvider();

  const HandleSelected = (id: string) => {
    const sort = Notification.filter((data: any) => data.id === id);
    setData(sort[0]);
    setIsModalOpen(true);
  };

  const HandleDelete = () => {
    if (Data.state === "pending") {
      notification["error"]({
        message: "Yêu cầu chưa được xử lý !",
        description: ` Vui lòng xử lý yêu cầu trước khi xóa !`,
      });
    } else {
      delDocument("notifications", Data.id).then(() => {
        notification["success"]({
          message: "Xóa yêu cầu thành công !",
          description: `Yêu cầu đã được xóa !`,
        });
        setIsModalOpen(false);
      });
    }
  };

  const Handle = () => {
    if (Data.state === "pending") {
      const string = Data.amount.toString();

      transfer(Data.address, string).then(() => {
        notification["success"]({
          message: "Xử lý yêu cầu thành công !",
          description: `Yêu cầu đã được xử lý !`,
        });
        //update state of notification
        const data = {
          state: "success",
        };
        updateDocument("notifications", Data.id, data).then(() => {
          setIsModalOpen(false);
          setIsRefetch("CRUD notifications");
        });
      });
    } else {
      notification["error"]({
        message: "Yêu cầu đã được xử lý !",
        description: `Vui lòng xử lý yêu cầu khác !`,
      });
    }
  };

  return (
    <div>
      <div className="rounded-xl m-5 h-[650px] overflow-y-scroll">
        <div className="grid grid-cols-12 pb-5 border-b mr-2">
          <p>STT</p>
          <p className="col-span-2">Mã KH</p>
          <p className="col-span-2">Mã Giao dịch</p>
          <p>Số lượng</p>
          <p className="col-span-2">Ghi chú</p>
          <p className="col-span-2">Yêu cầu</p>
          <p>Thời gian</p>
          <p className="w-[100px]">Trạng thái</p>
        </div>
        {Notification.map((data: any, idx: number) => {
          //convert data.createdAt to daysSinceCreation

          return (
            <div
              key={idx}
              className="grid grid-cols-12 my-6 items-center gap-4 "
            >
              <div className="flex items-center gap-2">
                <div
                  className="border rounded-full p-1 hover:text-redPrimmary duration-300 hover:border-redPrimmary  cursor-pointer"
                  onClick={() => HandleSelected(data.id)}
                >
                  <SlOptions />
                </div>
                <p>{idx}</p>
              </div>

              <p className="truncate col-span-2">{data.userId}</p>
              <p className="truncate col-span-2 ">{data.id}</p>
              <p className="truncate ">{data.amount}</p>
              <p className="truncate col-span-2">{data.Textamount}</p>
              <p className="truncate col-span-2">{data.title}</p>

              <div>
                {data.daysSinceCreation > 0 ? (
                  <div>
                    <p className="text-[12px] w-[85px] truncate py-1 border px-2 rounded-3xl text-orange-300 border-orange-300">
                      {data.daysSinceCreation} ngày trước
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-[12px] w-[65px] truncate border px-2 py-1 rounded-3xl text-green-300 border-green-300">
                      Bây giờ
                    </p>
                  </>
                )}
              </div>
              <p className="truncate ">{data.state}</p>
            </div>
          );
        })}
      </div>
      <Modal
        footer={false}
        closable={false}
        width={800}
        className="bg-none"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="pb-2 border-b w-full text-center text-[22px] uppercase font-normal border-black">
              Thông tin yêu cầu
            </h2>
            <div className="flex justify-between w-full mt-2 pb-2 border-b border-black">
              <div>
                <p>
                  <strong>Mã Khách hàng:</strong> {Data?.userId}
                </p>
                <p>
                  <strong>Yêu Cầu:</strong> {Data?.title}
                </p>
                <p>
                  <strong>Ghi chú</strong> {Data?.Textamount}
                </p>
              </div>
              <div>
                <p>
                  <strong>Mã Giao dịch:</strong> {Data?.id}
                </p>
                <p>
                  <strong>Số lượng:</strong> {Data?.amount}
                </p>
                <p>
                  <strong>Thời gian:</strong> {Data?.daysSinceCreation} ngày
                  trước
                </p>
              </div>
            </div>
            <div className="flex  gap-10 mt-4">
              <div
                className="py-2 px-6 bg-redPrimmary text-white cursor-pointer hover:bg-red-700 duration-300"
                onClick={() => setIsModalOpen(false)}
              >
                Thoát
              </div>
              <div
                className="py-2 px-6  bg-mainorange text-white hover:bg-orange-700 duration-300 cursor-pointer"
                onClick={() => HandleDelete()}
              >
                Xóa Yêu Cầu
              </div>
              <div
                className="py-2 px-6 bg-blueAdmin text-white cursor-pointer hover:bg-blue-700 duration-300"
                onClick={() => Handle()}
              >
                Xử lý yêu cầu
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ListOrder;
