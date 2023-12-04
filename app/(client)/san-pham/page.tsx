import DisplayProducts from "@components/client/Product/DisplayProducts";
import ProductCard from "@components/client/Product/ProductCard";
import { getAllDataProps } from "@components/lib/get-data";
import React from "react";

const DisplayProductPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  let Products = await getAllDataProps("products");
  console.log(Products);
  let Data: any;
  const searchParamsValue: any = searchParams.search;
  if (Object.keys(searchParams).length !== 0) {
    if (Products) {
      Data = Products?.filter((product: any) =>
        product?.title.toLowerCase().includes(searchParamsValue.toLowerCase())
      );
    }
  } else {
    Data === Products;
  }
  return (
    <div className=" ">
      <div className="h-[45vh] w-full"></div>
      {Object.keys(searchParams).length !== 0 ? (
        <>
          <div className="p:w-auto p:mx-2 d:w-[1460px] d:mx-auto">
            <div className="flex flex-col font-LexendDeca font-extralight py-10 ">
              <div className="bg-black text-white border border-white">
                <div className="p-6">
                  <p>
                    Kết quả tìm kiếm cho từ khóa: "
                    <span className="font-bold">{searchParamsValue}</span>"
                  </p>
                </div>
              </div>
              <div className="w-full justify-between flex pt-10">
                <p>
                  <strong>Hiển thị 1-20 </strong>trong {Data?.length} sản phẩm
                </p>
              </div>
              <div className="py-5 flex gap-10 d:flex-row p:flex-col ">
                <div className="w-full">
                  <div className="grid p:grid-cols-2 d:grid-cols-4  gap-10 w-full ">
                    {Data?.map((item: any, idx: number) => (
                      <div key={idx}>
                        <ProductCard Data={item} />
                      </div>
                    ))}
                  </div>
                  <div className="w-full flex justify-center my-10"></div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="p:w-auto p:mx-2 d:w-[1460px] d:mx-auto">
            <div className="flex flex-col font-LexendDeca font-extralight py-10 ">
              <div className="bg-black text-white border border-white">
                <div className="p-6">
                  <p>Tất cả sản phẩm</p>
                </div>
              </div>
              <div className="w-full justify-between flex pt-10">
                <p>
                  <strong>Hiển thị 1-20 </strong>trong {Data?.length} sản phẩm
                </p>
              </div>
              <div className="py-5 flex gap-10 d:flex-row p:flex-col ">
                <div className="w-full">
                  <div className="grid p:grid-cols-2 d:grid-cols-4  gap-10 w-full ">
                    {Data.map((item: any, idx: number) => (
                      <div key={idx}>
                        <ProductCard Data={item} />
                      </div>
                    ))}
                  </div>
                  <div className="w-full flex justify-center my-10"></div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DisplayProductPage;
