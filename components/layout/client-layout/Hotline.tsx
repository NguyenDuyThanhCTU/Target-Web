"use client";
import { useData } from "@context/DataProviders";

import { useState } from "react";
import { BiSolidMagicWand } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { SiZalo } from "react-icons/si";

function Hotline() {
  const [isOpen, setIsOpen] = useState(false);
  const { SocialMedia, ContactData } = useData();

  return (
    <div className="fixed bottom-7 right-10  box-border flex flex-col gap-5">
      {/* <div className="p:flex items-center d:hidden">
        <a
          href={`https://${SocialMedia[1]}`}
          className="h-14 w-14 p-2 bg-blue-500 border-white border flex items-center rounded-full justify-center"
        >
          <FaFacebookF className="text-white text-[40px]" />
        </a>
      </div>*/}
      <div className="flex items-center ">
        <div
          className="text-[30px] p-2 rounded-full shadow-lg shadow-gray-300 bg-white cursor-pointer duration-300 hover:shadow-gray-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdDarkMode className="text-black p-1" />
        </div>
      </div>
      <div className="flex items-center ">
        <div
          className="text-[30px] p-2 rounded-full shadow-xl duration-300 bg-white shadow-gray-300 cursor-pointer hover:shadow-gray-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <BiSolidMagicWand className="text-black " />
          ) : (
            <RxCross2 className="text-black " />
          )}
        </div>
      </div>
      {/* <div className="flex items-center">
        <div className="h-14 w-14   call-animation">
          <BiPhoneCall className="text-white text-[40px]" />
        </div>
      </div> */}
    </div>
  );
}

export default Hotline;
