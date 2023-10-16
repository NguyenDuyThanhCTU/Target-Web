"use client";
import React, { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { notification } from "antd";
import { useStateProvider } from "@context/StateProvider";
import { useData } from "@context/DataProviders";
import { updateDocument } from "@config/Services/Firebase/FireStoreDB";
import TextEditor from "@components/admin/Item/CKEditor/TextEditor";

const AddPost = ({ type }: any) => {
  const [editorData, setEditorData] = useState<string>("");
  const [PostSort, setPost] = useState<any>();
  const { setIsRefetch, setDropDown } = useStateProvider();
  const { UpdateId, News, Gallery, TravelHandbook } = useData();

  const initialEditor = "<p>Bắt đầu nhập ... </p>";

  let Posts: any;

  if (type === "news") {
    Posts = News;
  } else if (type === "gallery") {
    Posts = Gallery;
  } else if (type === "travelHandbook") {
    Posts = TravelHandbook;
  }

  useEffect(() => {
    const sort = Posts?.filter((item: any) => item.id === UpdateId);
    if (sort?.length > 0) {
      setPost(sort[0]);
    }
  }, [Posts, UpdateId]);

  const HandleDiscard = () => {
    setEditorData("");
  };

  const HandleSubmit = () => {
    if (!editorData) {
      notification.error({
        message: "Lỗi !",
        description: "Vui lòng nhập thông tin trước khi TẢI LÊN !",
      });
    } else {
      const data = {
        ...(editorData && { content: editorData }),
      };
      updateDocument(type, UpdateId, data).then(() => {
        notification.success({
          message: "Thành công !",
          description: "Tải lên thành công !",
        });
        HandleDiscard();
        setIsRefetch(`CRUD ${type}`);
        setDropDown("");
      });
    }
  };

  return (
    <div
      className={`bg-[rgba(0,0,0,0.3)] w-full flex items-center justify-center h-full z-50 absolute rounded-md duration-300 `}
    >
      <div className="w-[80vw] h-[75vh] relative bg-white flex font-LexendDeca cursor-pointer rounded-sm ">
        <div className="items-center justify-center  w-full flex  ">
          <div className="flex w-full h-full  justify-center gap-4 flex-col items-center ">
            <p className="text-2xl font-bold text-center mb-5">
              Nội dung bài viết: {PostSort?.title}
            </p>

            <div className=" w-[60vw] mx-auto overflow-y-auto h-[500px] font-LexendDeca font-light">
              <TextEditor
                initialValue={
                  PostSort?.content ? PostSort.content : initialEditor
                }
                onChange={setEditorData}
              />
            </div>

            <div className="flex gap-6 mt-10">
              <button
                onClick={() => HandleDiscard()}
                type="button"
                className="border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
              >
                Xóa
              </button>
              <button
                onClick={() => HandleSubmit()}
                type="button"
                className="bg-[#df6cad] hover:bg-red-500 focus:outline-none focus:shadow-outline text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
              >
                Tải lên
              </button>
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

export default AddPost;
