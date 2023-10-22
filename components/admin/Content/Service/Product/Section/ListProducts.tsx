"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper/modules";

import { Drawer, Modal } from "antd";
import { AiOutlineCloudUpload } from "react-icons/ai";

import ListProduct from "./ListTypes";
import Table from "../../../../Item/Table";
import EditProduct from "../../../../Item/DropDownItem/EditProduct";
import UpdateProduct from "../../../../Item/DropDownItem/UpdateProduct";
import { useStateProvider } from "@context/StateProvider";
import { useData } from "@context/DataProviders";

const ListProducts: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setDropDown } = useStateProvider();
  const { Products } = useData();

  return (
    <div className="rounded-xl">
      <div className="p-4 flex gap-5 border flex-col">
        <div className="flex items-center justify-start gap-2 ">
          <div className="h-1 w-[70px] bg-[#40b2b5] d:block p:hidden"></div>
          <h3 className="text-[24px] font-normal uppercase text-center">
            Thêm sản phẩm
          </h3>
        </div>
        <div className="flex gap-5 d:flex-row p:flex-col">
          <div className="grid grid-cols-1 d:grid-cols-2 gap-10 cursor-pointer p:h-auto d:h-[550px] p-5 border">
            <div className="shadow-2xl bg-[#353535] p:h-auto d:h-[300px] hover:shadow-gray-700 duration-300">
              <div className="d:h-[320px] p:h-auto">
                <div className="p-3">
                  <div className="flex justify-between items-center text-[25px] pb-3 flex-col gap-5">
                    <p className="uppercase text-white text-center w-full">
                      Danh sách hình ảnh sản phẩm
                    </p>
                    <div className="p:h-auto d:h-[200px] p:w-[60vw] d:w-full border rounded-2xl">
                      <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        navigation={true}
                        className="mySwiper"
                      >
                        {Products.map((items: any) => (
                          <SwiperSlide key={items.id}>
                            <img
                              src={items.image}
                              alt="banner"
                              className="h-[200px] w-full object-contain p-4"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-gradient-to-r from-gray-600 to-gray-700 rounded-md p-5">
                <div className="ml-3">
                  <h3 className="py-3 text-[25px] font-bold uppercase underline">
                    Thêm sản phẩm
                  </h3>
                </div>
                <div className="mt-3">
                  <div
                    className="flex justify-center items-center gap-2 uppercase py-2 border mx-2 bg-purple hover:bg-purpleAdmin hover:text-purpleHover hover:border-purpleHover text-blueAdmin border-blueAdmin"
                    onClick={() => setDropDown("add-product")}
                  >
                    <AiOutlineCloudUpload className="text-[20px]" />
                    <p>Tải lên</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-2xl bg-[#353535] h-auto hover:shadow-gray-700 duration-300">
              <div className="flex justify-between items-center text-[25px] flex-col gap-5 p-3">
                <p className="uppercase text-white text-center w-full">
                  Danh sách sản phẩm
                </p>
                <div className="h-[400px] w-full border rounded-2xl overflow-y-scroll">
                  <Table
                    Data={Products}
                    del="products"
                    onEdit={setOpen}
                    onUpdate={setIsModalOpen}
                  />
                </div>
              </div>
            </div>
          </div>
          <ListProduct />
        </div>
      </div>
      <>
        <Drawer
          title="Chỉnh sửa sản phẩm"
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
          width={800}
        >
          <EditProduct />
        </Drawer>
      </>
      <>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          centered={true}
          onCancel={() => setIsModalOpen(false)}
          width={1500}
        >
          <UpdateProduct />
        </Modal>
      </>
    </div>
  );
};

export default ListProducts;
