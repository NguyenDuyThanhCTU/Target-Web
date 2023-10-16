"use client";
import React from "react";
import Section from "./Section/Section";

const Slide: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <h3 className="p:text-[28px] d:text-[44px] text-center font-bold mb-2 uppercase">
        Cập nhật Slide trình chiếu
      </h3>
      <Section name="Thêm ảnh vào slide" />
    </div>
  );
};

export default Slide;
