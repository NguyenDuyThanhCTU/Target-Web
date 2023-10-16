"use client";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { notification } from "antd";
import Input from "../Input";
import { useStateProvider } from "@context/StateProvider";
import { useData } from "@context/DataProviders";
import { addDocument } from "@config/Services/Firebase/FireStoreDB";

interface BranchData {
  name: string;
  address: string;
  hotline: string;
  email: string;
  worktime: string;
}

const AddBranch: React.FC = () => {
  const [BranchName, setBranchName] = useState<string>("");
  const [BranchAddress, setBranchAddress] = useState<string>("");
  const [BranchHotline, setBranchHotline] = useState<string>("");
  const [BranchEmail, setBranchEmail] = useState<string>("");
  const [BranchWorktime, setBranchWorktime] = useState<string>("");
  const { setIsRefetch, setDropDown } = useStateProvider();

  const handleDiscard = () => {
    setBranchName("");
    setBranchAddress("");
    setBranchHotline("");
    setBranchEmail("");
    setBranchWorktime("");
  };

  const HandleSubmit = () => {
    if (!BranchName || !BranchAddress || !BranchHotline) {
      notification.error({
        message: "Lỗi !",
        description: "Vui lòng nhập đầy đủ thông tin!",
      });
    } else {
      const data: BranchData = {
        name: BranchName,
        address: BranchAddress,
        hotline: BranchHotline,
        email: BranchEmail,
        worktime: BranchWorktime,
      };

      addDocument("branches", data).then(() => {
        notification.success({
          message: "Thành công!",
          description: "Thông tin đã được CẬP NHẬT !",
        });
        setIsRefetch("CRUD branches");
        setDropDown("");
        handleDiscard();
      });
    }
  };

  return (
    <div
      className={`bg-[rgba(0,0,0,0.3)] w-full flex items-center justify-center 
       h-full
      z-50 absolute rounded-md duration-300 `}
    >
      <div className="w-[80vw] h-[75vh] relative bg-white flex font-LexendDeca cursor-pointer rounded-sm ">
        <div className="items-center justify-center  w-full flex  ">
          <div className="flex w-[56vw]  justify-center gap-4 flex-col items-center ">
            <p className="text-2xl font-bold text-center mb-5 uppercase">
              Thêm chi nhánh
            </p>

            <div className="flex gap-5 justify-center w-[50vw] mx-auto">
              <div className="flex-1">
                <Input
                  text={`Tên chi nhánh`}
                  Value={BranchName}
                  setValue={setBranchName}
                  Input={true}
                  PlaceHolder=""
                />
                <Input
                  text={`Địa chỉ`}
                  Value={BranchAddress}
                  setValue={setBranchAddress}
                  Input={true}
                  PlaceHolder=""
                />
                <Input
                  text={`Hotline`}
                  Value={BranchHotline}
                  setValue={setBranchHotline}
                  Input={true}
                  PlaceHolder=""
                />
                <Input
                  text={`Email`}
                  Value={BranchEmail}
                  setValue={setBranchEmail}
                  Input={true}
                  PlaceHolder=""
                />
              </div>
              <div className="flex-1">
                <Input
                  text={`Giờ làm việc`}
                  Value={BranchWorktime}
                  setValue={setBranchWorktime}
                  Input={true}
                  PlaceHolder=""
                />
              </div>
            </div>
            <div className="flex gap-6 mt-10">
              <button
                onClick={() => handleDiscard()}
                type="button"
                className="border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
              >
                Xóa
              </button>
              <button
                onClick={() => HandleSubmit()}
                type="button"
                className="bg-[#df6cad] hover:bg-red-500 focus:outline-none focus:shadow-outline text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
              >
                Tải lên
              </button>
            </div>
          </div>
        </div>

        <AiFillCloseCircle
          className="absolute -top-5 -right-5 text-[40px] border-white border-4 bg-black rounded-3xl text-white "
          onClick={() => {
            setDropDown("");
          }}
        />
      </div>
    </div>
  );
};

export default AddBranch;
