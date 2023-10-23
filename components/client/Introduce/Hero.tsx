"use client";
import React from "react";

import { BsPhone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { FcBusinessman, FcStatistics } from "react-icons/fc";
import { GiBlackKnightHelm, GiLifeBar } from "react-icons/gi";
import { useData } from "@context/DataProviders";
import { IconMapping, SocialMediaDashboard } from "@assets/item";

const Hero = () => {
  const { SocialMedia, TradeMarkData } = useData();
  return (
    <div className="my-24 w-[1440px] mx-auto ">
      <div className="relative">
        <div className="flex justify-center ">
          <img
            src={TradeMarkData.websiteLogo}
            alt="avatar"
            className="rounded-full shadow-xl d:h-[500px] d:w-[500px] object-cover object-top p:w-[250px] p:h-[250px]"
          />
        </div>

        <div>
          <div className="flex  gap-3 bg-white text-black rounded-full items-center d:py-5 p:py-2  d:px-10 p:px-4 d:text-[28px] p:text-[13px] absolute top-0 d:left-48 p:left-0 shadow-lg">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/demo2512.appspot.com/o/image%2Fz4471738596071_a3102ec7366d50cbfb0894882fbba5ec.jpg?alt=media&token=c73ecf64-1de6-41c7-bd05-172493961527"
              alt="img"
              className="w-10"
            />
            <p>MDRT</p>
          </div>
        </div>
        <div>
          <div className="flex  gap-3 bg-white text-black rounded-full items-center d:py-5 p:py-2  d:px-10 p:px-4 d:text-[28px] p:text-[13px] absolute bottom-0 d:left-48 p:left-0 shadow-lg">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/demo2512.appspot.com/o/image%2F1.jpg?alt=media&token=8d1220f0-136b-43eb-b461-8e964eca4a78"
              alt="img"
              className="w-10"
            />
            <p>Pru Elite</p>
          </div>
        </div>
        <div>
          <div className="flex  gap-3 bg-white text-black rounded-full items-center d:py-5 p:py-2  d:px-10 p:px-4 d:text-[28px] p:text-[13px] absolute top-[40%] d:left-20 p:left-4">
            <GiLifeBar />
            <p>Life Club</p>
          </div>
        </div>
        <div>
          <div className="flex  gap-3 bg-white text-black rounded-full items-center d:py-5 p:py-2  d:px-10 p:px-4 d:text-[28px] p:text-[13px] absolute top-0 d:right-24 p:right-0 shadow-lg">
            <GiBlackKnightHelm />
            <p>Pru Service Mark</p>
          </div>
        </div>
        <div>
          <div className="flex  gap-3 bg-white text-black rounded-full items-center d:py-5 p:py-2  d:px-10 p:px-4 d:text-[28px] p:text-[13px] absolute bottom-0 d:right-24 p:right-0 shadow-lg">
            <FcStatistics />
            <p>Pru Champion</p>
          </div>
        </div>
        <div>
          <div className="flex  gap-3 bg-white text-black rounded-full items-center d:py-5 p:py-2  d:px-10 p:px-4 d:text-[28px] p:text-[13px] absolute top-[40%] d:right-16 p:right-4">
            <FcBusinessman />
            <p>Alpha Leader</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-14 flex  justify-center  ">
        <div className=" w-[870px] flex flex-col gap-5">
          <h3 className="uppercase text-[#ff753f] font-semibold text-[20px]">
            Hi there, I'm Huynh Thanh Nam
          </h3>
          <p className="font-medium text-[60px] leading-[72px] ">
            Gương mặt <strong>Prudential</strong> Million Dollar Round Table
          </p>
          <p className="text-[20px] text-gray-500 px-2">
            Xin chào! Tôi là một Gương mặt Prudential Million Dollar Round Table
            (MDRT), chuyên về tư vấn và giải pháp bảo hiểm luôn cam kết hỗ trợ
            khách hàng đạt được mục tiêu tài chính và bảo vệ cho tương lai của
            họ.
          </p>
        </div>
      </div>
      <div className="mt-20 border border-gray-300 rounded-xl shadow-2xl ">
        <div className="p-5 flex justify-between items-center d:flex-row p:flex-col gap-10 ">
          <div className="">
            <h3 className="text-[15px] mb-2 text-gray-400">Contact me</h3>
            <div className="flex gap-5 text-[40px]  cursor-pointer w-[310px]">
              <BsPhone className=" hover:scale-125 duration-300" />
              {SocialMediaDashboard.slice(0, 2).map((items, idx) => {
                let Icon = IconMapping[items.icon];
                const data = SocialMedia[idx];
                return (
                  <>
                    {Icon && (
                      <a
                        href={`${
                          items.icon === "SiZalo"
                            ? `https://zalo.me/${data}`
                            : data
                        }`}
                        target="_blank"
                      >
                        <Icon className=" hover:text-blue-500 hover:scale-125 duration-300 border  " />
                      </a>
                    )}
                  </>
                );
              })}
            </div>
          </div>
          <div className="text-[35px]">
            <div className="bg-[#f68d63] text-white rounded-full py-3 px-8 border-4 hover:border-[8px] duration-300 shadow-xl border-[#f1c7a9]">
              <GoMail />
            </div>
          </div>
          <div className="">
            <h3 className="text-end text-[15px] mb-5 text-gray-400">
              Follow me
            </h3>
            <div className="flex gap-5 text-[35px]  cursor-pointer">
              {SocialMediaDashboard.slice(2).map((items, idx) => {
                let Icon = IconMapping[items.icon];
                const data = SocialMedia[idx];

                return (
                  <>
                    {Icon && (
                      <a
                        href={`${
                          items.icon === "SiZalo"
                            ? `https://zalo.me/${data}`
                            : data
                        }`}
                        target="_blank"
                      >
                        <Icon
                          className={`${
                            items.icon === "AiFillInstagram"
                              ? "hover:text-pink-500"
                              : items.icon === "FaTiktok"
                              ? "hover:text-black"
                              : items.icon === "BsYoutube"
                              ? "hover:text-redPrimmary"
                              : "hover:text-blue-500"
                          }  hover:scale-125 duration-300 border`}
                        />
                      </a>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
