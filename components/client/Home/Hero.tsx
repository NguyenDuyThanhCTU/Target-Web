"use client";
import { useStateProvider } from "@context/StateProvider";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import Lottie from "lottie-react";
import hero from "@assets/animation/hero.json";
import Link from "next/link";

const Hero = () => {
  const { theme } = useStateProvider();
  return (
    <div
      className={`${
        theme === "light"
          ? "  text-black"
          : "bg-black overflow-hidden text-white"
      } h-[80vh] flex items-center duration-300`}
    >
      <div className=" d:w-[1440px]  relative items-start gap-5 p:w-auto d:mx-auto p:mx-2 flex justify-between font-Inter">
        <div className="flex-1 flex flex-col gap-10">
          <h1 className="text-[88px] font-bold leading-[105.6px]">
            New Era Of Technology
          </h1>
          <p className="text-[#7b7b7b] w-[25vw] ">
            Chúng tôi muốn đồng hành cùng bạn trên mỗi hành trình để rèn luyện
            sức khỏe, tìm kiếm những trải nghiệm mới hay thưởng thức những vẻ
            đẹp của thiên nhiên. Chúng tôi có thể giúp bạn thực hiện điều đó chỉ
            trong một ứng dụng
          </p>
          <div className="flex gap-10">
            <div className="py-4 px-8 bg-maingreen text-white rounded-full cursor-pointer hover:bg-green-700 duration-300">
              Tải ứng dụng
            </div>
            <div className="flex gap-3 items-center group cursor-pointer">
              <div className="p-1 bg-maingreen duration-300 group-hover:bg-green-800  text-white rounded-full">
                <BsFillPlayFill />
              </div>
              <Link
                href={`/bai-viet/huong-dan-su-dung`}
                className="group-hover:underline duration-300"
              >
                Hướng dẫn sử dụng?
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-start relative">
          <div className="bg-[rgba(0,0,0,0.54)] bottom-0 text-white rounded-3xl absolute z-20">
            <div className="p-5">
              <div>
                <p className="font-normal">Thông tin</p>
                <p className="text-[20px] font-bold text-maingreen">
                  RunTech Motion+
                </p>
              </div>
              <div className="flex mt-5 gap-5">
                <div>
                  <p className="font-normal">Thời gian</p>
                  <p className="text-[20px] font-bold text-maingreen">2023</p>
                </div>
                <div>
                  <p className="font-normal">Giới hạn</p>
                  <p className="text-[20px] font-bold text-maingreen">N/A</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Lottie animationData={hero} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
