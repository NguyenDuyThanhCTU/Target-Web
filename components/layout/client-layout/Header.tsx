"use client";
import { HeaderItems } from "@assets/item";
import { useStateProvider } from "@context/StateProvider";
import { Drawer } from "antd";
import Link from "next/link";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const { theme } = useStateProvider();
  return (
    <div
      className={`${
        theme === "light" ? "bg-white " : "bg-black "
      } h-max  shadow-lg shadow-gray-400 duration-300`}
    >
      <div className="d:w-[1440px] p:w-auto d:mx-auto p:mx-2 h-[98px] ">
        <div className="d:hidden p:flex justify-between items-center h-full px-4">
          <div className="">
            <img src="https://camptraveler.com/hilink-logo.svg" alt="logo" />
          </div>
          <div className="border border-black p-1">
            <FaListUl
              className="text-[22px] text-black"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
        <div className="p:hidden d:flex justify-between items-center h-full">
          <div className="">
            <img src="https://camptraveler.com/hilink-logo.svg" alt="logo" />
          </div>
          <div className=" font-LexendDeca text-[22px] flex gap-16 font-light">
            {HeaderItems.map((item: any, idx) => (
              <Link
                href={`/${item.link}`}
                key={idx}
                className={`${
                  theme === "light"
                    ? "bg-white text-gray-500 hover:text-black "
                    : "bg-black text-white hover:text-mainblue "
                }  duration-300 hover:scale-105`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex">
            <div
              className={`${
                theme === "light"
                  ? "bg-gray-800 hover:bg-black"
                  : "bg-gray-800 hover:bg-gray-600 "
              }  flex items-center gap-2 py-3 cursor-pointer px-6 text-white rounded-full`}
            >
              <AiOutlineUser />
              Đăng nhập
            </div>
          </div>
        </div>
      </div>
      <>
        <Drawer
          placement="left"
          onClose={() => setOpen(false)}
          closable={false}
          open={open}
          className="shadow-xl"
          width={300}
        >
          <div className="bg-white  uppercase font-bold">
            <div className="flex flex-col gap-3" onClick={() => setOpen(false)}>
              {HeaderItems.map((items: any, idx: any) => (
                <Link
                  className=" hover:text-mainorange"
                  href={`${items.link}`}
                  key={idx}
                >
                  {items.name}
                </Link>
              ))}
            </div>

            <div
              className="flex justify-center mt-5"
              onClick={() => setOpen(false)}
            >
              <div className="flex">
                <div className="bg-black flex items-center gap-2 py-3 px-6 text-white rounded-full">
                  <AiOutlineUser />
                  Đăng nhập
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </>
    </div>
  );
};

export default Header;
