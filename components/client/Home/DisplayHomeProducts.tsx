import React from "react";
import ProductCard from "../Product/ProductCard";
import Link from "next/link";

const DisplayHomeProducts = ({ Data, Topic, Type, url }: any) => {
  return (
    <div className="py-4">
      <div>
        <div className="w-full flex  gap-20 justify-between p:items-start  d:items-center d:flex-row p:flex-col">
          <h2 className="uppercase text-[24px] font-semibold ">{Topic}</h2>
          <div className="flex gap-3 items-center scrollbar-thin overflow-x-auto  scrollbar-thumb-blue-300 scrollbar-track-gray-200">
            {Type.map((item: any, idx: number) => (
              <Link
                href={`/san-pham/${url}?type=${item.typeUrl}`}
                className=" w-max border px-4 py-1 text-black border-black cursor-pointer hover:bg-gray-100 duration-300 rounded-full"
                key={idx}
              >
                <p className=" w-max">{item.type}</p>
              </Link>
            ))}
            <Link
              href={`/san-pham/${url}`}
              className="border px-4 py-1 text-black border-black cursor-pointer hover:bg-gray-100 duration-300 rounded-full"
            >
              <p className=" w-max">Tất cả</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid p:grid-cols-2 d:grid-cols-5 gap-2 mt-4">
        {Data.map((item: any, idx: number) => (
          <ProductCard Data={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default DisplayHomeProducts;
