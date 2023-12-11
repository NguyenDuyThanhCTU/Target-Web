import Video from "@components/client/Video/Video";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Video | RunTech Motion+ ",
  description: "Runtech Motion - Kỷ nguyên mới của công nghệ",
};

const VideoPage = () => {
  return (
    <div>
      <div className="flex flex-col d:w-[1300px] d:mx-auto p:w-auto p:mx-2 py-5">
        <div>
          <div className="uppercase font-bold text-[1.5rem] ">
            <div className="hover:text-mainblue before:w-[50px] before:h-[1px] before:inline-block  before:bg-black before:mr-2 text-center cursor-default">
              Những nguồn tài liệu, video hướng dẫn hỗ trợ cho khách hàng
            </div>
          </div>
          <div className="text-center">
            Trong khi thực hiện dự án. Tôi có lưu lại một số video hướng dẫn để
            chia sẻ với người dùng.
          </div>
        </div>
        <div className="grid p:grid-cols-1 mt-5 gap-10 d:grid-cols-3 justify-between">
          <Video />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
