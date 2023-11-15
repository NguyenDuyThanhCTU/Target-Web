"use client";
import {
  ProductLimitCoinItems,
  ProductLimitRoadItems,
  ProductLimitSpeedItems,
} from "@assets/item";
import { useData } from "@context/DataProviders";
import { Checkbox, Radio, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useParams, useRouter } from "next/navigation";
import { useStateProvider } from "@context/StateProvider";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export const SortProduct = ({ Sort }: any) => {
  const [SpeedFilter, setSpeedFilter] = useState<any>();
  const [RoadFilter, setRoadFilter] = useState<any>();
  const [CoinFilter, setCoinFilter] = useState<any>();
  const { Products } = useData();
  const params = useParams();
  const router = useRouter();
  const { OpenCart } = useStateProvider();

  useEffect(() => {
    if (SpeedFilter) {
      Sort({ KeySort: `${SpeedFilter}`, type: "Tốc độ tối đa" });
    }
  }, [SpeedFilter]);

  useEffect(() => {
    if (RoadFilter) {
      Sort({ KeySort: `${RoadFilter}`, type: "Quãng đường tối đa" });
    }
  }, [RoadFilter]);

  useEffect(() => {
    if (CoinFilter) {
      Sort({ KeySort: `${CoinFilter}`, type: "Hiệu suất nhận coin" });
    }
  }, [CoinFilter]);

  return (
    <div className="flex flex-col gap-10 ">
      <div>
        <h2 className="text-[20px] w-max font-normal  flex items-center gap-3">
          <span>Tốc độ tối đa</span>
          <Tooltip
            color="blue"
            title="Giày có khả năng tăng giới hạn tốc độ tối đa mà người dùng có thể đạt được trong một khoản thời gian. Nâng cấp giày có thể giúp đạt được giới hạn tốc độ cao hơn."
          >
            <AiOutlineQuestionCircle />
          </Tooltip>
        </h2>
        <div className="flex flex-col mt-3 font-normal  gap-1">
          <Radio.Group
            onChange={(e) => setSpeedFilter(e.target.value)}
            value={SpeedFilter}
          >
            <div className="flex flex-col gap-2">
              {ProductLimitSpeedItems.map((item: any, idx) => (
                <Radio
                  key={idx}
                  // onChange={(e) => }
                  value={item.value}
                  className="text-gray-500 "
                >
                  {item.label}
                </Radio>
              ))}
            </div>
          </Radio.Group>
        </div>
      </div>
      <div>
        <h2 className="text-[20px] w-max font-normal  flex items-center gap-3">
          <span>Quãng đường tối đa</span>
          <Tooltip title="Giày có thể giới hạn quãng đường tối đa trong một phiên chạy. Có thể nâng cấp để tăng giới hạn">
            <AiOutlineQuestionCircle />
          </Tooltip>
        </h2>
        <div className="flex flex-col mt-3 font-normal gap-1">
          <Radio.Group
            onChange={(e) => setRoadFilter(e.target.value)}
            value={RoadFilter}
          >
            <div className="flex flex-col gap-2">
              {ProductLimitRoadItems.map((item: any, idx) => (
                <Radio key={idx} value={item.value} className="text-gray-500 ">
                  {item.label}
                </Radio>
              ))}
            </div>
          </Radio.Group>
        </div>
      </div>
      <div>
        <h2 className="text-[20px] w-max font-normal  flex items-center gap-3">
          <span>Hiệu suất nhận coin</span>
          <Tooltip title="Sau mỗi phiên chạy bạn sẽ nhận được coin tương ứng. Có thể nâng cấp để tăng hiệu suất nhận được coin sau mỗi phiên chạy">
            <AiOutlineQuestionCircle />
          </Tooltip>
        </h2>
        <div className="flex flex-col mt-3 font-normal gap-1">
          <Radio.Group
            onChange={(e) => setCoinFilter(e.target.value)}
            value={CoinFilter}
          >
            <div className="flex flex-col gap-2">
              {ProductLimitCoinItems.map((item: any, idx) => (
                <Radio key={idx} value={item.value} className="text-gray-500 ">
                  {item.label}
                </Radio>
              ))}
            </div>
          </Radio.Group>
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

export const FilterProduct = ({ filter }: any) => {
  const sortItem = [
    {
      label: "Mới nhất",
      value: "newest",
    },
    {
      label: "Giá: Giảm dần",
      value: "lowest",
    },
    {
      label: "Giá: Tăng dần",
      value: "highest",
    },
    {
      label: "Tên: A-Z",
      value: "nameaz",
    },
    {
      label: "Tên: Z-A",
      value: "nameza",
    },
    {
      label: "Cũ nhất",
      value: "oldest",
    },
    {
      label: "Bán chạy nhất",
      value: "bestseller",
    },
  ];
  return (
    <>
      <select
        className="outline-none pr-10 border-b py-1 text-black bg-gray-100  border-black  "
        onChange={(e: any) => filter(e.target.value)}
      >
        {sortItem.map((item, idx) => (
          <option key={idx} className=" font-extralight" value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </>
  );
};
