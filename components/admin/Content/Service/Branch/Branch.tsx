"use client";
import React from "react";
import { BiPhone, BiMapPin } from "react-icons/bi";

import { notification } from "antd";
import { useStateProvider } from "@context/StateProvider";
import { useData } from "@context/DataProviders";
import { delDocument } from "@config/Services/Firebase/FireStoreDB";

const Branch: React.FC = () => {
  const { setDropDown, setIsRefetch } = useStateProvider();
  const { Branches } = useData();

  const HandleDelete = (id: string): void => {
    delDocument("branches", id).then(() => {
      notification.success({
        message: "Success",
        description: `Yêu cầu của bạn đã được thực hiện thành công !`,
      });
    });
    setIsRefetch("CRUD branches");
  };

  return (
    <div className="h-screen p-h-auto font-Montserrat w-full">
      <div className="flex flex-col gap-5">
        <h3 className="text-[42px] font-light ">Danh sách chi nhánh</h3>

        <div className="font-NunitoSans grid-cols-1 border overflow-y-scroll h-[660px] w-full">
          <div className="grid d-grid-cols-4 gap-5 grid-rows-2 p-2">
            {Branches?.map((items: any, idx: number) => (
              <div className="rounded-sm shadow-2xl border" key={idx}>
                <div className="p-4 flex flex-col justify-between h-full gap-3">
                  <h3 className="font-bold text-[24px] text-content1 py-3 border-b">
                    {items.name}
                  </h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <p className="font-bold">Địa chỉ</p>
                      {items.location && (
                        <>
                          <a
                            href={`https://${items.location}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="flex items-center gap-2 text-blue-500 cursor-pointer">
                              <BiMapPin />
                              <p className="hover:underline">Vị trí</p>
                            </div>
                          </a>
                        </>
                      )}
                    </div>
                    <p className="text-content1 text-[14px]">{items.address}</p>
                    <div className="flex items-center justify-between">
                      <p className="font-bold">Hotline</p>
                      <div className="flex items-center gap-2 text-blue-500 cursor-pointer">
                        <BiPhone />
                        <p className="hover:underline text-[14px]">
                          {items.hotline}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-blue-600 border border-blue-600 text-center py-3 cursor-pointer hover:text-white hover:border-white hover:bg-red-500 uppercase"
                    onClick={() => HandleDelete(items.id)}
                  >
                    Loại bỏ
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="py-5 uppercase text-[22px] text-center cursor-pointer border border-mainblue hover:bg-mainblue text-white "
          onClick={() => setDropDown("add-branch")}
        >
          Thêm chi nhánh
        </div>
      </div>
    </div>
  );
};

export default Branch;
