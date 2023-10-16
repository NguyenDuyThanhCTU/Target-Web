"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
// import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const DropDown = ({ content, link, setHidden, idx, dropdown }: any) => {
  const [isSelected, setIsSelected] = useState(true);
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(0);

  const HandleOpenSubMenu = (idx: number) => {
    if (idx === isOpenSubMenu) {
      setIsOpenSubMenu(0);
    } else {
      setIsOpenSubMenu(idx);
    }
  };

  return (
    <div
      className={`${
        idx === 0 && "border-t-0"
      } border-t border-gray-200 items-start justify-between py-3  mx-5 flex flex-col`}
    >
      <div className="flex items-center justify-between w-full">
        <Link href={`/${link}`}>
          <h3
            className="text-[20px] font-normal"
            onClick={() => {
              setHidden(false);
            }}
          >
            {content}
          </h3>
        </Link>
        {dropdown.length > 1 && (
          <AiFillCaretDown onClick={() => setIsSelected(!isSelected)} />
        )}
      </div>

      {dropdown.length > 1 && (
        <div
          className={`flex flex-col  overflow-y-scroll duration-300 gap-2 my-2 ml-2  ${
            isSelected ? "h-0" : "h-auto"
          }`}
        >
          {dropdown.map((items: any, idx: number) => (
            <div>
              {" "}
              <div className="flex items-center justify-between">
                <div
                  className="p-4 font-light text-black group duration-300 hover:text-white hover:bg-mainpink flex justify-between items-center w-full"
                  onClick={() => {
                    HandleOpenSubMenu(idx + 1);
                  }}
                >
                  <Link href={`/loai-san-pham/${items.params}`}>
                    <h3
                      onClick={() => {
                        setHidden(false);
                      }}
                    >
                      {items.name}
                    </h3>
                  </Link>
                </div>
                <div>
                  {items.children.length > 1 && (
                    <AiFillCaretDown
                      onClick={() => {
                        HandleOpenSubMenu(idx + 1);
                      }}
                    />
                  )}
                </div>
              </div>
              <div
                className={`${
                  isOpenSubMenu === idx + 1 ? " h-max" : " h-0"
                } overflow-hidden duration-500  block`}
              >
                {items.children.length > 0 && (
                  <>
                    {items.children.map((items: any) => (
                      <Link href={`/loai-san-pham/${items.params}`}>
                        <div
                          className="py-4 px-8 pl-14 font-light duration-300 text-mainblue hover:text-white hover:bg-mainblue cursor-pointer"
                          onClick={() => {
                            setHidden(false);
                          }}
                        >
                          {items.name}
                        </div>
                      </Link>
                    ))}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
