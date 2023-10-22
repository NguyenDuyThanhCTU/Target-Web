"use client";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FcViewDetails } from "react-icons/fc";
import { Popconfirm, message, notification } from "antd";
import { MdDeleteForever } from "react-icons/md";
import { useStateProvider } from "@context/StateProvider";
import { useData } from "@context/DataProviders";
import { delDocument } from "@config/Services/Firebase/FireStoreDB";

const ListVideo: React.FC = () => {
  const [Option, setOption] = useState<number | undefined>();
  const { Videos } = useData();
  const { setIsRefetch } = useStateProvider();

  const HandleOpenOption = (idx: number) => {
    if (Option === idx) {
      setOption(0);
    } else {
      setOption(idx);
    }
  };

  const HandleDelete = (id: string) => {
    delDocument("videos", id).then(() => {
      notification["success"]({
        message: "Thành công!",
        description: `Yêu cầu của bạn đã được thực hiện thành công !`,
      });
    });
    setIsRefetch("CRUD videos");
  };

  return (
    <div className="h-[400px] border  rounded-2xl overflow-y-scroll flex-[70%] ">
      {Videos?.map((data: any, idx: number) => (
        <div
          key={idx}
          className="grid  grid-cols-3 items-center my-2  ml-1 justify-start px-5  py-3"
        >
          <div className="group relative ">
            <FiEdit
              className="text-red-600 hover:scale-125 duration-300 "
              onClick={() => HandleOpenOption(idx + 1)}
            />
            {Option === idx + 1 && (
              <>
                {" "}
                <div className="w-[120px] bg-white opacity-90 absolute -top-2 h-8 left-5 rounded-lg   ">
                  <div className="mx-3 flex  justify-between text-[24px] h-full items-center ">
                    <FcViewDetails className="hover:scale-125 duration-300" />
                    <FiEdit className="text-green-600 hover:scale-125 duration-300" />
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
              </>
            )}
          </div>

          <iframe
            src={data.embedurl}
            className="d:w-40 d:h-40 p:w-20 p:h-20"
            title="YouTube Video"
            allowFullScreen
          ></iframe>

          <div>
            {data.daysSinceCreation > 0 ? (
              <div>
                {" "}
                <p className="text-[12px] w-[85px] truncate  py-1 border px-2 rounded-3xl text-orange-300 border-orange-300">
                  {data.daysSinceCreation} ngày trước
                </p>
              </div>
            ) : (
              <>
                {" "}
                <p className="text-[12px] w-[65px] truncate  border px-2 py-1 rounded-3xl text-green-300 border-green-300">
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

export default ListVideo;
