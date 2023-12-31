"use client";
import { useStateProvider } from "@context/StateProvider";
import React from "react";

const ThemeLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useStateProvider();
  return (
    <div
      className={`${
        theme === "light" ? " text-black" : "bg-black text-white"
      } w-full duration-300 `}
    >
      {children}
    </div>
  );
};

export default ThemeLayout;
