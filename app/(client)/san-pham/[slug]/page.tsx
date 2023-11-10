import {
  FilterProduct,
  SortProduct,
} from "@components/client/Product/SortProduct";
import ThemeLayout from "@components/items/ThemeLayout";
import {
  getDataBySortProps,
  getDataByTypeProps,
} from "@components/lib/get-data";
import React from "react";

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // console.log(searchParams, params);
  let Data: any = [];

  if (
    Object.keys(searchParams).length !== 0 &&
    Object.keys(params).length !== 0
  ) {
    if (params.slug === "tat-ca") {
      for (const key in searchParams) {
        if (key === "level") {
          const value: any = searchParams[key]?.toString();
          Data = await getDataByTypeProps("products", "level", value);
        }
        if (key === "option") {
          const value: any = searchParams[key]?.toString();
          Data = await getDataByTypeProps("products", "option", value);
        }
      }
    } else {
      for (const key in searchParams) {
        if (key === "level") {
          const value: any = searchParams[key]?.toString();
          const paramsSlug = params.slug;
          Data = await getDataBySortProps(
            "products",
            "level",
            value,
            "parent",
            paramsSlug
          );
        }
        if (key === "option") {
          const value: any = searchParams[key]?.toString();
          const paramsSlug = params.slug;
          Data = await getDataBySortProps(
            "products",
            "option",
            value,
            "parent",
            paramsSlug
          );
        }
      }
    }
  }
  return (
    <ThemeLayout>
      <div className="w-full h-[45vh] ">
        {/* <img
          src="https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/UI%2Fkanchanara-V9N2JGUx94I-unsplash.jpg?alt=media&token=eaade372-4b31-4107-a21f-93daef8ee806&_gl=1*1k4tk3l*_ga*MTAyMjQwNTAxNS4xNjk4MDI4NjI0*_ga_CW55HF8NVT*MTY5ODA0OTIyMC41LjEuMTY5ODA0OTQ2Mi4yMC4wLjA."
          alt="banner"
          className="w-full h-full object-cover object-center"
        /> */}
      </div>
      <div className="p:w-auto p:mx-2 d:w-[1460px] d:mx-auto">
        <div className="flex flex-col font-LexendDeca font-extralight py-10 ">
          <div className="bg-black text-white border border-white">
            <div className="p-6">
              {/* <h1 className="text-[24px] font-semibold  ">
            {params.slug === "tat-ca"
              ? "Tất cả sản phẩm"
              : ProductSort[0]?.parent}
          </h1> */}
              <p>indian price drop....</p>
            </div>
          </div>
          <div className="w-full justify-between flex pt-10">
            <p>
              <strong>Hiển thị 1-18 </strong>trong 3125125 sản phẩm
            </p>

            <FilterProduct />
          </div>
          <div className="py-5 flex gap-5 d:flex-row p:flex-col">
            <SortProduct />
            <div>
              <div className="grid p:grid-cols-2 d:grid-cols-4 gap-2 bg-gray-200">
                {/* {ProductSort.map((item: any, idx: number) => (
              <div key={idx}>
                <ProductCard Data={item} />
              </div>
            ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeLayout>
  );
};

export default ProductPage;
