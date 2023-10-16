"use client";
import { useStateProvider } from "@context/StateProvider";
import Link from "next/link";
import React from "react";
import { AiOutlineProfile } from "react-icons/ai";
import { GiExitDoor } from "react-icons/gi";

const HeaderDropDown: React.FC = () => {
  const { setSelected } = useStateProvider();

  return (
    <>
      <div className="p-3 min-w-[160px] border-colortopdownBlue border border-solid rounded bg-white relative z-30 ">
        <ul className="text-colortopdownGray leading-6 text-[13px] font-semibold">
          <li
            className=" hover:bg-purple-300  duration-300 element-dropdown py-2"
            onClick={() => setSelected(5)}
          >
            <AiOutlineProfile className="inline-block text-colortopdownBlue mr-2" />
            Hồ sơ
          </li>
          <Link href="/login">
            <li className="hover:bg-purple-400  duration-300 element-dropdown text-redPrimmary py-2">
              <GiExitDoor className="inline-block  mr-2" />
              Thoát
            </li>
          </Link>
        </ul>
        <div className="absolute w-4 h-4 border border-b-0 border-r-0 bg-white border-solid border-colortopdownBlue -top-2 right-[50%] transform rotate-45 z-0"></div>
        <div className="w-full h-10  bg-none absolute -top-10"> </div>
      </div>
    </>
  );
};

export default HeaderDropDown;
