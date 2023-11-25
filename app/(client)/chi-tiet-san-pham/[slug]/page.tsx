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
  let Data: any = await getDataByTypeProps("products", "url", params.slug);

  if (searchParams.level !== "") {
    Data.filter((item: any) => item.level === searchParams.level);
  }
  console.log(Data);
  return (
    <div>
      <ProductDetail DbData={Data[0]} />
    </div>
  );
};

export default ProductDetailPage;
