"use client";
import { updateDocument } from "@config/Services/Firebase/FireStoreDB";
import { useStateProvider } from "@context/StateProvider";
import { notification } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";

const UserChangePassword = ({ user }: any) => {
  const [Hide, setHide] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const { setIsRefetch } = useStateProvider();

  const HandleSubmit = async () => {
    if (!currentPassword || !newPassword) {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 1000);
    } else {
      if (currentPassword === user.password) {
        const Data = {
          password: newPassword,
        };
        updateDocument("accounts", user.id, Data).then(() => {
          notification["success"]({
            message: "Đổi mật khẩu thành công !",
            description: `Mật khẩu của bạn đã được cập nhật !`,
          });
          setIsRefetch("CRUD accounts");
          setCurrentPassword("");
          setNewPassword("");
        });
      } else {
        notification["error"]({
          message: "Lỗi !",
          description: `
          Sai mật khẩu !`,
        });
      }
    }
  };
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center m-2">
        <h3 className=" font-bold mb-10 text-[25px] font-LexendDeca">
          Cập nhật mật khẩu của bạn!
        </h3>

        <div className="w-full   h-[89px] font-semibold text-[13px] ">
          <div className="mb-2">Mật khẩu hiện tại</div>
          <div className="w-full border rounded-lg mb-1">
            <input
              type={Hide ? "text" : "password"}
              className="p-2 w-full font-normal rounded-lg"
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full   h-[89px] font-semibold text-[13px] ">
          <div className="mb-2">
            Mật khẩu mới
            <p className="text-red-700 inline-block ml-1">*</p>
          </div>
          <div className="w-full border rounded-lg mb-1 relative">
            <input
              type={Hide ? "text" : "password"}
              className="p-2 w-full font-normal rounded-lg"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {Hide ? (
              <BiHide
                className="absolute right-3 top-[5px] text-[25px] text-colortopdownBlue"
                onClick={() => setHide(false)}
              />
            ) : (
              <BiShow
                className="absolute right-3 top-[5px] text-[25px] text-colortopdownBlue"
                onClick={() => setHide(true)}
              />
            )}
          </div>
          {errorMessage && (
            <p className="text-red-600 font-normal  ml-2">
              Vui lòng nhập mật khẩu!
            </p>
          )}
        </div>
        <div className="mt-5 mb-4 w-full ">
          <button
            className="py-3 bg-mainyellow text-white w-full hover:bg-orange-500 font-normal rounded-lg"
            onClick={() => HandleSubmit()}
          >
            Tiếp tục
          </button>
        </div>
        <div className="text-center text-[13px] font-normal text-white">
          <p>Bằng việc nhấn nút tiếp tục, bạn đã đồng ý với</p>
          <p>
            <Link href="/" className="text-blue-600 hover:underline">
              Điều khoản sử dụng
            </Link>{" "}
            và{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              Chính sách bảo mật
            </Link>{" "}
            của RunTech+
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserChangePassword;
