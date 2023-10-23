"use client";
import { useData } from "@context/DataProviders";
import React from "react";
import { BiPhone } from "react-icons/bi";
import { MdMarkEmailRead } from "react-icons/md";

const TopFooter = () => {
  const { ContactData } = useData();
  return (
    <div className="bg-gray-200 font-LexendDeca text-gray-600">
      <div className="p:w-auto d:w-[1300px] p:mx-2 d:mx-auto flex d:flex-row p:flex-col items-center gap-5 py-8">
        <div className="flex  items-center gap-5  ">
          <MdMarkEmailRead />
          <p className=" w-max pr-8 border-r border-gray-400">
            Đăng kí nhận tin
          </p>
        </div>
        <div className="flex p:w-auto d:w-[40vw]">
          <div className="w-full">
            <div className="bg-white flex w-full justify-between">
              <input
                type="text"
                className="py-2  px-4 outline-none w-full "
                placeholder="Nhập email của bạn"
              />
              <div className=" py-2 cursor-pointer px-4 bg-blue-500 text-white hover:bg-white hover:text-blue-500 duration-300 hover:border-blue-500 border">
                <p className="w-max ">Đăng ký</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <div className="bg-black text-white rounded-full text-[23px] p-1">
            <BiPhone />
          </div>
          <p className="w-max">
            Hỗ trợ / Báo lỗi:{" "}
            <span
              className="text-redPrimmary cursor-pointer    "
              onClick={() => window.open(`tel:${ContactData.phone},"_self")"`)}
            >
              {ContactData.phone}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
