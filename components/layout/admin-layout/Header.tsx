"use client";
import React, { useState } from "react";

import { BiSolidBellRing } from "react-icons/bi";
import { Badge, Dropdown, MenuProps } from "antd";
import { useData } from "@context/DataProviders";
import HeaderDropDown from "@components/admin/Item/HeaderDropdown";
import Clock from "./Items/Clock";

const Header: React.FC = () => {
  const { HeaderAdmin, Notification } = useData();
  const [Option, setOption] = useState(false);

  const items: MenuProps["items"] = [];

  Notification.map((data: any) => {
    items.push({
      key: data.id,
      label: (
        <div className="hover:bg-gray-200 duration-300 font-LexendDeca font-light border-b border-black">
          <div className="p-1">
            <div className="  font-bold text-[18px] ">{data.title}</div>
            <div className="flex gap-3 py-1">
              <div className="w-10 h-10">
                <img src={data.image} alt="notification" />
              </div>
              <div>
                <div>{data.description}</div>
                {data.daysSinceCreation === 0 ? (
                  <>
                    {" "}
                    <div className="text-blue-600 font-semibold">Mới</div>
                  </>
                ) : (
                  <>
                    {" "}
                    <div>{data.daysSinceCreation} ngày trước</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ),
    });
  });

  return (
    <div className="h-[7vh] bg-Blue3D font-LexendDeca text-white flex w-full ">
      <div className="d:flex justify-between w-full mx-10 items-center relative p:hidden">
        <div className="cursor-pointer flex gap-20  ">
          <div>
            <div className="hover:scale-110 duration-300 ">
              {/* <Clock /> */}
              Xin chào, {HeaderAdmin.name}
            </div>
          </div>
        </div>
        <div className="flex gap-32 cursor-pointer mr-10">
          <div className="flex items-center">
            <div className="flex items-center gap-5 ">
              <Dropdown menu={{ items }} placement="bottom">
                <a onClick={(e) => e.preventDefault()}>
                  <Badge count={Notification.length} size="small">
                    <div className="text-[24px] text-white">
                      <BiSolidBellRing />
                    </div>
                  </Badge>
                </a>
              </Dropdown>

              <div className="group relative flex gap-5 items-center ">
                <img
                  src={HeaderAdmin?.photoURL}
                  alt="logo"
                  className="w-12 h-12 inline-block object-cover rounded-full "
                />
                <div className="absolute -left-14 top-[75px] hidden  group-hover:block ">
                  <HeaderDropDown />
                </div>
              </div>
            </div>

            <p className="inline-block ml-3">{HeaderAdmin?.name}</p>
          </div>
        </div>
      </div>

      <div className="p:flex justify-between w-full mx-2 items-center relative d:hidden">
        <div
          className=" flex items-center justify-center border-b border-gray-800 py-3"
          // onClick={() => setHidden(!Hidden)}
        >
          <img
            src="https://image-sn.s3.amazonaws.com/Russo+Tech.png"
            alt="logo"
            className="w-12 h-[50] inline-block circle-animation"
          />
        </div>
        <div className="flex mr-5 cursor-pointer">
          <div className="flex items-center">
            <div className=" relative " onClick={() => setOption(!Option)}>
              <img
                src={HeaderAdmin?.photoURL}
                alt="logo"
                className="w-12 h-12 inline-block object-cover rounded-full "
              />
              {Option && (
                <>
                  {" "}
                  <div className="absolute right-[-115px] top-[75px]  ">
                    <HeaderDropDown />
                  </div>
                </>
              )}
            </div>

            <p className="inline-block ml-3" onClick={() => setOption(!Option)}>
              {HeaderAdmin?.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
