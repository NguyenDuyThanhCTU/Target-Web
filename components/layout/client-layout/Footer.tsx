"use client";
import { IconMapping, SocialMediaCustom, TypePostItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { GiRotaryPhone } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
  const { ContactData, SocialMedia } = useData();
  const { theme } = useStateProvider();
  const router = useRouter();
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
        theme === "light"
          ? "bg-white text-black border-gray-400"
          : "bg-black text-white border-white"
      } border-y duration-300`}
    >
      <div className="d:w-[1440px] p:w-auto d:mx-auto p:mx-2 py-20  font-LexendDeca font-extralight ">
        <div className="grid p:grid-cols-2 d:grid-cols-6 gap-4 ">
          <div className="col-span-2">
            <Link href={`/`}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/avatar%2FRUN%20(500%20x%2084%20px).png?alt=media&token=186d300b-00c8-4f0c-84d5-76c9bd51d095"
                alt="logo"
                className="w-[80%]"
              />
            </Link>
            <h2 className="text-[18px] font-normal  mt-5">
              Runtech Motion - Kỷ nguyên mới của công nghệ
            </h2>
            <div className="mt-4 flex flex-col text-[14px]">
              <p>
                Runtech Motion - đánh dấu một sự thay đổi lớn về cách người dùng
                tương tác với website, giúp cuộc sống của mọi người trở nên dễ
                dàng hơn
              </p>
              <div>
                <img
                  src="https://file.hstatic.net/1000300454/file/logo_bct_019590229b4c4dfda690236b67f7aff4.png"
                  alt="logo"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[18px] font-normal">Tìm hiểu thêm</h2>
            <div className="flex flex-col gap-2 mt-5">
              {TypePostItems.map((items: any, idx: number) => (
                <Link
                  href={`/bai-viet/${items.value}`}
                  key={idx}
                  className="text-[14px] text-[#7b7b7b] hover:underline hover:text-blue-500"
                >
                  {items.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[18px] font-normal">Thông tin liên hệ</h2>
            <div className="mt-5 flex flex-col gap-2 text-[14px]">
              <div className=" flex gap-3">
                <div className="flex mt-1">
                  <IoLocation className="" />
                </div>
                <Link
                  href={`https://${SocialMedia[6]}`}
                  className="hover:underline hover:text-blue-500 cursor-pointer"
                >
                  {ContactData.address}
                </Link>
              </div>

              <div className="flex items-center gap-3 cursor-pointer hover:underline ">
                <GiRotaryPhone />
                <Link href={`tel:${ContactData.phone}`}>
                  {ContactData.phone}
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <BiLogoTelegram />
                <Link
                  href={`mailto:${ContactData.gmail}`}
                  className="hover:underline cursor-pointer"
                >
                  {ContactData.gmail}
                </Link>
              </div>
            </div>
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
                        <Link href={`https://${Point} `} target="_blank">
                          <Icon />
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="text-[18px] font-normal ">Fanpage</h2>
            <div className="h-52 overflow-hidden mt-4">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCTUDHCT&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="600"
                height="500"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
