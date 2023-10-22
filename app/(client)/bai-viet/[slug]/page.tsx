import React from "react";
import Posts from "@components/client/Posts/Posts";
import Link from "next/link";
import { TypePostItems } from "@assets/item";

const PostsPage = () => {
  return (
    <>
      <div className="p:w-auto d:w-[1300px] p:mx-2 d:mx-auto grid p:grid-cols-1 d:grid-cols-5 font-LexendDeca font-extralight gap-10">
        <div className="border h-max border-gray-400">
          <div className="p-3">
            <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
              Danh mục trang
            </h2>
            <div className="flex flex-col gap-2 text-[15px] mt-2">
              {TypePostItems.map((item: any, idx: number) => (
                <Link
                  key={idx}
                  href={`/bai-viet/${item.value}`}
                  className="hover:text-blue-600 hover:underline duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-4">
          {" "}
          <Posts />{" "}
        </div>
      </div>
    </>
  );
};

export default PostsPage;
