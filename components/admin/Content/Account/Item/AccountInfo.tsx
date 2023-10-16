"use client";
import { useStateProvider } from "@context/StateProvider";
import { Timeline } from "antd";

import { CgExtensionAdd } from "react-icons/cg";
import { FaPhotoVideo } from "react-icons/fa";

import { MdOutlineManageAccounts, MdOutlinePostAdd } from "react-icons/md";
import { SiWebmoney } from "react-icons/si";
import { TfiLayoutSliderAlt } from "react-icons/tfi";

const AccountInfo = ({ HeaderAdmin }: any) => {
  const { setSelected } = useStateProvider();
  return (
    <>
      <div className="flex-[60%]">
        <div className="relative">
          <div className="flex justify-center ">
            <div className=" d:h-[500px] d:w-[500px] p:w-[250px] p:h-[250px] overflow-hidden rounded-full shadow-xl">
              <img
                src={HeaderAdmin?.photoURL}
                alt="avatar"
                className=" object-cover object-top hover:scale-125 duration-1000 w-full h-full"
              />
            </div>
          </div>

          <div>
            <div
              className="flex cursor-pointer hover:scale-110 duration-300   gap-3 bg-white text-black rounded-full items-center d:py-5 p:py-2  d:px-10 p:px-4 d:text-[28px] p:text-[13px] absolute top-0 d:left-32 p:left-0 shadow-lg"
              onClick={() => setSelected(7)}
            >
              <CgExtensionAdd />
              <p>Thêm sản phẩm</p>
            </div>
          </div>
          <div>
            <div
              className={`${
                HeaderAdmin?.role === "admin" || HeaderAdmin?.role === "manager"
                  ? "text-black hover:scale-110"
                  : "text-gray-400"
              } flex duration-300 cursor-pointer gap-3 bg-white rounded-full items-center d:py-5 p:py-2  d:px-10 p:px-4 d:text-[28px] p:text-[13px] absolute bottom-0 d:left-24 p:left-0 shadow-lg`}
              onClick={() => setSelected(0)}
            >
              <SiWebmoney />

              <p>Quản lý Website</p>
            </div>
          </div>
          <div>
            <div
              className="flex   cursor-pointer hover:scale-110 duration-300  gap-3 bg-white text-black rounded-full items-center d:py-5 p:py-2  d:px-10 p:px-4 d:text-[28px] p:text-[13px] absolute top-[40%] d:left-10 p:left-4 shadow-lg"
              onClick={() => setSelected(1)}
            >
              <TfiLayoutSliderAlt />
              <p>Thêm Slide</p>
            </div>
          </div>
          <div>
            <div
              className="flex cursor-pointer hover:scale-110 duration-300   gap-3 bg-white text-black rounded-full items-center d:py-5 p:py-2  d:px-10 p:px-4 d:text-[28px] p:text-[13px] absolute top-0 d:right-10 p:right-0 shadow-lg"
              onClick={() => setSelected(3)}
            >
              <MdOutlinePostAdd />
              <p>Thêm bài viết</p>
            </div>
          </div>
          <div>
            <div
              className={`${
                HeaderAdmin?.role === "admin"
                  ? "text-black hover:scale-110"
                  : "text-gray-400"
              } flex  gap-3 bg-white duration-300 cursor-pointer  rounded-full items-center d:py-5 p:py-2  d:px-10 p:px-4 d:text-[28px] p:text-[13px] absolute bottom-0 d:right-10 p:right-0 shadow-lg`}
              onClick={() => setSelected(5)}
            >
              <MdOutlineManageAccounts />

              <p>Quản lý tài khoản</p>
            </div>
          </div>
          <div>
            <div
              className="flex  cursor-pointer hover:scale-110 duration-300  gap-3 bg-white text-black rounded-full items-center d:py-5 p:py-2  d:px-10 p:px-4 d:text-[28px] p:text-[13px] absolute top-[40%] d:right-5 p:right-4 shadow-lg"
              onClick={() => setSelected(4)}
            >
              <FaPhotoVideo />
              <p>Thêm Video</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-14 flex  justify-center  ">
          <div className=" w-[870px] flex flex-col gap-3">
            <h3 className="uppercase text-[#ff753f] font-semibold text-[20px]">
              Hi there, I'm {HeaderAdmin?.displayName}
            </h3>

            <p className="text-[20px] text-gray-500 px-2">
              {HeaderAdmin?.introduce}
            </p>
            <div className="flex   items-center flex-col w-full font-LexendDeca mb-2">
              <div>
                <h3 className="  font-semibold text-[18px]">
                  Quyền hạn:{" "}
                  <span
                    className={`
                  
                  ${
                    HeaderAdmin?.role === "admin"
                      ? "text-[#ff3f3f]"
                      : HeaderAdmin?.role === "editor"
                      ? "text-yellow-400"
                      : "text-blue-400"
                  }`}
                  >
                    {HeaderAdmin?.role}
                  </span>
                </h3>
                <h3 className="  font-semibold text-[18px]">
                  {HeaderAdmin?.status && (
                    <>
                      Trạng thái:{" "}
                      <span
                        className={`${
                          HeaderAdmin.status === "active"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {HeaderAdmin?.status}
                      </span>{" "}
                    </>
                  )}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 ml-10 flex justify-center">
          <Timeline
            style={{ width: "50%" }}
            items={[
              {
                children: `Họ Tên: ${HeaderAdmin?.displayName}`,
              },
              {
                children: `Email: ${HeaderAdmin?.email}`,
              },
              {
                children: `Số điện thoại: ${HeaderAdmin?.phone}`,
              },
            ]}
          />
          <Timeline
            items={[
              {
                children: `Địa chỉ: ${HeaderAdmin?.address}`,
              },
              {
                children: `Ngày sinh: ${HeaderAdmin?.dateofbirth}`,
              },
              {
                children: `Giới tính: ${HeaderAdmin.gender}`,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default AccountInfo;
