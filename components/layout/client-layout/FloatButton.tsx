"use client";
import { useStateProvider } from "@context/StateProvider";
import { usePathname } from "next/navigation";

import { useState } from "react";
import { BiSolidMagicWand } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function FloatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, theme } = useStateProvider();

  return (
    <div className="fixed p:bottom-14 d:bottom-7 p:right-5 d:right-10  box-border flex flex-col gap-5 z-10">
      {theme === "light" ? (
        <div className="flex items-center ">
          <div
            className={`${
              isOpen
                ? "w-[46px] h-[46px] hover:shadow-gray-400 text-[30px]  p-2 rounded-full shadow-lg shadow-gray-300 bg-white   cursor-pointer"
                : "w-0 h-0 overflow-hidden"
            }  duration-300 `}
            onClick={() => setTheme("dark")}
          >
            <MdDarkMode className="text-black p-1" />
          </div>
        </div>
      ) : (
        <div className="flex items-center ">
          <div
            className={`${
              isOpen
                ? "w-[46px] h-[46px] hover:shadow-gray-400 text-[30px]  p-2 rounded-full shadow-lg shadow-gray-300 bg-black   cursor-pointer"
                : "w-0 h-0 overflow-hidden"
            }  duration-300 `}
            onClick={() => setTheme("light")}
          >
            <MdDarkMode className="text-white p-1" />
          </div>
        </div>
      )}

      <div className="flex items-center    ">
        <div
          className={`${
            theme === "light"
              ? "bg-black shadow-gray-300 hover:shadow-gray-400 text-white black-animation"
              : "bg-white shadow-gray-300 hover:shadow-gray-400 while-animation"
          } text-[30px] p-2 rounded-full shadow-xl   duration-300  cursor-pointer `}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RxCross2 className=" " />
          ) : (
            <BiSolidMagicWand className=" " />
          )}
        </div>
      </div>
    </div>
  );
}

export default FloatButton;
