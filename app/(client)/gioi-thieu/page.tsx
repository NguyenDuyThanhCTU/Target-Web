import Introduction from "@components/client/Introduction/Introduction";
import { getDataByTypeProps } from "@components/lib/get-data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Giới Thiệu | RunTech Motion+ ",
  description: "Runtech Motion - Kỷ nguyên mới của công nghệ",
};

const IntroductionPage = async () => {
  return (
    <div>
      <div className="flex flex-col d:w-[1300px] d:mx-auto p:w-auto p:mx-2 py-5">
        <div className="border-b pb-2">
          <div className="uppercase font-bold text-[1.5rem] ">
            <div className="hover:text-mainblue before:w-[50px] before:h-[1px] before:inline-block  before:bg-black before:mr-2 text-center cursor-default">
              Giới thiệu về dự án
            </div>
          </div>
          <div className="text-center">
            Tôi không ngừng nổ lực nghiên cứu và tìm kiếm những giải pháp cải
            thiện sức khỏe và chất lượng cuộc sống cho mọi người. Tôi tin rằng
            công nghệ sẽ là một trong những giải pháp tốt nhất cho điều đó. Và
            RunTech Motion+ là một trong những dự án đầu tiên của tôi.
          </div>
        </div>
        <div className="mt-4">
          <Introduction />
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
