"use client";
import { useSmartContract } from "@context/ContractProviders";
import { Badge } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";

const ProductCard = ({ Data }: any) => {
  // const resultString = `${myObject._hex} - ${myObject._isBigNumber.toString()}`;
  const priceString = `${Data.price}`;
  const levelString = `${Data.level}`;
  //delete 18 final character
  const price = priceString.slice(0, -18);
  const level = levelString.slice(0, -18);
  const router = useRouter();

  const HandleNavigate = (Url: any, Level: any) => {
    router.push(`/chi-tiet-san-pham/${Url}?level=${Level}&pId=${Data.pId}`);
  };

  return (
    <div onClick={() => HandleNavigate(Data.url, level)}>
      <Badge.Ribbon
        text={
          `${Data.parenturl}` === "giay-toc-do"
            ? "Giày tốc độ"
            : `${Data.parenturl}` === "non-vuot-gioi-han"
            ? "Nón vượt giới hạn"
            : `${Data.parenturl}` === "ao-thach-thuc"
            ? "Áo thách thức"
            : `${Data.parenturl}` === "quan-phong-cach"
            ? "Quần phong cách"
            : "Phụ kiện sáng tạo"
        }
        color="cyan"
        placement="start"
      >
        <Badge.Ribbon text={`Cấp ${level}`} color="red" placement="end">
          <div className="border font-LexendDeca font-extralight  cursor-pointer h-[320px] ">
            <div className="">
              <div className="pt-2 px-2">
                <div className="overflow-hidden h-[200px]  ">
                  <img
                    src={Data.image}
                    alt="product"
                    className="w-full h-full hover:scale-110 duration-300"
                  />
                </div>
                <h3 className=" mt-2 truncate1 d:text-[16px] p:text-[14px] font-normal text-center">
                  {Data.name}
                </h3>
                <p className="text-redPrimmary font-light">{price}$</p>
              </div>

              <div className="flex w-full justify-between pl-2 py-4 d:text-[16px] p:text-[12px]">
                <p className="font-bold text-mainred"></p>
                <div className=" px-4 py-1 flex items-center gap-3 bg-orange-500 text-white rounded-l-full">
                  <p> Chi tiết</p>
                </div>
              </div>
            </div>
          </div>
        </Badge.Ribbon>
      </Badge.Ribbon>
    </div>
  );
};

export default ProductCard;
