"use client";
import React, { useEffect, useState } from "react";
import { FilterProduct, SortProduct } from "./SortProduct";
import { useSmartContract } from "@context/ContractProviders";
import ProductCard from "./ProductCard";
import { Pagination, PaginationProps } from "antd";
import { useData } from "@context/DataProviders";

const DisplayProduct = ({ Data, Parent, Children, Type }: any) => {
  const [shoes, setshoes] = useState<any>([]);
  const [ProductSort, setProductSort] = useState<any>([]);
  const [KeyFilter, setKeyFilter] = useState<any>();
  const [KeySort, setKeySort] = useState<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const { Shoes } = useSmartContract();
  useEffect(() => {
    const sort = Shoes?.sort((a: any, b: any) => {
      return b.pId - a.pId;
    });
    const productsort = Shoes?.slice(0, 20).sort((a: any, b: any) => {
      return b.pId - a.pId;
    });
    setProductSort(productsort);
    setshoes(sort);
  }, [Shoes]);

  useEffect(() => {
    if (KeyFilter === "oldest") {
      const sort = shoes?.sort((a: any, b: any) => {
        return b.pId - a.pId;
      });
      setshoes(sort);
    } else if (KeyFilter === "newest") {
      const sort = shoes?.sort((a: any, b: any) => {
        return a.pId - b.pId;
      });
      setshoes(sort);
    } else if (KeyFilter === "lowest") {
      const sort = shoes?.sort((a: any, b: any) => {
        return a.price - b.price;
      });
      setshoes(sort);
    } else if (KeyFilter === "highest") {
      const sort = shoes?.sort((a: any, b: any) => {
        return b.price - a.price;
      });
      setshoes(sort);
    } else if (KeyFilter === "nameaz") {
      const sort = shoes?.sort((a: any, b: any) => {
        const firstCharA = a.name.charAt(0).toLowerCase();
        const firstCharB = b.name.charAt(0).toLowerCase();
        return firstCharA.localeCompare(firstCharB);
        // return a.name.localeCompare(b.name);
      });
      setshoes(sort);
    } else if (KeyFilter === "nameza") {
      const sort = shoes?.sort((a: any, b: any) => {
        const firstCharA = a.name.charAt(0).toLowerCase();
        const firstCharB = b.name.charAt(0).toLowerCase();

        return firstCharB.localeCompare(firstCharA);
        // return b.name.localeCompare(a.name);
      });
      setshoes(sort);
    } else if (KeyFilter === "bestseller") {
      const sort = shoes?.sort((a: any, b: any) => {
        return b.sold - a.sold;
      });
      setshoes(sort);
    }
  }, [KeyFilter]);

  useEffect(() => {
    if (KeySort?.type === "Tốc độ tối đa") {
      const sort = ProductSort.filter(
        (item: any) => item.limitspeed === KeySort.value
      );
      setProductSort(sort);
    }
    if (KeySort?.type === "Quãng đường tối đa") {
      const sort = ProductSort.filter(
        (item: any) => item.limitdistance === KeySort.value
      );
      setProductSort(sort);
    }
    if (KeySort?.type === "Hiệu suất nhận coin") {
      const sort = ProductSort.filter(
        (item: any) => item.limitcoinearning === KeySort.value
      );
      setProductSort(sort);
    }
  }, [KeySort]);

  const onChange: PaginationProps["onChange"] = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //create handle pagination
  useEffect(() => {
    const indexOfLastPost = currentPage * 20;
    const indexOfFirstPost = indexOfLastPost - 20;
    const currentPosts = shoes.slice(indexOfFirstPost, indexOfLastPost);
    setProductSort(currentPosts);
  }, [currentPage]);

  const [Topic, setTopic] = React.useState<any>("");

  const { productTypes, Products } = useData();

  useEffect(() => {
    if (Type !== undefined) {
      const topic = productTypes.find((item: any) => item.typeUrl === Type);
      if (topic) {
        setTopic(topic.type);
      }
    } else if (Children !== undefined) {
      const childTopic = productTypes.find((item: any) =>
        item.children.some((child: any) => child.childrenUrl === Children)
      );
      if (childTopic) {
        const topic = childTopic.children.find(
          (child: any) => child.childrenUrl === Children
        );
        if (topic) {
          setTopic(topic.children);
        }
      }
    } else {
      if (Parent === "giay-toc-do") {
        setTopic("Giày tốc độ");
      }
      if (Parent === "non-vuot-gioi-han") {
        setTopic("Nón vượt giới hạn");
      }
      if (Parent === "ao-thach-thuc") {
        setTopic("Áo thách thức");
      }
      if (Parent === "quan-phong-cach") {
        setTopic("Quần phong cách");
      }
      const topic = productTypes.find((item: any) => item.parentUrl === Parent);
      if (topic) {
        setTopic(topic.parent);
      }
    }
  }, [Type, Parent, Children, productTypes]);

  return (
    <div>
      <div className="p:w-auto p:mx-2 d:w-[1460px] d:mx-auto">
        <div className="flex flex-col font-LexendDeca font-extralight py-10 ">
          <div className="bg-black text-white border border-white">
            <div className="p-6">
              <p>Tất cả sản phẩm {Topic}</p>
            </div>
          </div>
          <div className="w-full justify-between flex pt-10">
            {Data?.length !== 0 ? (
              <>
                {" "}
                <p>
                  <strong> Tìm thấy {Data?.length} sản phẩm</strong> trong{" "}
                  {Products.length} sản phẩm
                </p>
              </>
            ) : (
              <>
                {" "}
                <p>
                  <strong> Không tìm thấy sản phẩm nào</strong> trong{" "}
                  {Products.length} sản phẩm
                </p>
              </>
            )}

            <FilterProduct filter={setKeyFilter} />
          </div>
          <div className="py-5 flex gap-10 d:flex-row p:flex-col ">
            <SortProduct Sort={setKeySort} />
            <div className="w-full">
              <div className="grid p:grid-cols-2 d:grid-cols-4  gap-10 w-full ">
                {Data?.map((item: any, idx: number) => (
                  <div key={idx}>
                    <ProductCard Data={item} />
                  </div>
                ))}
              </div>
              <div className="w-full flex justify-center my-10">
                {Data?.length > 20 && (
                  <Pagination
                    // showSizeChanger

                    pageSize={20}
                    onChange={onChange}
                    defaultCurrent={1}
                    total={shoes.length}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
