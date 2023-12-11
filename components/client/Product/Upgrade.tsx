"use client";
import React, { useState } from "react";
import SimilarProductCard from "./SimilarProductCard";
import { getDataByTypeProps } from "@components/lib/get-data";

const Upgrade = ({ Data }: any) => {
  return (
    <div>
      {Data?.map((item: any, idx: number) => {
        return (
          <div key={idx}>
            <SimilarProductCard item={item} type="upgrade" />
          </div>
        );
      })}
    </div>
  );
};

export default Upgrade;
