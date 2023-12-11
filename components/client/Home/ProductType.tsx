"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { TypeProductItems } from "@assets/item";
import Link from "next/link";

const ProductType = () => {
  return (
    <div className="pt-10 pb-20">
      <div className="d:w-[1440px]  p:w-auto d:mx-auto flex flex-col justify-center items-center">
        <h2 className="uppercase py-2 border-b border-black text-[30px] font-LexendDeca font-semibold w-full text-center">
          Các dòng sản phẩm
        </h2>
        <div className="w-full mt-16">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            slidesPerGroup={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <div className="flex gap-3">
              {TypeProductItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link href={`/san-pham/${item.value}`}>
                    <div className="border cursor-pointer border-gray-300 rounded-sm shadow-xl shadow-gray-100 bg-gray-100 ">
                      <div className="px-2 py-1 flex flex-col">
                        <div className="m-5 overflow-hidden">
                          <img
                            src={item.image}
                            alt="product type"
                            className="hover:scale-125 duration-1000"
                          />
                        </div>
                        <div className="mt-5 mb-5 font-LexendDeca font-normal  ">
                          <p className="text-center text-[25px] uppercase font-bold">
                            {item.label}
                          </p>
                          <div className="flex w-full justify-center mt-3">
                            <div className="border rounded-full border-blue-400 bg-white overflow-hidden duration-300">
                              <div className="px-10 py-2 text-[18px] text-blue-400 hover:bg-blue-400 hover:text-white duration-300 ">
                                Chi tiết
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductType;
