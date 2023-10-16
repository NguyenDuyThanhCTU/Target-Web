"use client";
import React from "react";
import ListPost from "./ListPost";
import UploadPost from "./UploadPost";

const Post = ({ Data, title, type, typeItems }: any) => {
  return (
    <div className="flex flex-col justify-between h-full w-full relative ">
      <div className="ml-3 mb-2 bg-[#353535] shadow-gray-700 p-5 rounded-xl">
        <h3 className=" text-[44px] text-center font-bold mb-2 uppercase">
          {title}
        </h3>

        <div className="flex p-4 gap-10">
          <ListPost Data={Data} type={type} />
          <UploadPost Type={type} typeItems={typeItems} />
        </div>
        <div className="w-full border"></div>
      </div>
    </div>
  );
};

export default Post;
