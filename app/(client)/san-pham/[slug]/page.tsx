import DisplayProduct from "@components/client/Product/DisplayProduct";
import {
  FilterProduct,
  SortProduct,
} from "@components/client/Product/SortProduct";
import ThemeLayout from "@components/items/ThemeLayout";
import {
  getAllDataProps,
  getDataBySortProps,
  getDataByTypeProps,
} from "@components/lib/get-data";
import React from "react";

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: any };
}) => {
  const searchKeyParams: any = searchParams.search;
  const typeParam: any = searchParams.type;
  let Data: any;

  if (searchKeyParams !== undefined) {
    const allData = await getAllDataProps("products");
    Data = allData?.filter((product: any) =>
      product?.title?.toLowerCase().includes(searchParams?.toLowerCase())
    );
  }
  if (typeParam !== undefined) {
    Data = await getDataByTypeProps("products", "typeUrl", typeParam);
  } else {
    if (params.slug === "tat-ca") {
      Data = await getAllDataProps("products");
    } else {
      Data = await getDataByTypeProps("products", "parentUrl", params.slug);
    }
  }
  console.log(Data);
  return (
    <ThemeLayout>
      <div className="w-full h-[45vh] ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/2.jpg?alt=media&token=471c1e7b-efb1-463a-9a34-818527d17791"
          alt="banner"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <DisplayProduct
        Data={Data}
        Parent={params.slug}
        SearchKey={searchKeyParams}
        Type={typeParam}
      />
    </ThemeLayout>
  );
};

export default ProductPage;
