"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import iconCoin from "@assets/animation/coin-icon.json";
import Lottie from "lottie-react";

import { FaEthereum } from "react-icons/fa";
import { useData } from "@context/DataProviders";
import { Modal } from "antd";
import { useStateProvider } from "@context/StateProvider";
const SimilarProductCard = ({ item, type, Data }: any) => {
  const { currentUser, setBill, Bill } = useData();
  const { setLoginState } = useStateProvider();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const HandleNavigate = (Url: any, Level: any, pId: any) => {
    router.push(`/chi-tiet-san-pham/${Url}?level=${Level}&pId=${pId}`);
  };

  const priceString = `${item.price}`;
  const price = priceString.slice(0, -16);
  const levelString = `${item.level}`;
  const level = levelString.slice(0, -18);
  const speedString = `${Data?.limitspeed}`;
  const roadString = `${Data?.limitdistance}`;
  const coinString = `${Data?.limitcoinearning}`;
  const waitString = `${Data?.limittime}`;
  let sort: any = currentUser?.productscollection;

  const HandleLogin = () => {
    setLoginState(true);
    setIsModalOpen(false);
  };

  const HandleUpdate = () => {
    if (currentUser) {
      if (!sort?.some((item: any) => item === Data.id)) {
        const OrderData = {
          id: currentUser.id,
          image: Data.image,
          name: currentUser.displayName,
          address: currentUser.address,
          email: currentUser.email,
          phone: currentUser.phone,
          productscollection: [...currentUser.productscollection],
          productId: Data.id,
          level: Data.level,
          limitcoinearning: coinString,
          limitdistance: roadString,
          limitspeed: speedString,
          limittime: waitString,
          pId: item.pId,
          price: `0.0${price}`,
        };
        setBill(OrderData);
        router.push(`/thanh-toan`);
        console.log("thanhtoan");
      }
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div>
      {" "}
      {type === "upgrade" ? (
        <div className="flex gap-3 py-3 border-b cursor-pointer hover:bg-gray-100">
          <div className="flex-[30%]">
            <img src={item.image} alt="similarProduct" />
          </div>
          <div className="flex-[60%] ">
            <div>
              <h3 className="truncate1">
                {item.name} - cấp {level}
              </h3>

              <div className="flex items-center ">
                <div className="w-10">
                  <Lottie animationData={iconCoin} />
                </div>
                <span className="text-red-500">0.0{price} SepoliaETH</span>
              </div>
              <div className="flex flex-col">
                <p>
                  {" "}
                  Tốc độ tối đa:{" "}
                  <span className="text-green-500">+${speedString} km/h </span>
                </p>
                <p>
                  {" "}
                  Quãng đường tối đa :{" "}
                  <span className="text-green-500">+${roadString} km </span>
                </p>
                <p>
                  {" "}
                  Số coin nhận được:{" "}
                  <span className="text-green-500">
                    +${coinString} SepoliaETH{" "}
                  </span>
                </p>
                <p>
                  {" "}
                  Thời gian chờ:{" "}
                  <span className="text-green-500">+${waitString} phút </span>
                </p>
              </div>
              <div className="flex mt-2">
                {sort?.some((item: any) => item === Data.id) ? (
                  <>
                    {" "}
                    <div className="py-1 px-4 bg-mainred text-orange-500 uppercase  flex gap-2 items-center text-[15px]">
                      Đã sở hữu
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="py-1 px-4 bg-mainred text-blue-500 border duration-300 hover:text-white border-blue-500 flex gap-2 items-center text-[15px]"
                      onClick={() => HandleUpdate()}
                    >
                      Nâng cấp ngay
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex gap-3 py-3 border-b cursor-pointer hover:bg-gray-100"
          onClick={() => HandleNavigate(item.url, level, item.pId)}
        >
          <div className="flex-[30%]">
            <img src={item.image} alt="similarProduct" />
          </div>
          <div className="flex-[60%]">
            <h3 className="truncate1">
              {item.name} - cấp {level}
            </h3>

            <div className="flex items-center ">
              <div className="w-10">
                <Lottie animationData={iconCoin} />
              </div>
              <span className="text-red-500">0.0{price} SepoliaETH</span>
            </div>
            <div className="flex">
              <div className="py-1 px-4 bg-mainred text-blue-500 flex gap-2 items-center text-[15px]">
                <FaEthereum />
                <span>Chi tiết</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <>
        <Modal
          closable={false}
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
        >
          <div>
            <h2 className="text-[24px] font-semibold">Đến trang đăng nhập</h2>
            <p>Đăng nhập để giao dịch</p>
            <div className="flex w-full justify-center gap-5 mt-5">
              <div
                className="py-2 px-6 rounded-full border border-mainyellow cursor-pointer text-mainyellow duration-300 hover:border-orange-500 hover:text-orange-500"
                onClick={() => setIsModalOpen(false)}
              >
                Hủy
              </div>
              <div
                className="py-2 px-6 rounded-full border border-mainyellow bg-mainyellow text-white duration-300 hover:bg-orange-500 hover:border-orange-500 cursor-pointer"
                onClick={() => HandleLogin()}
              >
                Đăng nhập
              </div>
            </div>
          </div>
        </Modal>
      </>
    </div>
  );
};

export default SimilarProductCard;
