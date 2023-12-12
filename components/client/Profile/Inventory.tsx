"use client";
import React from "react";
import ProductCard from "../Product/ProductCard";
import { useData } from "@context/DataProviders";

const Inventory = () => {
  const { Products, currentUser } = useData();

  const favoriteProducts = Products.filter((item: any) =>
    currentUser?.productscollection?.includes(item.id)
  );
  return (
    <div>
      {" "}
      <div>
        <h2 className="text-[24px] font-normal text-white">
          Vật phẩm đã sỡ hữu
        </h2>

        <div className="grid gap-5 p:grid-cols-2 d:grid-cols-5 mt-5">
          {favoriteProducts.map((item: any, idx: number) => (
            <div key={idx}>
              <ProductCard Data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
