"use client";
import React from "react";
import UploadDepartureSchedule from "./Section/UploadDepartureSchedule";
import ListDepartureSchedule from "./Section/ListDepartureSchedule";

const DepartureSchedule = () => {
  return (
    <div className="flex flex-col w-full">
      {" "}
      <div className="flex flex-col justify-between h-full w-full relative ">
        <div className="ml-3 mb-2 bg-[#353535] shadow-gray-700 p-5 rounded-xl">
          <h3 className=" text-[35px] text-center font-bold mb-2 uppercase">
            Danh sách lịch chạy tàu
          </h3>
          <div className="flex gap-5 mt-5 d:flex-row p:flex-col">
            <div>
              <UploadDepartureSchedule />
            </div>
            <ListDepartureSchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartureSchedule;
