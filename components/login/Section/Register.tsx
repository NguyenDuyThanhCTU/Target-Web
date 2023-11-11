"use client";
import { addDocument } from "@config/Services/Firebase/FireStoreDB";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { notification } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { SlArrowLeft } from "react-icons/sl";

const Register = ({ setChangeState }: any) => {
  const [Hide, setHide] = useState(false);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const { Accounts } = useData();
  const { setIsRefetch } = useStateProvider();

  const HandleSubmit = () => {
    const UsernameFormat = /^[a-zA-Z0-9]+$/;
    if (!UsernameFormat.test(Username)) {
      notification["warning"]({
        message: "Thao tác không thành công",
        description: `Tài khoản không được chứa kí tự đặc biệt !`,
      });
    } else if (!Username || !Password || !retypePassword) {
      notification["warning"]({
        message: "Thao tác không thành công",
        description: `Vui lòng nhập đầy đủ thông tin !`,
      });
    } else if (Password !== retypePassword) {
      notification["warning"]({
        message: "Thao tác không thành công",
        description: `Mật khẩu không khớp !`,
      });
    } else if (
      Accounts.filter((item: any) => item.username === Username).length > 0
    ) {
      notification["warning"]({
        message: "Thao tác không thành công",
        description: `Tài khoản đã tồn tại !`,
      });
    } else {
      const Data = {
        username: Username,
        password: Password,
        name: Username,
        role: "user",
        status: "active",
        photoURL:
          "https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/avatar%2FLogo.jpg?alt=media&token=e6ae19ae-00eb-4119-a071-3190c2f57fee",
      };
      addDocument("accounts", Data).then(() => {
        notification["success"]({
          message: "Thao tác thành công",
          description: `Đăng ký tài khoản thành công !`,
        });
        setChangeState(0);
        setIsRefetch("CRUD accounts");
      });
    }
  };
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
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
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
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
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
          onClick={() => HandleSubmit()}
        >
          Tiếp tục
        </button>
      </div>
      <div className="text-center text-[13px] font-normal text-colortopdownGray">
        <p>Bằng việc nhấn nút tiếp tục, bạn đã đồng ý với</p>
        <p>
          <Link
            href="/bai-viet/dieu-khoan-su-dung"
            className="text-blue-600 hover:underline"
          >
            Điều khoản sử dụng
          </Link>{" "}
          và{" "}
          <Link
            href="/bai-viet/chinh-sach-bao-mat"
            className="text-blue-600 hover:underline"
          >
            Chính sách bảo mật
          </Link>
          {""}
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
