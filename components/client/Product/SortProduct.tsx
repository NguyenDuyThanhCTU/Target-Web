"use client";
import {
  ProductLimitCoinItems,
  ProductLimitRoadItems,
  ProductLimitSpeedItems,
} from "@assets/item";
import { useData } from "@context/DataProviders";
import { Checkbox, Tooltip } from "antd";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useParams } from "next/navigation";
import { useStateProvider } from "@context/StateProvider";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export const SortProduct = () => {
  const [ProductFunction, setProductFunction] = React.useState<any>("");
  const [ProductPrice, setProductPrice] = React.useState<any>("");
  const [ProductSort, setProductSort] = React.useState<any>([]);
  const { Products } = useData();
  const params = useParams();
  const { OpenCart } = useStateProvider();
  useEffect(() => {
    if (params.slug === "tat-ca") {
      setProductSort(Products);
    } else {
      const sort = Products?.filter(
        (item: any) => item.parentUrl === params.slug
      );
      if (sort) {
        setProductSort(sort);
      }
    }
  }, [Products, params, ProductFunction, ProductPrice]);

  return (
    <div className="flex flex-col gap-10 ">
      <div>
        <h2 className="text-[20px] font-normal  flex items-center gap-3">
          <span>Tốc độ tối đa</span>
          <Tooltip
            color="blue"
            title="Giày có khả năng tăng giới hạn tốc độ tối đa mà người dùng có thể đạt được trong một khoản thời gian. Nâng cấp giày có thể giúp đạt được giới hạn tốc độ cao hơn."
          >
            <AiOutlineQuestionCircle />
          </Tooltip>
        </h2>
        <div className="flex flex-col mt-3 font-normal  gap-1">
          {ProductLimitSpeedItems.map((item: any, idx) => (
            <Checkbox
              key={idx}
              onChange={(e) => setProductFunction(e.target.value)}
              value={item.label}
              className="text-gray-500 "
            >
              {item.label}
            </Checkbox>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-[20px] font-normal  flex items-center gap-3">
          <span>Quãng đường tối đa</span>
          <Tooltip title="Giày có thể giới hạn quãng đường tối đa trong một phiên chạy. Có thể nâng cấp để tăng giới hạn">
            <AiOutlineQuestionCircle />
          </Tooltip>
        </h2>
        <div className="flex flex-col mt-3 font-normal gap-1">
          {ProductLimitRoadItems.map((item: any, idx) => (
            <Checkbox
              key={idx}
              onChange={(e) => setProductPrice(e.target.value)}
              value={item.label}
              className="text-gray-500 "
            >
              {item.label}
            </Checkbox>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-[20px] font-normal  flex items-center gap-3">
          <span>Hiệu suất nhận coin</span>
          <Tooltip title="Sau mỗi phiên chạy bạn sẽ nhận được coin tương ứng. Có thể nâng cấp để tăng hiệu suất nhận được coin sau mỗi phiên chạy">
            <AiOutlineQuestionCircle />
          </Tooltip>
        </h2>
        <div className="flex flex-col mt-3 font-normal gap-1">
          {ProductLimitCoinItems.map((item: any, idx) => (
            <Checkbox
              key={idx}
              onChange={(e) => setProductPrice(e.target.value)}
              value={item.label}
              className="text-gray-500 "
            >
              {item.label}
            </Checkbox>
          ))}
        </div>
      </div>
      {/* <div>
    <h2 className="text-[20px] font-normal  flex items-center gap-3">
      <span>Quãng đường tối đa</span>
      <Tooltip title="Giày có thể giới hạn quãng đường tối đa trong một phiên chạy. Có thể nâng cấp để tăng giới hạn">
        <AiOutlineQuestionCircle />
      </Tooltip>
    </h2>
    <div className="flex flex-col mt-3 font-normal gap-1">
      {ProductLimitRoadItems.map((item: any, idx) => (
        <Checkbox
          key={idx}
          onChange={(e) => setProductPrice(e.target.value)}
          value={item.label}
          className="text-gray-500 "
        >
          {item.label}
        </Checkbox>
      ))}
    </div>
  </div> */}
    </div>
  );
};

export const FilterProduct = () => {
  const sortItem = [
    {
      label: "Mới nhất",
      value: "",
    },
    {
      label: "Giá: Giảm dần",
      value: "",
    },
    {
      label: "Giá: Tăng dần",
      value: "",
    },
    {
      label: "Tên: A-Z",
      value: "",
    },
    {
      label: "Tên: Z-A",
      value: "",
    },
    {
      label: "Cũ nhất",
      value: "",
    },
    {
      label: "Mới nhất",
      value: "",
    },
    {
      label: "Bán chạy nhất",
      value: "",
    },
  ];
  return (
    <>
      <select className="outline-none pr-10 border-b py-1 text-black bg-gray-100  border-black  ">
        {sortItem.map((item, idx) => (
          <option key={idx} className=" font-extralight" value={item.label}>
            {item.label}
          </option>
        ))}
      </select>
    </>
  );
};
