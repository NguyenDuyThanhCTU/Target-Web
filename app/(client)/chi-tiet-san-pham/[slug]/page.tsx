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
  if (params.slug && searchParams.level) {
    Data = await getDataBySortProps(
      "products",
      "url",
      params.slug,
      "level",
      searchParams.level
    );
  }
  return (
    <>
      <ProductDetail DbData={Data[0]} />{" "}
    </>
  );
};

export default ProductDetailPage;
