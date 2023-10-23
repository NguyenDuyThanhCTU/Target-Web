"use client";
import { useData } from "@context/DataProviders";
import React, { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slide = () => {
  const { Introduction, TradeMarkData } = useData();
  const [ListPersona, setListPersona] = useState<any>([]);
  const [listAchievements, setListAchievements] = useState<any>([]);

  useEffect(() => {
    const newListPersona = Introduction.filter(
      (item: any) => item.type === "Thành tựu"
    );
    setListPersona(newListPersona);

    const newlistAchievements = Introduction.filter(
      (item: any) => item.type === "Danh hiệu"
    );
    setListAchievements(newlistAchievements);
  }, [Introduction]);

  return (
    <div className="flex flex-col justify-center items-center font-LexendDeca">
      <div className="w-full">
        <div className="flex items-center justify-start gap-2 ">
          <div className="h-1 w-[70px] bg-[#40b2b5] d:block p:hidden"></div>
          <h3 className="text-[44px] font-normal uppercase text-center">
            Thành tựu cá nhân
          </h3>
        </div>
      </div>

      {/* <-- FirstCard --> */}
      <div className="d:w-[1150px] d:h-[1000px] p:w-screen p:h-auto rounded-xl bg-white mt-20">
        <div className="d:p-6 p:p-2 flex items-center justify-center ">
          <Swiper
            slidesPerView={1}
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper "
          >
            {ListPersona?.map((items: any, idx: number) => (
              <SwiperSlide key={idx}>
                <div className=" ">
                  <img
                    src={items.image}
                    alt="slide"
                    className=" d:w-[1100px] d:h-[688px] p:w-auto p:h-auto
                  rounded-xl
                  object-contain

                  "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="d:p-10 p:p-2 flex d:gap-20 p:gap-5 d:flex-row p:flex-col">
          <div className="text-[14px]">
            <div className="border rounded-xl">
              <div className="flex flex-col justify-between">
                <div className="flex p-5  justify-between">
                  <p className="">Năm thành lập</p>
                  <span className=""></span>
                  <p className="">{TradeMarkData.websiteFounding}</p>
                </div>

                <div className="flex p-5 justify-between gap-10 border-t">
                  <p>Thời gian thành lập</p>
                  <span className=""></span>
                  <p className="">hi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <h3 className="text-[30px]">{TradeMarkData.websiteName}</h3>
            <p className="text-gray-500 ">
              <span className="font-semibold text-black">Trình độ:</span> hi
            </p>
            <p className="text-gray-500 ">
              <span className="font-semibold text-black">
                Lĩnh vực hoạt động:
              </span>{" "}
              {TradeMarkData.websitefield}
            </p>
            <span className="font-semibold text-black">
              Vị trí và chức vụ hiện tại:
            </span>
            <div className="flex gap-5">
              <div className="">
                <p className="text-[13px] py-2 px-4 bg-gray-200 rounded-full flex items-center">
                  <BsDot className="text-[15px] text-gray-500" />
                  Chuyên viên tư vấn tài chính
                </p>
              </div>
              <div>
                <p className="text-[13px] py-2 px-4 bg-gray-200 rounded-full flex items-center">
                  <BsDot className="text-[15px] text-gray-500" />
                  Quản lý kinh doanh và phát triển nguồn nhân lực
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <-- SecondCard --> */}
      <div className=" rounded-xl bg-white my-20 d:w-[1150px] d:h-[1000px] p:w-screen p:h-auto">
        <div className="d:p-6 p:p-2  flex items-center justify-center">
          <Swiper
            slidesPerView={1}
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {listAchievements?.map((items: any, idx: number) => (
              <SwiperSlide key={idx}>
                <div className=" ">
                  <img
                    src={items.image}
                    alt="slide"
                    className="w-[1100px] h-[688px]
                  rounded-xl
                  object-contain
                  "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div></div>
        </div>
        <div className="d:p-10 p:p-2 flex d:gap-20 p:gap-5 d:flex-row p:flex-col">
          <div className="text-[14px]">
            <div className="border rounded-xl">
              <div className="flex flex-col justify-between">
                <div className="flex p-5  justify-between">
                  <p className="">Năm thành lập</p>
                  <span className=""></span>
                  <p className="">{TradeMarkData.websiteFounding}</p>
                </div>

                <div className="flex p-5 justify-between gap-10 border-t">
                  <p>Thời gian thành lập</p>
                  <span className=""></span>
                  <p className="">hi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[32px] font-light uppercase">
              Các <strong className="font-semibold uppercase">danh hiệu</strong>{" "}
              đã đạt được <br />
              trong những năm qua
            </h3>

            <div className="overflow-y-scroll flex flex-col h-[100px] gap-3 shadow-lg p-2 border">
              <div className="flex gap-5 ">
                <div className="">
                  <p className="text-[13px] py-2 px-4 bg-gray-200 rounded-full flex items-center">
                    <BsDot className="text-[15px] text-gray-500" />
                    MDRT(CLB Bàn Tròn Triệu Đô Châu Á)
                  </p>
                </div>
                <div>
                  <p className="text-[13px] py-2 px-4 bg-gray-200 rounded-full flex items-center">
                    <BsDot className="text-[15px] text-gray-500" />
                    Pru Elite (Tư vấn viên Xuất sắc)
                  </p>
                </div>
              </div>
              <div className="flex gap-5 ">
                <div className="">
                  <p className="text-[13px] py-2 px-4 bg-gray-200 rounded-full flex items-center">
                    <BsDot className="text-[15px] text-gray-500" />
                    Life Club (Đại sứ Bảo vệ Tổ ấm)
                  </p>
                </div>
                <div>
                  <p className="text-[13px] py-2 px-4 bg-gray-200 rounded-full flex items-center">
                    <BsDot className="text-[15px] text-gray-500" />
                    Pru Service Mark (Hiệp sĩ Bảo vệ)
                  </p>
                </div>
              </div>
              <div className="flex gap-5 ">
                <div className="">
                  <p className="text-[13px] py-2 px-4 bg-gray-200 rounded-full flex items-center">
                    <BsDot className="text-[15px] text-gray-500" />
                    Pru Champion (Nhà Quản lý xuất sắc)
                  </p>
                </div>
                <div>
                  <p className="text-[13px] py-2 px-4 bg-gray-200 rounded-full flex items-center">
                    <BsDot className="text-[15px] text-gray-500" />
                    Alpha Leader (Nhà Quản lý Tiên phong)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
