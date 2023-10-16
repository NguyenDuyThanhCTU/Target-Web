"use client";
import React, { useState, ChangeEvent } from "react";
import { notification } from "antd";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { uploadImage } from "@components/items/server-items/Handle";
import { updateDocument } from "@config/Services/Firebase/FireStoreDB";

type TrademarkItem = {
  name: string;
  type: "input" | "textarea";
  placeholder: string;
};

const Trademark: React.FC = () => {
  const { TradeMarkData } = useData();
  const { setIsRefetch } = useStateProvider();
  const [Data, setData] = useState<string>("");
  const [isSelected, setSelected] = useState<number | undefined>();
  const [LogoUrl, setLogoUrl] = useState<string>("");
  const [IcoUrl, setIcoUrl] = useState<string>("");

  const HandleDiscard = () => {
    setData("");
    setLogoUrl("");
    setIcoUrl("");
  };

  const HandleUploadImage = (
    e: ChangeEvent<HTMLInputElement>,
    locate: string,
    type: string
  ) => {
    uploadImage(e, locate).then((data: any) => {
      if (type === "ico") {
        setIcoUrl(data);
      } else {
        setLogoUrl(data);
      }
    });
  };

  const ContactTrademark: TrademarkItem[] = [
    {
      name: "Logo Website",
      type: "input",
      placeholder: TradeMarkData.websiteLogo,
    },
    {
      name: "Icon Trang",
      type: "input",
      placeholder: TradeMarkData.websiteIco,
    },
  ];

  const ContactTrademark1: TrademarkItem[] = [
    {
      name: "Tên website",
      type: "input",
      placeholder: TradeMarkData.websiteName,
    },
    {
      name: "Slogan công ty",
      type: "input",
      placeholder: TradeMarkData.websiteSlogan,
    },
  ];

  const HandleUpdate = (idx: number) => {
    if (!Data && !LogoUrl && !IcoUrl) {
      notification.error({
        message: "Lỗi !",
        description: "Vui lòng nhập thông tin trước khi CẬP NHẬT !",
      });
    } else {
      let newData: { [key: string]: string } = {};
      if (idx === 0) {
        newData = { websiteName: Data };
      } else if (idx === 1) {
        newData = { websiteSlogan: Data };
      } else if (idx === 3) {
        newData = { websiteLogo: Data ? Data : LogoUrl };
      } else if (idx === 4) {
        newData = { websiteIco: Data ? Data : IcoUrl };
      }
      updateDocument("website", "Trademark", newData).then(() => {
        notification.success({
          message: "Thành công !",
          description: "Thông tin đã được CẬP NHẬT !",
        });
        HandleDiscard();
        setIsRefetch("CRUD website");
      });
    }
  };

  return (
    <div className="bg-[#353535] text-white rounded-xl shadow-xl w-auto">
      <div className="p-4 ">
        <h3 className="text-[25px] text-center ">Thương hiệu website</h3>

        <div className="flex flex-col gap-3 w-full ">
          {ContactTrademark1.map((items, idx) => {
            const Type = items.type === "input" ? "input" : "textarea";
            return (
              <div key={idx}>
                <label>{items.name}</label>
                <div className="flex gap-5 p:flex-col d:flex-row w-full">
                  {Type && (
                    <div onClick={() => setSelected(idx)} className="w-full">
                      <Type
                        placeholder={items.placeholder}
                        className="px-4 py-2 text-black outline-none rounded-2xl bg-gray-300 w-full "
                        onChange={(e: any) => setData(e.target.value)}
                      />
                    </div>
                  )}
                  <div className="w-[120px]">
                    {isSelected === idx ? (
                      <button
                        className="hover:bg-[#bb86fc37] hover:text-[#BB86FC] text-[#74affc] bg-[#74affc43] px-3 py-2 rounded-xl"
                        onClick={() => HandleUpdate(idx)}
                      >
                        Cập nhật
                      </button>
                    ) : (
                      <button className="text-white bg-gray-400 px-3 py-2 rounded-xl cursor-default">
                        Cập nhật
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex d:flex-row gap-3 mt-5 p:flex-col">
          {ContactTrademark.map((items, idx) => {
            const Type = items.type === "input" ? "input" : "textarea";
            return (
              <div className="flex flex-col gap-3" key={idx}>
                <label>{items.name}</label>
                <div className="flex gap-5 d:flex-row p:flex-col">
                  {Type && (
                    <div
                      onClick={() => setSelected(idx + 2)}
                      className="p:w-full d:w-auto"
                    >
                      <Type
                        placeholder={items.placeholder}
                        className="px-4 py-2 text-black outline-none rounded-2xl bg-gray-300 w-full"
                        onChange={(e: any) => setData(e.target.value)}
                      />
                    </div>
                  )}
                  <div className="w-[120px]">
                    {isSelected === idx + 2 ? (
                      <button
                        className="hover:bg-[#bb86fc37] hover:text-[#BB86FC] text-[#74affc] bg-[#74affc43] px-3 py-2 rounded-xl"
                        onClick={() => HandleUpdate(idx + 2)}
                      >
                        Cập nhật
                      </button>
                    ) : (
                      <button className="text-white bg-gray-400 px-3 py-2 rounded-xl cursor-default">
                        Cập nhật
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-5 d:flex-row p:flex-col">
          <div>
            <label>
              <div className="flex justify-center mt-10  h-[300px] d:w-[350px] border rounded-lg cursor-pointer p:w-auto">
                <img
                  src={`${LogoUrl ? LogoUrl : TradeMarkData.websiteLogo}`}
                  alt="logo"
                  className="object-contain p-2"
                />

                <input
                  type="file"
                  className="w-0 h-0"
                  onChange={(e) => HandleUploadImage(e, "trademark", "logo")}
                />
              </div>
            </label>

            {LogoUrl ? (
              <div className="w-full justify-center flex">
                <button
                  className="hover:bg-[#bb86fc37] hover:text-[#BB86FC] text-[#fc7474] bg-[#fc747443] px-3 py-2 rounded-xl mt-3 "
                  onClick={() => HandleUpdate(3)}
                >
                  Cập nhật
                </button>
              </div>
            ) : (
              <p className="text-white italic text-[13px] mt-2">
                Nhấp vào logo để tải hình ảnh lên{" "}
                <strong className="text-redPrimmary">(*)</strong>
              </p>
            )}
          </div>

          <div>
            <label>
              <div className="flex justify-center mt-10  h-[300px] d:w-[350px] border rounded-lg cursor-pointer p:w-auto">
                <img
                  src={`${IcoUrl ? IcoUrl : TradeMarkData.websiteIco}`}
                  alt="logo"
                  className="object-contain p-2"
                />

                <input
                  type="file"
                  className="w-0 h-0"
                  onChange={(e) => HandleUploadImage(e, "trademark", "ico")}
                />
              </div>
            </label>

            {IcoUrl ? (
              <div className="w-full justify-center flex">
                <button
                  className="hover:bg-[#bb86fc37] hover:text-[#BB86FC] text-[#fc7474] bg-[#fc747443] px-3 py-2 rounded-xl mt-3 "
                  onClick={() => HandleUpdate(4)}
                >
                  Cập nhật
                </button>
              </div>
            ) : (
              <p className="text-white italic text-[13px] mt-2">
                Nhấp vào logo để tải hình ảnh lên{" "}
                <strong className="text-redPrimmary">(*)</strong>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trademark;
