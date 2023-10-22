"use client";
import React from "react";
import ListProducts from "./Section/ListProducts";

const Product: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <h3 className=" text-[44px] text-center font-bold mb-2 uppercase ">
          Thông tin sản phẩm
        </h3>
        <ListProducts />
      </div>
    </div>
  );
};

export default Product;
