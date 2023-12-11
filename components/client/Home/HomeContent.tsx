"use client";
import { useData } from "@context/DataProviders";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { TypeProductItems } from "@assets/item";
import DisplayHomeProducts from "./DisplayHomeProducts";

const HomeContent = ({ Data }: any) => {
  const { productTypes, Products } = useData();

  return (
    <div className="flex flex-col bg-white py-10">
      {TypeProductItems?.map((item: any, idx: number) => {
        const sortProduct = Products.filter(
          (product: any) => product.parentUrl === item.value
        );
        const type = productTypes.filter(
          (type: any) => type.parentUrl === item.value
        );
        return (
          <div key={idx}>
            <DisplayHomeProducts
              Data={sortProduct}
              Topic={item.label}
              Type={type}
            />
          </div>
        );
      })}{" "}
    </div>
  );
};

export default HomeContent;
