"use client";
import ProductCard from "@components/client/Product/ProductCard";
import { useData } from "@context/DataProviders";
import React, { useEffect } from "react";

const UserFavorite = () => {
  const { Products, currentUser } = useData();

  const favoriteProducts = Products.filter((item: any) =>
    currentUser?.favorite?.includes(item.id)
  );
  return (
    <div>
      <h2 className="text-[24px] font-normal text-white">
        Danh sách sản phẩm yêu thích
      </h2>

      <div className="grid gap-5 p:grid-cols-2 d:grid-cols-5">
        {favoriteProducts.map((item: any, idx: number) => (
          <div key={idx}>
            <ProductCard Data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserFavorite;
