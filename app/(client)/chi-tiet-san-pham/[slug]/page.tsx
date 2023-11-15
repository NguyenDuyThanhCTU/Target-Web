import ProductDetail from "@components/client/Product/ProductDetail";
import {
  getDataBySortProps,
  getDataByTypeProps,
} from "@components/lib/get-data";
import React from "react";

const ProductDetailPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  let Data: any;
  if (searchParams.level === "") {
    Data = await getDataByTypeProps("products", "url", params.slug);
  } else {
    Data = await getDataBySortProps(
      "products",
      "url",
      params.slug,
      "level",
      searchParams.level
    );
  }
  console.log(Data);
  return (
    <div>
      <ProductDetail DbData={Data[0]} />
    </div>
  );
};

export default ProductDetailPage;
