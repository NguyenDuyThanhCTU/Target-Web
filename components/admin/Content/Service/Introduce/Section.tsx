"use client";
import React, { useState } from "react";
import { Empty, notification } from "antd";

import { FaCloudUploadAlt } from "react-icons/fa";
import { uploadImage } from "@components/items/server-items/Handle";
import { useStateProvider } from "@context/StateProvider";
import { addDocument } from "@config/Services/Firebase/FireStoreDB";
import ListImage from "./ListImage";

type ChangeEventType = React.ChangeEvent<HTMLInputElement>;

interface SectionProps {
  name: string;
}

const Section: React.FC<SectionProps> = ({ name }) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [type, setType] = useState<any>();
  const [Data, setData] = useState<string>("");
  const [selected, setSelected] = useState<boolean>(false);
  const { setIsRefetch } = useStateProvider();

  const HandleUploadImage = (e: ChangeEventType, locate: string) => {
    uploadImage(e, locate).then((data: any) => {
      setImageUrl(data);
    });
  };

  const HandleUpdate = () => {
    if (!type) {
      notification.error({
        message: "Lỗi !",
        description: "Vui lòng nhập thông tin trước khi CẬP NHẬT !",
      });
    } else {
      const data = {
        image: `${imageUrl ? imageUrl : Data}`,
        type: type,
      };

      addDocument("introduction", data).then(() => {
        notification["success"]({
          message: "Thành công !",
          description: "Thông tin đã được CẬP NHẬT !",
        });
        setIsRefetch("CRUD slide");
        setSelected(false);
        setImageUrl("");
        setType("");
      });
    }
  };

  const IntroduceItems = [
    {
      label: "Thành tựu",
      value: "thanh-tuu",
    },
    {
      label: "Danh hiệu",
      value: "danh-hieu",
    },
  ];

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
            <div className="shadow-2xl  p:h-auto d:h-[300px]  duration-300">
              <div className="w-auto h-auto flex flex-col gap-3">
                <label className="cursor-pointer bg-[#353535] hover:shadow-gray-700">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col justify-center items-center">
                      <p className="font-bold text-xl">
                        <FaCloudUploadAlt className="text-gray-300 text-6xl" />
                      </p>
                      <p className="text-xl font-semibold">
                        Chọn hình ảnh để tải lên
                      </p>
                    </div>
                  </div>
                  <input
                    type="file"
                    name="upload-video"
                    className="w-0 h-0"
                    onChange={(e) => HandleUploadImage(e, "slides")}
                  />
                </label>
                <div className="flex flex-col gap-2">
                  <label className="text-md font-medium ">Mục bài viết:</label>
                  <select
                    onChange={(e) => setType(e.target.value)}
                    className="outline-none text-black lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
                  >
                    <option> -- Chọn mục bài viết --</option>

                    {IntroduceItems.map((item, idx) => (
                      <option
                        key={idx}
                        className=" outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300"
                        value={item.label}
                      >
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <div className="mb-5 flex  items-center gap-2">
                  <div onClick={() => setSelected(true)} className="w-full">
                    <input
                      type="text"
                      placeholder="Nhập liên kết hình ảnh"
                      className="py-3 px-4 text-black  border outline-none w-full  "
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
          <ListImage />
        </div>
      </div>
    </div>
  );
};

export default Section;
