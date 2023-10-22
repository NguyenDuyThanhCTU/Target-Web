"use client";
import React, { useState } from "react";
import { Empty, notification } from "antd";
import ListSlide from "./ListSlide/ListSlide";

import { FaCloudUploadAlt } from "react-icons/fa";
import { uploadImage } from "@components/items/server-items/Handle";
import { useStateProvider } from "@context/StateProvider";
import { addDocument } from "@config/Services/Firebase/FireStoreDB";

type ChangeEventType = React.ChangeEvent<HTMLInputElement>;

interface SectionProps {
  name: string;
}

const Section: React.FC<SectionProps> = ({ name }) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [Data, setData] = useState<string>("");
  const [selected, setSelected] = useState<boolean>(false);
  const { setIsRefetch } = useStateProvider();

  const HandleUploadImage = (e: ChangeEventType, locate: string) => {
    uploadImage(e, locate).then((data: any) => {
      setImageUrl(data);
    });
  };

  const HandleUpdate = () => {
    const data = {
      image: `${imageUrl ? imageUrl : Data}`,
    };

    addDocument("slide", data).then(() => {
      notification["success"]({
        message: "Thành công !",
        description: "Thông tin đã được CẬP NHẬT !",
      });
      setIsRefetch("CRUD slide");
      // setSelected(false);
      // setImageUrl("");
    });
  };

  return (
    <div className="rounded-xl">
      <div className="p-4 flex gap-5 border flex-col">
        <div className="flex items-center justify-start gap-2 ">
          <div className="h-1 w-[70px] bg-[#40b2b5] d:block p:hidden"></div>
          <h3 className="text-[24px] font-normal uppercase text-center">
            {name}
          </h3>
        </div>
        <div className="flex gap-5 d:flex-row p:flex-col ">
          <div className="grid d:grid-cols-2 gap-10 cursor-pointer h-[550px] p-5 border p:grid-cols-1 flex-[70%]">
            <div className="shadow-2xl bg-[#353535] p:h-auto d:h-[300px] hover:shadow-gray-700 duration-300">
              <div className="w-auto p:h-auto d:h-[320px]">
                <label className="cursor-pointer">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col justify-center items-center">
                      <p className="font-bold text-xl">
                        <FaCloudUploadAlt className="text-gray-300 text-6xl" />
                      </p>
                      <p className="text-xl font-semibold">
                        Chọn hình ảnh để tải lên
                      </p>
                    </div>
                    <p className="text-gray-400  text-center mt-10 text-sm leading-10">
                      Định dạng jpg hoặc png <br />
                    </p>
                    <p className="bg-[#0047AB] hover:bg-[#0000FF] text-center mt-8 rounded text-white text-md font-medium p-2 w-52 outline-none">
                      Chọn từ thiết bị
                    </p>
                  </div>
                  <input
                    type="file"
                    name="upload-video"
                    className="w-0 h-0"
                    onChange={(e) => HandleUploadImage(e, "slides")}
                  />
                </label>
              </div>
              <div className="ml-3 ">
                <h3 className="py-3 text-[25px] font-bold ">
                  Thay đổi hình ảnh
                </h3>
                <div className="mb-5 flex  items-center gap-2">
                  <div onClick={() => setSelected(true)} className="w-full">
                    <input
                      type="text"
                      placeholder="Nhập liên kết hình ảnh"
                      className="py-3 px-4 text-black  border rounded-full outline-none w-full  "
                      onChange={(e) => setData(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {selected || imageUrl ? (
                <div className="mt-5">
                  <div
                    className="text-center  uppercase py-2 border mx-2 bg-purple hover:bg-purpleAdmin hover:text-purpleHover hover:border-purpleHover text-blueAdmin border-blueAdmin block group-hover:hidden"
                    onClick={() => HandleUpdate()}
                  >
                    Cập nhật
                  </div>
                </div>
              ) : (
                <div className="text-center uppercase py-2 border mx-2 bg-purple  text-gray-400 border-gray-400 block ">
                  Cập nhật
                </div>
              )}
            </div>
            <div className="shadow-2xl bg-[#353535] h-auto hover:shadow-gray-700 duration-300">
              <div className="w-auto h-full">
                {imageUrl ? (
                  <>
                    <img
                      src={imageUrl}
                      alt=""
                      className="w-auto h-full object-cover"
                    />
                  </>
                ) : (
                  <div className="text-white  bg-w w-full flex items-center justify-center h-full">
                    <Empty
                      imageStyle={{ height: 60 }}
                      description={
                        <span className="text-white">
                          Hình ảnh chưa được tải lên
                        </span>
                      }
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <ListSlide />
        </div>
      </div>
    </div>
  );
};

export default Section;
