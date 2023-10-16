"use client";
import { IconMapping } from "@assets/item";
import { useData } from "@context/DataProviders";
import React from "react";

import { SlOptions } from "react-icons/sl";

const ListOrder: React.FC = () => {
  const { Orders } = useData();

  return (
    <div>
      <div className="rounded-xl m-5 h-[650px] overflow-y-scroll">
        <div className="grid grid-cols-10 pb-5 border-b mr-2">
          <p>STT</p>
          <p>Tên KH</p>
          <p>SĐT KH</p>
          <p>Email</p>
          <p>Địa</p>
          <p>Giá</p>
          <p>Thời gian</p>
          <p className="w-[100px]">Trạng thái</p>
        </div>
        {Orders.map((data: any, idx: number) => {
          let Icon = IconMapping[data.state];

          return (
            <div key={data.id} className="grid grid-cols-10 my-6 items-center">
              <p>{idx + 1}</p>

              <p className="truncate ">{data.name}</p>
              <p className="truncate ">{data.phone}</p>
              <p className="truncate ">{data.product.cartype}</p>
              <img
                src={data.product.image}
                alt="product"
                className="ml-6 w-14 h-14 rounded-lg object-cover"
              />
              <p className="truncate ">{data.product.battery}</p>
              <p className="truncate ">{data.product.price} VNĐ</p>

              <div>
                {data.daysSinceCreation > 0 ? (
                  <div>
                    <p className="text-[12px] w-[85px] truncate py-1 border px-2 rounded-3xl text-orange-300 border-orange-300">
                      {data.daysSinceCreation} ngày trước
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-[12px] w-[65px] truncate border px-2 py-1 rounded-3xl text-green-300 border-green-300">
                      Bây giờ
                    </p>
                  </>
                )}
              </div>
              <p>
                {Icon && (
                  <Icon
                    className={`text-[20px] ml-5 ${
                      data.state === "BsFillSendExclamationFill"
                        ? "text-green-400"
                        : data.state === "BsFillSendCheckFill"
                        ? "text-sky-500"
                        : data.state === "TbCubeSend"
                        ? "text-teal-500"
                        : data.state === "BsFillSendXFill"
                        ? "text-red-500"
                        : ""
                    }`}
                  />
                )}
              </p>

              <div className="group absolute right-20">
                <SlOptions className="ml-6 border-2 rounded-full text-[30px] p-[3px] border-white text-white hover:border-blue-500 hover:text-blue-500" />

                {/* <div className="absolute right-[-100px] top-[40px] hidden group-hover:block">
                  <DropDown ItemDropDown={OrderDashboardItems} id={data.id} />
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListOrder;
