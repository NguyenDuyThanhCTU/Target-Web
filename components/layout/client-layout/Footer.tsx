"use client";
import { IconMapping, SocialMediaCustom } from "@assets/item";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const { ContactData, SocialMedia } = useData();
  const { theme } = useStateProvider();
  const LearnMoreItems = [
    {
      topic: "Giới thiệu",
      link: "gioi-thieu",
    },
    {
      topic: "Dich vụ",
      link: "dich-vu",
    },
    {
      topic: "Chính sách bảo mật",
      link: "chinh-sach-bao-mat",
    },
    {
      topic: "Liên hệ",
      link: "lien-he",
    },
  ];
  return (
    <div
      className={`${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      } border-b duration-300`}
    >
      <div className="d:w-[1440px] p:w-auto d:mx-auto p:mx-2 py-20 font-Inter">
        <div className="grid grid-cols-5 ">
          <div>
            <img src="https://camptraveler.com/hilink-logo.svg" alt="logo" />
          </div>
          <div>
            <h2 className="text-[18px] font-bold">Tìm hiểu thêm</h2>
            <div className="flex flex-col gap-4 mt-4">
              {LearnMoreItems.map((items: any, idx: number) => (
                <Link
                  href={`/${items.link}`}
                  key={idx}
                  className="text-[14px] text-[#7b7b7b]"
                >
                  {items.topic}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[18px] font-bold">Cộng đồng</h2>
            <div className="flex flex-col gap-4 mt-4"></div>
          </div>
          <div>
            <h2 className="text-[18px] font-bold">Thông tin liên hệ</h2>
            <div className="flex flex-col gap-4 mt-4">
              <p className="text-[14px] text-[#7b7b7b]">
                <strong>Địa chỉ:</strong> {ContactData.address}
              </p>
              <p className="text-[14px] text-[#7b7b7b]">
                <strong>Số ĐT:</strong> {ContactData.phone}
              </p>
              <p className="text-[14px] text-[#7b7b7b]">
                <strong>Email:</strong> {ContactData.gmail}
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-[18px] font-bold">Mạng xã hội</h2>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex mt-2 gap-5">
                {SocialMediaCustom.map((items: any, idx: number) => {
                  let Icon = IconMapping[items.icon];
                  let Point = SocialMedia[items.id];
                  return (
                    <div
                      key={idx}
                      className={`text-[20px] cursor-pointer  p-1  hover:scale-125 duration-300`}
                    >
                      {Icon && (
                        <a href={`https://${Point} `} target="_blank">
                          <Icon />
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
