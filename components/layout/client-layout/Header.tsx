"use client";
import { HeaderItems, TypeProductItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { Drawer } from "antd";
import Link from "next/link";
import React from "react";
import { AiFillCaretRight, AiOutlineDown, AiOutlineUser } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";
import Lottie from "lottie-react";
import optionAmination from "@assets/animation/optionAdmin.json";
import { BiLogOutCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdAdminPanelSettings } from "react-icons/md";
import { useAuth } from "@context/AuthProviders";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const { theme, setIsLoading } = useStateProvider();
  const { productTypes, currentUser, setCurrentUser } = useData();
  const { verify } = useAuth();
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

  const UserItems = [
    {
      label: "Thông tin người dùng",
      value: `thong-tin-nguoi-dung/${currentUser?.username}?key=${currentUser?.id}`,
      icon: CgProfile,
    },
    {
      label: "Đăng xuất",
      value: "dang-xuat",
      icon: BiLogOutCircle,
    },
  ];

  if (currentUser?.role === "admin") {
    //push admin option in userItems[0] array
    UserItems.unshift({
      label: "Trang quản trị",
      value: "admin",
      icon: MdAdminPanelSettings,
    });
    //delete userItems[1] array
    UserItems.splice(1, 1);
  }
  const HandleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentUser(null);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-white shadow-lg shadow-gray-400"
          : "bg-black border-b border-white"
      } h-max   duration-300 fixed z-50 w-full top-0`}
    >
      <div className="d:w-[1440px] p:w-auto d:mx-auto p:mx-2 h-[98px] ">
        <div className="d:hidden p:flex justify-between items-center h-full px-4">
          <Link href={`/`} className="">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/avatar%2FRUN%20(500%20x%2084%20px).png?alt=media&token=186d300b-00c8-4f0c-84d5-76c9bd51d095"
              alt="logo"
            />
          </Link>
          <div className="border border-black p-1">
            <FaListUl
              className="text-[22px] text-black"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
        <div className="p:hidden d:flex justify-between items-center h-full">
          <Link href={`/`} className="">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/avatar%2FRUN%20(500%20x%2084%20px).png?alt=media&token=186d300b-00c8-4f0c-84d5-76c9bd51d095"
              alt="logo"
              className=""
            />
          </Link>
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
                                <div className="py-2 px-4 hover:bg-gray-100 hover:text-blue-400 duration-300  font-light flex items-center justify-between w-full">
                                  {" "}
                                  <p className="py-2 w-max px-4 hover:text-maingreen duration-300 text-black">
                                    {items.label}
                                  </p>
                                  {sort.length > 0 && (
                                    <AiFillCaretRight
                                      className={` rotate-90 group-hover/lv1:rotate-0 duration-500 `}
                                    />
                                  )}
                                </div>
                              </Link>
                              {items.label === "Khác" ? (
                                <>
                                  {" "}
                                  {sort.length > 0 && (
                                    <div className="hidden group-hover/lv1:block absolute top-0 left-full mt-0 w-max bg-mainred  shadow-lg">
                                      <div className="">
                                        {sort.map((item: any, idx: number) => (
                                          <div key={idx}>
                                            <div className=" group/lv2    relative font-light     border-b">
                                              <Link
                                                href={`${`/san-pham/${items.value}?type=${item.typeUrl}`}`}
                                              >
                                                <div className="py-4 px-10 hover:bg-gray-100 hover:text-blue-400 duration-300  bg-white font-light flex items-center justify-between w-full">
                                                  <p>{item.type}</p>
                                                </div>
                                              </Link>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </>
                              ) : (
                                <>
                                  {" "}
                                  {sort.length > 0 && (
                                    <div className="hidden group-hover/lv1:block absolute top-0 left-full mt-0 w-max bg-mainred  shadow-lg">
                                      <div className="">
                                        {sort.map((item: any, idx: number) => (
                                          <div key={idx}>
                                            <div className=" group/lv2    relative font-light     border-b">
                                              <Link
                                                href={`${`/san-pham/${items.value}?type=${item.typeUrl}`}`}
                                              >
                                                <div className="py-4 px-10 hover:bg-gray-100 hover:text-blue-400 duration-300  bg-white font-light flex items-center justify-between w-full">
                                                  <p>{item.type}</p>
                                                </div>
                                              </Link>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </>
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
          {currentUser ? (
            <div className="group">
              <div className="flex items-center  gap-2 font-LexendDeca cursor-pointer  pr-2 pl-8 py-1 rounded-full bg-slate-100 ">
                <div className="w-10 h-10 ">
                  <Lottie animationData={optionAmination} />
                </div>
                <div className="w-[50px] h-[50px] rounded-full">
                  <img
                    src={currentUser.photoURL}
                    alt="avatar"
                    className="rounded-full w-full h-full bg-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col  absolute">
                <div className=" top-9 hidden group-hover:block duration-300">
                  <div className=" flex flex-col bg-white shadow-md border-t-2 border-gray-500 ">
                    {UserItems.map((items: any, idx: number) => {
                      const Icon = items.icon;
                      return (
                        <>
                          {items.label === "Đăng xuất" ? (
                            <>
                              <div
                                onClick={() => HandleLogout()}
                                key={idx}
                                className={`${
                                  items.value === "dang-xuat"
                                    ? "text-redPrimmary"
                                    : "text-black"
                                } w-full  border-b py-2 cursor-pointer px-4 hover:bg-gray-100  `}
                              >
                                <div className="flex gap-2 items-center ">
                                  <Icon />
                                  <p className={`$ duration-300`}>
                                    {items.label}
                                  </p>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <Link
                                href={`${items.value}`}
                                key={idx}
                                className={`${
                                  items.value === "dang-xuat"
                                    ? "text-redPrimmary"
                                    : "text-black"
                                } w-full  border-b py-2 cursor-pointer px-4 hover:bg-gray-100  `}
                              >
                                <div className="flex gap-2 items-center ">
                                  <Icon />
                                  <p className={`$ duration-300`}>
                                    {items.label}
                                  </p>
                                </div>
                              </Link>
                            </>
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {" "}
              <div className="flex">
                <Link
                  href={`/dang-nhap`}
                  className={`${
                    theme === "light"
                      ? "bg-gray-800 hover:bg-black"
                      : "bg-gray-800 hover:bg-gray-600 "
                  }  flex items-center gap-2 py-3 cursor-pointer px-6 text-white rounded-full`}
                >
                  <AiOutlineUser />
                  <p className="w-max"> Đăng nhập</p>
                </Link>
              </div>
            </>
          )}
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
