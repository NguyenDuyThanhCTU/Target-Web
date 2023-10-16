"use client";
import React, { useState } from "react";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";

import { useData } from "@context/DataProviders";
import Link from "next/link";
import { mainHeaderItems, subHeaderItems } from "@assets/item";
import { FaListUl } from "react-icons/fa";
import { Drawer } from "antd";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { TradeMarkData } = useData();
  return (
    <div className=" d:h-[126px] font-LexendDeca  p:h-auto">
      <div className="bg-white ">
        <div className=" h-full relative  bg-white ">
          {/* <---------------------------------------------------------- Desktop ----------------------------------------------------------> */}
          <div className="flex justify-start items-center p:h-[65px]  d:h-[130px] bg-mainblue ">
            <div className="p:w-[5vw] d:w-[15vw] h-full bg-mainwhite"></div>
            <div className=" w-[65vw]  flex relative gap-20">
              <Link
                href="/"
                className="bg-none z-10 top-0 relative flex
                after:bg-cover after:bg-[url(https://firebasestorage.googleapis.com/v0/b/superdong-51e09.appspot.com/o/UI%2F%C3%A1dfsdf-removebg-preview.png?alt=media&token=2577cb62-29f0-474d-9e51-d7ae32c4db39)] after:block after:d:min-w-[125px] after:p:min-w-[100px] after:h-full after:-right-[110px] 
                "
              >
                <img
                  src={TradeMarkData?.websiteLogo}
                  alt="logo"
                  className="p:h-[65px] d:h-[130px] py-2 object-contain bg-mainwhite"
                />
              </Link>
              <div className="p:hidden d:flex flex-col w-full text-mainwhite justify-center gap-3 ">
                <div className="flex w-full justify-between items-center text-[0.7vw] ">
                  <div className="flex gap-8">
                    {mainHeaderItems.map((items: any, idx: any) => (
                      <Link
                        className="font-light hover:text-mainorange w-max"
                        href={`/${items.link}`}
                        key={idx}
                      >
                        {items.name}
                      </Link>
                    ))}
                  </div>
                  <div className="text-[1.5vw] cursor-pointer">
                    <AiOutlineSearch />
                  </div>
                  <Link href={`#footer`}>
                    <div className="px-2 py-1 rounded-full border w-max">
                      Hệ thống phòng vé
                    </div>
                  </Link>
                </div>
                <div className="flex w-full  gap-5 items-center text-[0.8vw]  ">
                  <Link className="text-[1.5vw] cursor-pointer" href={`/`}>
                    <AiOutlineHome />
                  </Link>
                  <div className="flex gap-5">
                    {subHeaderItems.map((items: any, idx: any) => (
                      <Link
                        className="font-bold uppercase hover:text-mainorange"
                        href={`/${items.link}`}
                        key={idx}
                      >
                        {items.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="d:hidden p:flex justify-end items-center  mr-5 w-full h-full">
              <div className="border p-1">
                <FaListUl
                  className="text-[22px] text-white"
                  onClick={() => setOpen(true)}
                />
              </div>
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
          bodyStyle={{ backgroundColor: "#2e3192" }}
        >
          <div className="bg-mainblue text-white uppercase font-bold">
            <div className="flex flex-col gap-3" onClick={() => setOpen(false)}>
              <Link className=" hover:text-mainorange" href={`/`}>
                Trang chủ
              </Link>
              {subHeaderItems.map((items: any, idx: any) => (
                <Link
                  className=" hover:text-mainorange"
                  href={`/${items.link}`}
                  key={idx}
                >
                  {items.name}
                </Link>
              ))}
            </div>
            <div
              className="flex flex-col gap-3 text-[14px] mt-10"
              onClick={() => setOpen(false)}
            >
              {mainHeaderItems.map((items: any, idx: any) => (
                <Link
                  className=" hover:text-mainorange"
                  href={`/${items.link}`}
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
              <Link href={`/lien-he`}>
                <div className="px-10 py-1 rounded-full border">
                  Hệ thống phòng vé
                </div>
              </Link>
            </div>
          </div>
        </Drawer>
      </>
    </div>
  );
};

export default Header;
