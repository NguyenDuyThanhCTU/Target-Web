"use client";
import Link from "next/link";
import React from "react";

const NavbarIntroduction = ({ id, url, items }: any) => {
  return (
    <div className="my-10">
      {" "}
      <div className="p:w-auto d:w-[1300px] p:mx-2 d:mx-auto flex overflow-x-auto gap-8 pb-5 border-b border-black textgray  text-gray-700 hover:text-black duration-300 font-LexendDeca font-light">
        {items.map((item: any, idx: number) => (
          <Link
            href={`${!url ? `/${item.value}` : `/${url}/${item.value}`}`}
            key={idx}
            className={`${
              item.value === id && "border-b border-b-black w-max "
            } w-max `}
          >
            <p className="w-max"> {item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarIntroduction;
