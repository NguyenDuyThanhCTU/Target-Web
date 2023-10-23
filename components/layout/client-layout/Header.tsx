"use client";
import { HeaderItems, TypeProductItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { Drawer } from "antd";
import Link from "next/link";
import React from "react";
import { AiFillCaretRight, AiOutlineDown, AiOutlineUser } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const { theme } = useStateProvider();
  const { productTypes } = useData();

  const SupportItems = [
    {
      label: "Hướng dẫn sử dụng",
      value: "huong-dan-su-dung",
    },
    {
      label: "Catalogue sản phẩm",
      value: "catalogue-san-pham",
    },
  ];

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-white shadow-lg shadow-gray-400"
          : "bg-black border-b border-white"
      } h-max   duration-300 relative z-10`}
    >
      <div className="d:w-[1440px] p:w-auto d:mx-auto p:mx-2 h-[98px] ">
        <div className="d:hidden p:flex justify-between items-center h-full px-4">
          <div className="">
            <img src="https://camptraveler.com/hilink-logo.svg" alt="logo" />
          </div>
          <div className="border border-black p-1">
            <FaListUl
              className="text-[22px] text-black"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
        <div className="p:hidden d:flex justify-between items-center h-full">
          <div className="">
            <img src="https://camptraveler.com/hilink-logo.svg" alt="logo" />
          </div>
          <div
            className={`${
              theme === "light" ? "text-black" : "text-white"
            } flex items-center gap-8 w-full mt-10 justify-center font-LexendDeca font-extralight`}
          >
            {HeaderItems.map((item: any, idx: number) => (
              <div className="relative group/main " key={idx}>
                <Link
                  className="hover:text-maingreen duration-300 flex items-center text-[18px] gap-2 font-light"
                  href={`/${item.link}`}
                >
                  <p> {item.name}</p>
                  {(item.name === "Hỗ trợ" ||
                    item.name === "Danh mục sản phẩm") && (
                    <AiOutlineDown className="text-[10px] group-hover/main:rotate-180 duration-300 text-black" />
                  )}
                </Link>
                <div className="h-[2px] bg-gray-400 w-0 group-hover/main:w-full duration-300 mt-3 "></div>
                {item.name === "Hỗ trợ" && (
                  <div className="flex flex-col top-8 absolute">
                    <div className="bg-none w-full h-4"></div>
                    <div className=" top-9 hidden group-hover/main:block duration-300">
                      <div className=" flex flex-col bg-white shadow-md border-t-2 border-gray-500 ">
                        {SupportItems.map((items: any, idx: number) => (
                          <Link
                            key={idx}
                            href={`/bai-viet/${items.value}`}
                            className="w-max  border-b"
                          >
                            <p className="py-2 px-4 hover:text-maingreen duration-300 text-black">
                              {" "}
                              {items.label}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {item.name === "Danh mục sản phẩm" && (
                  <div className="flex flex-col top-8 absolute z-50">
                    <div className="bg-none w-full h-4"></div>
                    <div className=" top-9 hidden group-hover/main:block duration-300">
                      <div className=" flex flex-col bg-white shadow-md border-t-2 border-gray-500 ">
                        {TypeProductItems.map((items: any, idx: number) => {
                          const sort = productTypes.filter(
                            (item: any) => item.parentUrl === items.value
                          );

                          return (
                            <div
                              key={idx}
                              className=" group/lv1 relative  border-b"
                            >
                              <Link
                                href={`/san-pham/${items.value}`}
                                className="  border-b"
                              >
                                <div className="py-2 px-4 hover:text-blue-400 duration-300  font-light flex items-center justify-between w-full">
                                  {" "}
                                  <p className="py-2 px-4 hover:text-maingreen duration-300 text-black">
                                    {items.label}
                                  </p>
                                  {sort.length > 0 && (
                                    <AiFillCaretRight
                                      className={` rotate-90 group-hover/lv1:rotate-0 duration-500 `}
                                    />
                                  )}
                                </div>
                              </Link>

                              {sort.length > 0 && (
                                <div className="hidden group-hover/lv1:block absolute top-0 left-full mt-0 w-max bg-mainred  shadow-lg">
                                  <div className="">
                                    {sort.map((items: any, idx: number) => (
                                      <div key={idx}>
                                        <div className=" group/lv2    relative font-light     border-b">
                                          <Link
                                            href={`${`/san-pham/${items.typeUrl}`}`}
                                          >
                                            <div className="py-2 px-4 hover:text-blue-400 duration-300  bg-white font-light flex items-center justify-between w-full">
                                              <p>{items.type}</p>
                                            </div>
                                          </Link>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex">
            <div
              className={`${
                theme === "light"
                  ? "bg-gray-800 hover:bg-black"
                  : "bg-gray-800 hover:bg-gray-600 "
              }  flex items-center gap-2 py-3 cursor-pointer px-6 text-white rounded-full`}
            >
              <AiOutlineUser />
              <p className="w-max"> Đăng nhập</p>
            </div>
          </div>
        </div>
      </div>
      <>
        <Drawer
          placement="left"
          onClose={() => setOpen(false)}
          closable={false}
          open={open}
          className="shadow-xl"
          width={300}
        >
          <div className="bg-white  uppercase font-bold">
            <div className="flex flex-col gap-3" onClick={() => setOpen(false)}>
              {HeaderItems.map((items: any, idx: any) => (
                <Link
                  className=" hover:text-mainorange"
                  href={`${items.link}`}
                  key={idx}
                >
                  {items.name}
                </Link>
              ))}
            </div>

            <div
              className="flex justify-center mt-5"
              onClick={() => setOpen(false)}
            >
              <div className="flex">
                <div className="bg-black flex items-center gap-2 py-3 px-6 text-white rounded-full">
                  <AiOutlineUser />
                  Đăng nhập
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </>
    </div>
  );
};

export default Header;
