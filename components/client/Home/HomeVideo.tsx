import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

const HomeVideo = () => {
  return (
    <div className="bg-white py-10">
      <div className="d:w-[1440px]  p:w-auto d:mx-auto font-LexendDeca font-extralight">
        <div className="font-bold uppercase text-[30px] pb-2 border-b-2 border-black w-full flex justify-center">
          <h2>Video</h2>
        </div>
        <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/UI%2Fphoto_2023-10-23_14-02-31.jpg?alt=media&token=7832b674-a9be-434d-a524-d04c8e5a3d50)] bg-no-repeat bg-cover h-[50vh] bg-center w-[900px] mx-auto mt-5">
          <div className="h-[50vh] flex justify-center items-center text-mainyellow bg-[rgba(0,0,0,0.5)]">
            <div className="text-[50px] p-6 rounded-full border hover:scale-110 duration-300 cursor-pointer border-mainyellow bg-[rgba(255,255,255,0.5)]">
              <BsFillPlayFill />
            </div>
          </div>
        </div>
        <div className="mt-10 flex gap-5">
          <div className="flex-1 bg-[url(https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/UI%2Fphoto_2023-11-10_14-03-12.jpg?alt=media&token=12e29c87-c20f-4a2b-a153-27f4f29ffdc5)] bg-no-repeat bg-cover h-[40vh] bg-center mx-auto mt-5">
            <div className="h-[40vh] flex justify-start items-end p-10 text-mainyellow bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(255,255,255,0.3)] duration-[5000ms]">
              <div>
                <h2 className="uppercase text-[20px] font-bold">
                  {" "}
                  Bạn cần hỗ trợ?
                </h2>
                <div>
                  {" "}
                  <div className="text-mainyellow mt-2 py-2 px-4 rounded-full bg-white border border-mainyellow font-normal cursor-pointer hover:text-white hover:bg-mainorange  hover:border-white duration-300">
                    Hướng dẫn sử dụng
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[url(https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/UI%2Fphoto_2023-11-10_14-01-34.jpg?alt=media&token=2b42d4b6-8369-4fbe-82c0-39b7abc622dd)] bg-no-repeat bg-cover h-[40vh] bg-center mx-auto mt-5">
            <div className="h-[40vh] flex justify-start items-end p-10 text-mainyellow bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(255,255,255,0.3)] duration-[5000ms]">
              <div>
                <h2 className="uppercase text-[20px] font-bold"> Cộng đồng</h2>
                <div>
                  {" "}
                  <div className="text-mainyellow w-max mt-2 py-2 px-4 rounded-full bg-white border border-mainyellow font-normal cursor-pointer hover:text-white hover:bg-mainorange  hover:border-white duration-300">
                    Tham gia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVideo;
