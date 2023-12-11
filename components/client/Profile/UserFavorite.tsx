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
    <div className="grid gap-5 p:grid-cols-2 d:grid-cols-4">
      {favoriteProducts.map((item: any, idx: number) => (
        <div key={idx}>
          <ProductCard Data={item} />
        </div>
      ))}
    </div>
  );
};

export default UserFavorite;
