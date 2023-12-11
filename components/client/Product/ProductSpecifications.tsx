import React from "react";
import coin from "@assets/animation/coin.json";
import road from "@assets/animation/road.json";
import Lottie from "lottie-react";
import speed from "@assets/animation/speed.json";
import wait from "@assets/animation/wait.json";
import { Tooltip } from "antd";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const ProductSpecifications = ({
  speedString,
  roadString,
  coinString,
  waitString,
}: any) => {
  const Productspecifications = [
    {
      animation: speed,
      topic: "Tốc độ tối đa",
      detail: (
        <p>
          Tốc độ tối đa{" "}
          <span className="text-green-500">+${speedString} km/h</span>
        </p>
      ),
      tooltip:
        "Vật phẩm có khả năng tăng giới hạn tốc độ tối đa mà người dùng có thể đạt được trong một khoản thời gian. Nâng cấp Vật phẩm có thể giúp đạt được giới hạn tốc độ cao hơn.",
    },
    {
      animation: road,
      topic: "Quãng đường tối đa",
      detail: (
        <p>
          Quãng đường mỗi phiên chạy{" "}
          <span className="text-green-500">+${roadString} km </span>
        </p>
      ),
      tooltip:
        "Vật phẩm có thể giới hạn quãng đường tối đa trong một phiên chạy. Có thể nâng cấp để tăng giới hạn",
    },
    {
      animation: coin,
      topic: "Số coin nhận được",
      detail: (
        <p>
          Tỷ lệ coin nhận được sau mỗi phiên chạy{" "}
          <span className="text-green-500">x${coinString} </span>
        </p>
      ),

      tooltip:
        "Sau mỗi phiên chạy bạn sẽ nhận được điểm thưởng tương ứng. Có thể nâng cấp để tăng hiệu suất nhận được điểm thưởng sau mỗi phiên chạy        ",
    },
    {
      animation: wait,
      topic: "Thời gian chờ",
      detail: (
        <p>
          Khoản thời gian chờ sau mỗi phiên chạy{" "}
          <span className="text-green-500">-${waitString} phút</span>
        </p>
      ),

      tooltip:
        "Sau mỗi phiên chạy bạn sẽ có một khoản thời gian chờ trước khi bắt đầu phiên chạy mới. Có thể nâng cấp để rút ngắn thời gian phải chờ đợi sau mỗi phiên chạy",
    },
  ];
  return (
    <>
      {" "}
      <div>
        {Productspecifications.map((item: any, idx: number) => (
          <div key={idx} className="border-b p-2 cursor-default">
            <div className="p-2 grid grid-cols-4 gap-2">
              <Lottie animationData={item.animation} />
              <div className="col-span-3 flex flex-col">
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-[18px]">{item.topic}</h2>
                  <Tooltip title={item.tooltip}>
                    <AiOutlineQuestionCircle />
                  </Tooltip>
                </div>
                <div className="font-light">{item.detail}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductSpecifications;
