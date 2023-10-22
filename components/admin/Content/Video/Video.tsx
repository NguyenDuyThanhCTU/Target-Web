"use client";
import React from "react";
import UploadVideo from "./Section/UploadVideo";
import ListVideo from "./Section/ListVideo";

const Video: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full relative ">
      <div className="ml-3 mb-2 bg-[#353535] shadow-gray-700 p-5 rounded-xl">
        <h3 className=" text-[35px] text-center font-bold mb-2 uppercase">
          Danh sách Video
        </h3>
        <div className="flex gap-5 mt-5 d:flex-row p:flex-col">
          <div>
            <UploadVideo />
          </div>
          <ListVideo />
        </div>
      </div>
    </div>
  );
};

export default Video;
