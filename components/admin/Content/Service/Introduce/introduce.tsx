"use client";
import React from "react";
import Section from "./Section";

const Introduce: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <h3 className="p:text-[28px] d:text-[44px] text-center font-bold mb-2 uppercase">
        Cập nhật trang giới thiệu
      </h3>
      <Section name="Thêm ảnh vào trang giới thiệu" />
    </div>
  );
};

export default Introduce;
