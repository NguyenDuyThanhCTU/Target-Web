"use client";
import React, { useEffect, useState } from "react";
import { notification } from "antd";

import { useStateProvider } from "@context/StateProvider";
import { addDocument } from "@config/Services/Firebase/FireStoreDB";
import { BsArrowLeftRight } from "react-icons/bs";
import { useData } from "@context/DataProviders";
import EditFare from "./EditFare";

const UploadVideo = ({ type }: any) => {
  const [startPoint, setStartPoint] = useState<string>("");
  const [endPoint, setEndPoint] = useState<string>("");
  const [open, setOpen] = useState(false);
  const { setIsRefetch } = useStateProvider();
  const { setUpdateId } = useData();

  const HandleDiscard = () => {
    setStartPoint("");
    setEndPoint("");
  };

  const HandleUpload = (): void => {
    if (!startPoint || !endPoint) {
      notification.error({
        message: "Lỗi !",
        description: `Vui lòng nhập thông tin trước khi THÊM NỘI DUNG !`,
      });
    } else {
      const data = {
        start: startPoint,
        end: endPoint,
        Adult: "",
        Elderly: "",
        DisablePeople: "",
        Children: "",
        type: type,
      };
      addDocument("fare", data).then((data) => {
        notification.success({
          message: "Thành công!",
          description: `Thông tin đã được CẬP NHẬT !`,
        });

        setUpdateId(data);
        setOpen(true);
        setIsRefetch(`CRUD fare`);
        HandleDiscard();
      });
    }
  };

  return (
    <div className="  flex-[30%] flex flex-col gap-5">
      <div className="flex flex-col p-3 border items-center">
        <div className="flex flex-row gap-3 mt-5 w-full">
          <div className="flex flex-col items-center gap-1 text-white w-full ">
            <div className="flex gap-3 items-center ">
              <div className="flex flex-col gap-2">
                <label className="font-semibold ">Điểm bắt đầu</label>
                <input
                  value={startPoint}
                  onChange={(e: any) => {
                    setStartPoint(e.target.value);
                  }}
                  type="text"
                  className="p-2 border border-mainorange outline-none text-black"
                />
              </div>{" "}
              <span>
                <BsArrowLeftRight />
              </span>
              <div className="flex flex-col gap-2">
                <label className="font-semibold ">Điểm kết thúc</label>
                <input
                  value={endPoint}
                  onChange={(e: any) => {
                    setEndPoint(e.target.value);
                  }}
                  type="text"
                  className="p-2 border border-mainorange outline-none text-black"
                />
              </div>
            </div>

            <div className="mt-5">
              {startPoint && endPoint ? (
                <button
                  className="hover:bg-[#bb86fc37] hover:text-[#BB86FC] text-[#74affc] bg-[#74affc43] px-3 py-2 rounded-xl"
                  onClick={() => HandleUpload()}
                >
                  Thêm tuyến mới
                </button>
              ) : (
                <button className="text-white bg-gray-400 px-3 py-2 rounded-xl cursor-default">
                  Thêm tuyến mới
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <EditFare open={open} setOpen={setOpen} />
    </div>
  );
};

export default UploadVideo;
