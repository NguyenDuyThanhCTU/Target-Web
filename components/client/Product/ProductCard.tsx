"use client";
import Link from "next/link";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";

const ProductCard = ({ Data }: any) => {
  return (
    <Link href={`/chi-tiet-san-pham/${Data.url}`}>
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
            <h3 className=" mt-2 truncate1 d:text-[16px] p:text-[14px] font-normal">
              {Data.title}
            </h3>
            <p className="text-redPrimmary font-light">{Data.price}₫</p>
          </div>

          <div className="flex w-full justify-between pl-2 py-4 d:text-[16px] p:text-[12px]">
            <p className="font-bold text-mainred"></p>
            <div className=" px-4 py-1 flex items-center gap-3 bg-orange-500 text-white rounded-l-full">
              <p> Chi tiết</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
