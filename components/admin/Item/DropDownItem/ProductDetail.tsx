"use client";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const ProductDetail: React.FC = () => {
  const { setDropDown } = useStateProvider();
  const { UpdateId, Orders } = useData();
  const [Data, setData] = useState<any>();

  useEffect(() => {
    const order = Orders.filter((item: any) => item.id === UpdateId);
    if (order) {
      setData(order[0]);
    }
  }, [Orders, UpdateId]);

  return (
    <div
      className={`bg-[rgba(0,0,0,0.3)] w-full h-full z-50 absolute rounded-md duration-300`}
    >
      <div className="w-[1500px] h-[700px] absolute bg-white bottom-[15%] left-[12%]  font-LexendDeca cursor-pointer rounded-sm flex  justify-center items-start">
        <div className="flex gap-20 mt-20">
          <div className="flex flex-col gap-5 ">
            <h3 className="text-center text-[32px]">Sản phẩm</h3>
            <div className="flex justify-between">
              <p>Loại pin: {Data?.product.battery}</p>
              <p>Màu xe: {Data?.product.carcolor}</p>
            </div>
            <div className="flex justify-between">
              <p>Số chỗ: {Data?.product.seater}</p>
              <p>Màu mui: {Data?.product.hoodColor}</p>
            </div>
            <p>Kích cỡ xe: {Data?.product.carsize}</p>
            <p>Loại xe: {Data?.product.cartype}</p>
            <img
              src={Data?.product.image}
              alt="hinh anh"
              className="w-[300px]"
            />
          </div>
          <div className="flex flex-col gap-5 ">
            <h3 className="text-center text-[32px]">Khách hàng</h3>
            <p>Tên khách hàng: {Data?.name}</p>

            <p>Chủ sở hữu: {Data?.owner}</p>
            <p>Showroom: {Data?.showroom}</p>

            <p>CMND: {Data?.uid}</p>
            <p>Số điện thoại: {Data?.phone}</p>
            <p>Email: {Data?.email}</p>
            <div className="flex items-center justify-between gap-5">
              <h3>Thời gian đặt hàng:</h3>
              {Data?.daysSinceCreation > 0 ? (
                <div>
                  <p className="text-[12px] w-[85px] truncate  py-1 border px-2 rounded-3xl text-orange-300 border-orange-300">
                    {Data?.daysSinceCreation} ngày trước
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-[12px] w-[65px] truncate  border px-2 py-1 rounded-3xl text-green-300 border-green-300">
                    Bây giờ
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <AiFillCloseCircle
          className="absolute -top-5 -right-5 text-[40px] border-white border-4 bg-black rounded-3xl text-white "
          onClick={() => {
            setDropDown("");
          }}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
