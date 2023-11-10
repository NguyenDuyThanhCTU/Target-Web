import { IconMapping, TypeProductFunc } from "@assets/item";
import Link from "next/link";
import React from "react";

export const FunctionCard = ({ link, Icon, label }: any) => {
  return (
    <Link href={`/${link}`}>
      <div className=" border-blue-400 group bg-white rounded-2xl hover:scale-105 hover:border-blue-500 duration-300 border-2">
        <div className="px-2  py-5 gap-2 flex flex-col justify-center items-center font-normal font-LexendDeca">
          <div className="text-[50px] group-hover:scale-110 duration-300">
            <Icon />
          </div>
          <span className="group-hover:text-blue-500  duration-300">
            {label}
          </span>
        </div>
      </div>
    </Link>
  );
};

export const ProductFunction = () => {
  return (
    <div className="bg-gray-300 pb-24 pt-16">
      <div className="d:w-[1440px]  p:w-auto d:mx-auto ">
        <div className="h-10 flex  justify-center items-center gap-5">
          <div className="bg-[url(https://yensaotrison.com/images/bg_tit.png)] h-4 w-[83px] bg-cover bg-no-repeat"></div>
          <h3 className="text-mainred text-[30px]  leading-10 font-LexendDeca font-semibold uppercase">
            Chức năng nổi bật
          </h3>
          <div className="bg-[url(https://yensaotrison.com/images/bg_tit1.png)] h-4 w-[86px] bg-cover bg-no-repeat"></div>
        </div>

        <div className="grid grid-cols-5 gap-8 mt-10">
          {TypeProductFunc.map((item, index) => {
            let Icon = IconMapping[item.icon];
            return (
              <div key={index}>
                <FunctionCard
                  link={item.value}
                  Icon={Icon}
                  label={item.label}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
