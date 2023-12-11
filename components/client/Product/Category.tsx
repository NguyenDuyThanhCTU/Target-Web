"use client";
import { TypeProductItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import React from "react";
import { FaAngleLeft, FaAngleRight, FaCaretRight } from "react-icons/fa";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";
import moment from "moment";
import Link from "next/link";

const Category = () => {
  const [show, setShow] = React.useState<any>(0);
  const { productTypes, Posts, Products } = useData();
  const HandleShow = (idx: number) => {
    if (show === idx) {
      setShow(0);
    } else {
      setShow(idx);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <div className="w-full">
          <div className="bg-mainorange flex gap-3 justify-start items-center text-white w">
            <div className="h-14 w-1 bg-black"></div>
            <div className="text-[20px]">
              <IoIosMenu />
            </div>
            <div className="uppercase font-normal">Danh mục sản phẩm</div>
          </div>
          <div className="w-full flex  flex-col">
            {TypeProductItems.map((item: any, idx: number) => {
              const sort = productTypes.filter(
                (type: any) => type.parent === item.label
              );

              return (
                <div key={idx}>
                  <div
                    key={idx}
                    className="flex justify-between items-center py-3 bg-gray-100 border-b text-black cursor-pointer hover:bg-gray-200"
                  >
                    <Link
                      href={`/san-pham/${item.value}`}
                      className="flex items-center ml-3 gap-2"
                    >
                      <FaCaretRight />
                      <span className="font-semibold">{item.label}</span>
                    </Link>
                    {sort.length > 0 && (
                      <div className="mr-2" onClick={() => HandleShow(idx + 1)}>
                        <IoIosArrowDown />
                      </div>
                    )}
                  </div>
                  {sort.length > 0 && (
                    <div
                      className={`${show === idx + 1 ? "block" : "hidden"} `}
                    >
                      {sort.map((item: any, idx: number) => (
                        <Link
                          href={`/san-pham/${item.parentUrl}?type=${item.typeUrl}`}
                          className={`py-2 pl-8 cursor-pointer hover:bg-gray-100 flex flex-col`}
                          key={idx}
                        >
                          {item.type}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full ">
          <div className="flex items-center justify-between border-b border-black cursor-pointer">
            <h2 className="border-b-2 py-2  border-mainorange font-semibold text-[18px] text-mainorange hover:border-maingreen hover:text-maingreen duration-300 ">
              Sản phẩm mới nhất
            </h2>
            <div className="flex items-center ">
              <div className=" p-2 hover:bg-maingreen hover:text-white duration-300">
                <FaAngleLeft />
              </div>
              <div className=" p-2 hover:bg-maingreen hover:text-white duration-300">
                <FaAngleRight />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-50">
          <div className="p-2  flex flex-col gap-5">
            {Products.slice(0, 5).map((item: any, idx: number) => (
              <Link
                href={`/chi-tiet-san-pham/${item.url}?level=${item.level}&pId=${item.pId}`}
                key={idx}
                className="grid grid-cols-3 gap-5 cursor-pointer hover:shadow-lg "
              >
                <div className="p-2">
                  <img src={item.image} alt="product" />
                </div>
                <div className="col-span-2">
                  <div>{item.title}</div>
                  <div className="text-mainorange font-semibold">Chi tiết</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full pb-10">
          <div className="flex items-center justify-between border-b border-black cursor-pointer">
            <h2 className="border-b-2 py-2  border-mainorange font-semibold text-[18px] text-mainorange hover:border-maingreen hover:text-maingreen duration-300 ">
              TIN TỨC
            </h2>
          </div>
          <div className="border mt-5">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              slidesPerView={1}
              slidesPerGroup={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <div>
                {Posts.map((item: any, idx: number) => {
                  const content = item?.content;
                  const maxLength = 150;

                  const truncatedContent = content
                    ? content.substring(0, maxLength)
                    : "";

                  const markup = { __html: truncatedContent };
                  const DetailPostDate = moment
                    .unix(item.createdAt.seconds)
                    .format("MMMM DD, YYYY");
                  return (
                    <SwiperSlide key={idx}>
                      <Link
                        href={`/bai-viet/${item.topicurl}`}
                        className="cursor-pointer  "
                      >
                        <div className="h-[145px] w-full overflow-hidden">
                          <img
                            src={item.image}
                            alt="post"
                            className="object-contain h-full w-full hover:scale-110 duration-300"
                          />
                        </div>
                        <div className="py-2 px-3 mt-2">
                          <div className="font-semibold  ">{item.topic}</div>
                          <div className="flex py-1 flex-col">
                            <div className="flex items-center gap-1 text-gray-400 text-[14px]">
                              <AiOutlineUser />
                              <p className="">RunTech+</p>
                            </div>
                            <div className="flex items-center gap-1 text-gray-400 pr-5 text-[14px]">
                              <AiOutlineClockCircle />
                              <p className="">{DetailPostDate}</p>
                            </div>
                            {/* <div className="h-full w-1"></div> */}
                          </div>
                          <div
                            dangerouslySetInnerHTML={markup}
                            className="text-[15px] truncate3"
                          ></div>
                          <div className="text-redPrimmary  font-normal hover:scale-105 duration-300  cursor-pointer">
                            [Đọc tiếp...]
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
