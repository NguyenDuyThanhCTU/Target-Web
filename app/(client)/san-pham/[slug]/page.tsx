import DisplayProducts from "@components/client/Product/DisplayProducts";
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
  const childrenParam: any = searchParams.children;
  const typeParam: any = searchParams.type;
  let Data: any;
  if (childrenParam !== undefined) {
    Data = await getDataByTypeProps("products", "childrenUrl", childrenParam);
  }
  if (typeParam !== undefined) {
    Data = await getDataByTypeProps("products", "typeUrl", typeParam);
  } else {
    Data = await getDataByTypeProps("products", "parentUrl", params.slug);
  }

  console.log(params.slug);
  return (
    <ThemeLayout>
      <div className="w-full h-[45vh] ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/UI%2Fkanchanara-V9N2JGUx94I-unsplash.jpg?alt=media&token=eaade372-4b31-4107-a21f-93daef8ee806&_gl=1*1k4tk3l*_ga*MTAyMjQwNTAxNS4xNjk4MDI4NjI0*_ga_CW55HF8NVT*MTY5ODA0OTIyMC41LjEuMTY5ODA0OTQ2Mi4yMC4wLjA."
          alt="banner"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* <DisplayProducts /> */}
    </ThemeLayout>
  );
};

export default ProductPage;
