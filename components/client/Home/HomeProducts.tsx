"use client";
import { useSmartContract } from "@context/ContractProviders";
import React from "react";

const HomeProducts = () => {
  const { Shoes } = useSmartContract();
  return <div className="h-[50vh] bg-white"></div>;
};

export default HomeProducts;
