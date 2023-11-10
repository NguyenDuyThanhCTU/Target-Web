"use client";
import { TypePostItems } from "@assets/item";
import Lottie from "lottie-react";
import Link from "next/link";
import React from "react";

const HomePolicy = () => {
  return (
    <div className="py-20">
      <div className="d:w-[1440px] p:w-auto mx-auto">
        <div className="flex justify-between">
          {TypePostItems.slice(3, TypePostItems.length).map((item, index) => (
            <Link
              href={`/bai-viet/${item.value}`}
              key={index}
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <div className="p-5 rounded-full w-max bg-white flex items-center justify-center  hover:scale-110 duration-300">
                <div className="w-24 h-24 ">
                  <Lottie animationData={item.animation} />
                </div>
              </div>
              <h2 className="font-LexendDeca text-[20px] font-normal hover:text-blue-600 duration-300">
                {item.label}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePolicy;
