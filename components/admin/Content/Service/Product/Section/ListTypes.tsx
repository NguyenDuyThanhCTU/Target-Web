"use client";
import { TypeProductItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import React from "react";

const ListType: React.FC = () => {
  const { setDropDown } = useStateProvider();
  const { productTypes } = useData();

  return (
    <div className="d:w-[400px] shadow-2xl bg-[#353535] p:w-auto">
      <div className="p-3">
        <div className="flex justify-between items-center text-[25px] p-3 flex-col gap-3">
          <p className="uppercase text-center w-full from-yellow-400">
            Mục sản phẩm
          </p>
          <div className="h-[400px] p:w-[60vw] d:w-[370px] bg-white text-black overflow-y-auto">
            <div className="p-2">
              {TypeProductItems.map((items, idx) => {
                const children = productTypes.filter(
                  (data: any) => data.parent === items.label
                );

                return (
                  <div key={idx} className="pb-4 border-b border-black">
                    <span className="text-[20px]">{items.label}</span>
                    {children.length > 0 && (
                      <div className="ml-3 indent-2 flex flex-col border-l-2 border-black">
                        {children.map((item: any, idx: any) => (
                          <div key={idx}>
                            {" "}
                            <span className="text-[18px]">{item.type}</span>
                            {item.children.length > 0 && (
                              <div>
                                {item.children.map((data: any, idx: any) => (
                                  <div className="ml-6 indent-2 flex flex-col border-l-2 border-black">
                                    <span className="text-[16px]">
                                      {data.children}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="bg-white text-redPrimmary px-4 py-1 rounded-lg uppercase cursor-pointer hover:scale-110 duration-300"
            onClick={() => setDropDown("add-types")}
          >
            Thêm
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListType;
