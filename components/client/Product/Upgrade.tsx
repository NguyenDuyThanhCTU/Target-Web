"use client";
import React, { useState } from "react";
import SimilarProductCard from "./SimilarProductCard";
import { getDataByTypeProps } from "@components/lib/get-data";

const Upgrade = ({ Data }: any) => {
  const [ProductData, setProductData] = useState<any>([]);
  getDataByTypeProps("products", "url", Data[0].url).then((res: any) => {
    setProductData(res);
  });

  return (
    <div>
      {Data?.map((item: any, idx: number) => {
        const levelString = `${item.level}`;
        const level = levelString.slice(0, -18);
        const sort = ProductData.filter((item2: any) => item2.level === level);

        return (
          <div key={idx}>
            <SimilarProductCard item={item} Data={sort[0]} type="upgrade" />
          </div>
        );
      })}
    </div>
  );
};

export default Upgrade;
