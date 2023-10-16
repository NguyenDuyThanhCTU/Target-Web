"use client";
import { delDocument } from "@config/Services/Firebase/FireStoreDB";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { Popconfirm, message, notification } from "antd";
import React from "react";
import { FcViewDetails } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";

const Table = ({ Data, del, onEdit, onUpdate }: any) => {
  const { setIsRefetch } = useStateProvider();
  const { setUpdateId } = useData();

  const HandleDelete = (id: string) => {
    delDocument(del, id).then(() => {
      notification["success"]({
        message: "Thành công!",
        description: `Yêu cầu của bạn đã được thực hiện thành công !`,
      });
    });
    setIsRefetch(`CRUD ${del}`);
  };

  const HandleEdit = (id: string) => {
    setUpdateId(id);
    onEdit(true);
  };

  const HandleUpdate = (id: string) => {
    setUpdateId(id);
    onUpdate(true);
  };

  return (
    <div>
      {Data.map((data: any, idx: number) => (
        <div
          key={idx}
          className="grid grid-cols-4 items-center my-2 ml-1 justify-start px-5"
        >
          <div className="group relative">
            <FiEdit className="text-red-600 hover:scale-125 duration-300" />
            <div className="w-max bg-white opacity-90 absolute -top-2 h-8 left-5 rounded-lg hidden group-hover:block">
              <div className="mx-3 gap-2 flex justify-between text-[24px] h-full items-center">
                {onUpdate && (
                  <FcViewDetails
                    className="hover:scale-125 duration-300"
                    onClick={() => HandleUpdate(data.id)}
                  />
                )}
                {onEdit && (
                  <FiEdit
                    className="text-green-600 hover:scale-125 duration-300"
                    onClick={() => HandleEdit(data.id)}
                  />
                )}

                <Popconfirm
                  title="Xóa sản phẩm"
                  description="Bạn muốn xóa sản phẩm này?"
                  onConfirm={() => {
                    HandleDelete(data.id);
                  }}
                  onCancel={() => {
                    message.error("Sản phẩm chưa được xóa!");
                  }}
                  okText="Yes"
                  okType="danger"
                  cancelText="No"
                >
                  <MdDeleteForever className="text-red-600 hover:scale-125 duration-300" />
                </Popconfirm>
              </div>
              <div className="absolute bg-none w-3 h-8 top-0 -left-2"></div>
            </div>
          </div>
          <img
            src={data.image}
            alt="product"
            className="w-14 h-14 rounded-lg object-cover"
          />
          <div className="truncate w-[70px] text-[14px]">{data.title}</div>
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
        </div>
      ))}
    </div>
  );
};

export default Table;
