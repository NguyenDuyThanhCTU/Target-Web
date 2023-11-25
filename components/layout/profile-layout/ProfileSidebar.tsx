"use client";
import React from "react";
import { notification } from "antd";
import { useStateProvider } from "@context/StateProvider";
import { useData } from "@context/DataProviders";
import { IconMapping, ProfileSidebarItems } from "@assets/item";

const ProfileSidebar: React.FC = () => {
  const { isSelected, setSelected } = useStateProvider();
  const { HeaderAdmin } = useData();

  const HandleSelect = (idx: number) => {
    if (
      HeaderAdmin.role === "editor" &&
      (idx === 0 ||
        idx === 2 ||
        idx === 6 ||
        idx === 8 ||
        idx === 9 ||
        idx === 10)
    ) {
      notification["warning"]({
        message: "Thao tác không thành công",
        description: `
        Bạn cần quyền QUẢN TRỊ để vào mục này !`,
      });
    } else {
      setSelected(idx);
    }
  };

  return (
    <div className=" w-[20vw]  h-full text-while   border-r-2 border-white  overflow-y-auto pr-2">
      <div className="w-full flex items-center justify-center border-b border-white py-3">
        <div className="p-5 bg-[rgba(255,255,255,0.81)]">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/avatar%2FRUN%20(500%20x%2084%20px).png?alt=media&token=186d300b-00c8-4f0c-84d5-76c9bd51d095"
            alt="logo"
            className="inline-block w-full"
          />
        </div>
      </div>
      <div className="flex flex-col p:ml-2 d:ml-14 gap-16  relative py-10  ">
        <div className="flex flex-col p:items-center d:items-start gap-4">
          <div className="flex flex-col items-start gap-10">
            {ProfileSidebarItems.map((items, idx) => {
              let Icon = IconMapping[items.icon];

              return (
                <div
                  key={idx}
                  className={`flex gap-3 items-center cursor-pointer hover:scale-125 duration-300 ${
                    isSelected === idx
                      ? "text-blue-500"
                      : "border-while text-white"
                  }`}
                  onClick={() => HandleSelect(idx)}
                >
                  {Icon && (
                    <Icon
                      className={`border-2 rounded-full text-[30px] p-[3px] ${
                        isSelected === idx
                          ? "border-blue-500"
                          : "border-while text-white"
                      }`}
                    />
                  )}
                  <p className="p:hidden d:block"> {items.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`h-12 w-1 bg-blue-400 overflow-hidden rounded-t-full rounded-b-full absolute right-0 top-[43px]
        duration-300 transition transform 
        ${
          isSelected === 0
            ? "-translate-y-[10px]"
            : isSelected === 1
            ? "translate-y-[60px]"
            : isSelected === 2
            ? "translate-y-[130px]"
            : isSelected === 3
            ? "translate-y-[200px]"
            : isSelected === 4
            ? "translate-y-[270px]"
            : isSelected === 5
            ? "translate-y-[340px]"
            : isSelected === 6
            ? "translate-y-[410px]"
            : null
        }`}
        ></div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
