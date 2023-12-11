"use client";
import { useSmartContract } from "@context/ContractProviders";
import { useData } from "@context/DataProviders";
import { Badge } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";

const ProductCard = ({ Data }: any) => {
  const { Products } = useData();
  // console.log(Data);

  const router = useRouter();

  const HandleNavigate = (Url: any, Level: any) => {
    router.push(`/chi-tiet-san-pham/${Url}?level=${Level}&pId=${Data.pId}`);
  };
  const topic = Products.filter((item: any) => item.url === Data.url);

  return (
    <div onClick={() => HandleNavigate(Data.url, Data.level)}>
      <Badge.Ribbon
        text={
          `${topic[0]?.parentUrl}` === "giay-toc-do"
            ? "Giày tốc độ"
            : `${topic[0]?.parentUrl}` === "non-vuot-gioi-han"
            ? "Nón vượt giới hạn"
            : `${topic[0]?.parentUrl}` === "ao-thach-thuc"
            ? "Áo thách thức"
            : `${topic[0]?.parentUrl}` === "quan-phong-cach"
            ? "Quần phong cách"
            : "Phụ kiện sáng tạo"
        }
        color="cyan"
        placement="start"
      >
        <Badge.Ribbon text={`Cấp ${Data.level}`} color="red" placement="end">
          <div className="border font-LexendDeca font-extralight  cursor-pointer h-[320px] ">
            <div className="">
              <div className="pt-2 px-2">
                <div className="overflow-hidden h-[200px]  ">
                  <img
                    src={Data.image}
                    alt="product"
                    className="w-full h-full px-4 hover:scale-110 duration-300"
                  />
                </div>
                <h3 className=" mt-2 truncate1 d:text-[16px] p:text-[14px] font-normal text-center">
                  {Data.name}
                </h3>
                <p className="text-redPrimmary font-light flex gap-2 items-center mt-2">
                  <FaEthereum />
                  <span> {Data.price} SepoliaETH</span>
                </p>
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
