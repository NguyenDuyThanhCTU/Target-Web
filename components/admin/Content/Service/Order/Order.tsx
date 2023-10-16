"use client";
import React from "react";
import ListOrder from "./Section/ListOrder";

const Order: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full relative ">
      <div className="ml-3 mb-2 bg-[#353535] shadow-gray-700 p-5 rounded-xl">
        <h3 className=" text-[44px] text-center font-bold mb-2 uppercase">
          Danh sách các đơn hàng
        </h3>
        <div className="mt-5 border rounded-xl flex flex-col gap-10">
          <ListOrder />
        </div>
      </div>
    </div>
  );
};

export default Order;
