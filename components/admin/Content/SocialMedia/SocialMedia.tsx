"use client";
import React, { useState } from "react";

import Card from "./Card/Card";
import { notification } from "antd";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { updateArrayFieldAtIndex } from "@config/Services/Firebase/FireStoreDB";
import {
  IconMapping,
  SocialMediaDashboard,
  ToolsTipsSocialMediaItems,
} from "@assets/item";

const SocialMedia: React.FC = () => {
  const { setIsRefetch } = useStateProvider();
  const [isSelected, setSelected] = useState<number | undefined>();
  const [isChange, setChange] = useState<string>("");
  const { SocialMedia } = useData();

  const HandleUpdate = (idx: number) => {
    const data = isChange;

    updateArrayFieldAtIndex("website", "SocialMedia", "Data", data, idx).then(
      () => {
        notification["success"]({
          message: "Thành công !",
          description: `
          Thông tin của bạn đã được cập nhật !`,
        });
        setIsRefetch("CRUD website");
      }
    );
  };

  return (
    <div className="w-full ">
      <div className="border rounded-md border-gray-500 ">
        <h3 className="p-5 shadow-lg rounded-t-md text-[25px] bg-[#353535]">
          Các kênh truyền thông
        </h3>
        <div className="p-5 grid d:grid-cols-4 d:gap-10 p:grid-cols-1 p:gap-2 ">
          {SocialMediaDashboard.map((items, idx) => {
            let Icon = IconMapping[items.icon];
            const SocialMediaItems = SocialMedia[idx];
            const ToolsTips = ToolsTipsSocialMediaItems[idx];
            return (
              <Card
                key={idx}
                ToolsTips={ToolsTips.title}
                placeholder={SocialMediaItems}
                title={items.title}
                Icon={Icon}
                image={items.image}
                style={items.style}
                setSelected={setSelected}
                idx={idx}
                setChange={setChange}
                isSelected={isSelected}
                HandleUpdate={HandleUpdate}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
