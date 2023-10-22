"use client";
import moment from "moment";
import Link from "next/link";
import React from "react";

const NewsCategory = ({ Data }: any) => {
  return (
    <div className="flex flex-col gap-2 text-[15px] mt-2">
      {Data.slice(0, 8).map((item: any, idx: number) => {
        const DetailPostDate = moment
          .unix(item?.createdAt.seconds)
          .format("MMMM DD, YYYY");
        return (
          <Link
            href={`/tin-tuc/${item.url}`}
            key={idx}
            className="py-2 border-b"
          >
            <div className="grid grid-cols-3 gap-5">
              <div className="w-full overflow-hidden">
                <img
                  src={item.image}
                  alt="news"
                  className="w-full h-full hover:scale-110 duration-300"
                />
              </div>
              <div className="col-span-2">
                <h2 className="font-light text-[15px] hover:underline">
                  {item.title}
                </h2>
                <p className="text[14px] text-gray-400">{DetailPostDate}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NewsCategory;
