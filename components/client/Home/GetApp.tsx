"use client";
import { useStateProvider } from "@context/StateProvider";
import React from "react";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

const GetApp = () => {
  const { theme } = useStateProvider();
  return (
    <div
      className={`py-20 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      } border-b duration-300`}
    >
      <div className=" py-24 relative overflow-hidden justify-between px-16 flex d:w-[1440px] text-white font-Inter p:w-auto d:mx-auto p:mx-2 bg-[url(https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/UI%2Fpattern.webp?alt=media&token=8b76b296-1f1d-4d89-90fd-0690ce517fd6)] bg-cover bg-no-repeat rounded-3xl">
        <div className="flex flex-col gap-10 ">
          <h2 className="text-[67px] font-bold">Get for free now!</h2>
          <p>Available on iOS and Android</p>
          <div className="flex gap-2 w-full">
            <div className="py-5 flex items-center  gap-2 justify-center text-center w-full font-semibold bg-white text-maingreen rounded-full cursor-pointer hover:bg-green-700 duration-300">
              <AiFillApple />
              <p> App Store</p>
            </div>
            <div className="py-5 flex items-center  gap-2 justify-center text-center w-full bg-none border text-white rounded-full cursor-pointer hover:bg-green-700 duration-300">
              <FaGooglePlay />
              <p>Play Store</p>
            </div>
          </div>
        </div>
        <div className="absolute right-0 -top-36">
          <img src="https://camptraveler.com/phones.png" alt="phone" />
        </div>
      </div>
    </div>
  );
};

export default GetApp;
