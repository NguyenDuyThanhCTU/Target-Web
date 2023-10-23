"use client";

import { useData } from "@context/DataProviders";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { SiZalo } from "react-icons/si";

const MobileFooter = () => {
  const { ContactData, SocialMedia } = useData();
  return (
    <div className="h-[45px]  w-full bg-slate-100 border-t">
      <div className="w-full px-4 h-full flex justify-between items-center">
        <div
          className=" p-1"
          onClick={() => {
            window.open(`tel:${ContactData.phone}`, "_self");
          }}
        >
          <BsFillTelephoneFill className="text-[22px] text-gray-500" />
        </div>
        <Link href={`https://${SocialMedia[0]}`} className=" p-1">
          <SiZalo className="text-[22px] text-gray-500" />
        </Link>
        <Link href={`mailto:${ContactData.gmail}`} className=" p-1">
          <AiOutlineMail className="text-[22px] text-gray-500" />
        </Link>
        <Link href={`https://${SocialMedia[6]}`} className=" p-1">
          <IoLocationSharp className="text-[22px] text-gray-500" />
        </Link>
      </div>
    </div>
  );
};

export default MobileFooter;
