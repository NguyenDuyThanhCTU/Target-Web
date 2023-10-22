"use client";
import React, { useState } from "react";

import { FiEdit } from "react-icons/fi";
import { Image, Popconfirm, message, notification } from "antd";
import { MdDeleteForever } from "react-icons/md";
import { useStateProvider } from "@context/StateProvider";
import { useData } from "@context/DataProviders";
import { delDocument } from "@config/Services/Firebase/FireStoreDB";

interface PostData {
  id: string;
  title: string;
  image: string;
  type: string;
  daysSinceCreation: number;
}

const ListPost: React.FC = () => {
  const { setIsRefetch, setDropDown } = useStateProvider();
  const [isOption, setIsOption] = useState<number>(0);
  const { Posts, setUpdateId } = useData();

  const HandleDelete = (id: string): void => {
    delDocument("posts", id).then(() => {
      notification.success({
        message: "Thành công",
        description: `Bài viết đã được xóa !`,
      });
    });
    setIsRefetch("CRUD posts");
    setIsOption(0);
  };

  const HandleOption = (idx: number): void => {
    if (idx === isOption) {
      setIsOption(0);
    } else {
      setIsOption(idx);
    }
  };

  const HandleEdit = (id: string): void => {
    setUpdateId(id);
    setDropDown("add-post");
    setIsOption(0);
  };

  return (
    <div className="flex-[65%]  border rounded-xl flex flex-col gap-10">
      <div className=" rounded-xl m-5 h-[400px] overflow-y-scroll">
        <div className="grid grid-cols-4 pb-5 border-b mr-2">
          <p>STT</p>
          <p>Tiêu đề</p>
          <p>hình ảnh</p>
        </div>

        {Posts?.filter(
          (item: any) =>
            item.url === "cong-trinh-thuc-te" || item.url === "dich-vu"
        ).map((data: PostData, idx: number) => {
          return (
            <div key={data.id} className="grid cols-4 py-4   items-center">
              <p>{idx + 1}</p>

              <p className="truncate ">{data.title}</p>

              <Image
                className="  w-14 h-14 rounded-lg object-cover"
                src={data.image}
              />

              <div className="flex gap-5 items-center">
                <div>
                  {data.daysSinceCreation > 0 ? (
                    <div>
                      <p className="text-[12px] w-[85px] truncate  py-1 border px-2 rounded-3xl text-orange-300 border-orange-300">
                        {data.daysSinceCreation} ngày trước
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

                <div className=" relative ml-5 ">
                  <FiEdit
                    className="text-red-600 hover:scale-125 duration-300 cursor-pointer"
                    onClick={() => HandleOption(idx + 1)}
                  />
                  {isOption === idx + 1 && (
                    <div className="w-[80px] bg-white opacity-90 absolute -top-2 h-8 right-10 rounded-lg  ">
                      <div className="mx-3 flex  justify-between text-[24px] h-full items-center ">
                        <FiEdit
                          className="text-green-600 hover:scale-125 duration-300"
                          onClick={() => {
                            HandleEdit(data.id);
                          }}
                        />
                        <Popconfirm
                          title="Xóa sản phẩm"
                          description="Bạn muốn xóa sản phẩm này?"
                          onConfirm={() => {
                            HandleDelete(data.id);
                          }}
                          onCancel={() => {
                            message.error("Sản phẩm chưa được xóa!");
                          }}
                          okText="Yes"
                          okType="danger"
                          cancelText="No"
                        >
                          <MdDeleteForever className="text-red-600 hover:scale-125 duration-300" />
                        </Popconfirm>
                      </div>
                      <div className="absolute bg-none w-3 h-8 top-0 -left-2"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListPost;
