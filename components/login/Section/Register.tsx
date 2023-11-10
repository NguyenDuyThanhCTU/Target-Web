"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { SlArrowLeft } from "react-icons/sl";

const Register = ({ setChangeState }: any) => {
  const [Hide, setHide] = useState(false);
  const [Username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  return (
    <div className="flex-1  m-5 mt-8 mb-2 flex-col flex items-center justify-center  relative">
      <SlArrowLeft
        className="absolute top-0 left-0"
        onClick={() => {
          setChangeState(0);
        }}
      />
      <h3 className=" font-bold mb-10 text-[25px] font-LexendDeca">
        Đăng ký tài khoản
      </h3>
      <div className="w-full mt-3  h-[89px] font-semibold text-[13px] ">
        <div className="mb-2">
          Tài khoản
          <p className="text-red-700 inline-block ml-1">*</p>
        </div>
        <div className="w-full border rounded-lg mb-1">
          <input
            type="text"
            className="p-2 w-full font-normal rounded-lg"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full   h-[89px] font-semibold text-[13px] ">
        <div className="mb-2">
          Mật khẩu hiện tại <p className="text-red-700 inline-block ml-1">*</p>
        </div>
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
      </div>
      <div className="mt-5 mb-4 w-full ">
        <button
          className="py-3 bg-blue-800 text-white w-full hover:bg-blue-900 rounded-lg"
          //   onClick={() => HandleSubmit()}
        >
          Tiếp tục
        </button>
      </div>
      <div className="text-center text-[13px] font-normal text-colortopdownGray">
        <p>Bằng việc nhấn nút tiếp tục, bạn đã đồng ý với</p>
        <p>
          <Link href="/" className="text-blue-600 hover:underline">
            Điều khoản sử dụng
          </Link>{" "}
          và{" "}
          <Link href="/" className="text-blue-600 hover:underline">
            Chính sách bảo mật
          </Link>{" "}
          của Công Ty <br />
          <Link href="/" className="text-blue-600 hover:underline">
            RunTech Motion+
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
