"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const BookingButton = () => {
  const [open, setOpen] = useState(true);
  const [openBooking, setOpenBooking] = useState(true);
  const pathname = usePathname();

  return (
    <>
      <div className="fixed top-20 right-5  box-border p:hidden  d:flex flex-col gap-5">
        <div
          className={`${
            openBooking
              ? "p:w-[200px] d:w-[250px] p:h-[200px] d:h-[250px]"
              : "p:w-0 d:w-0 p:h-0 d:h-0 overflow-hidden"
          }   relative duration-300 `}
        >
          <div className="z-10 relative">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/superdong-51e09.appspot.com/o/UI%2F1231231241.png?alt=media&token=6f0bc01f-c51d-4644-9613-8a180ae5d861"
              alt="booking"
            />
          </div>
          <Link href={`/dat-ve`}>
            <div className="bg-[#2e9279]  p-2 rounded-full w-max relative p:bottom-5 d:bottom-20 p:left-0 d:-left-28 zoom cursor-pointer ">
              <div className="border uppercase bg-mainblue px-8 py-1 text-center font-LexendDeca text-white text-[20px] rounded-full w-max font-bold">
                Đặt vé ngay
              </div>
            </div>
          </Link>
          <div
            className="flex absolute top-0 -right-2 cursor-pointer z-10"
            onClick={() => setOpenBooking(false)}
          >
            <div className="border p-1 rounded-full text-[18px]">
              <RxCross2 />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-52 p:left-20 d:left-32    p:hidden  box-border d:flex flex-col gap-5 z-10 ">
        <div
          className={`${
            open
              ? "p:w-[200px] d:w-[250px] p:h-[200px] d:h-[250px]"
              : "p:w-0 d:w-0 p:h-0 d:h-0 overflow-hidden"
          }   relative duration-300 `}
        >
          <div className=" relative">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/superdong-51e09.appspot.com/o/UI%2F512512512.png?alt=media&token=8d046aaf-d9dc-494d-82ef-d0b3f1da16af"
              alt="booking"
              className=""
            />
          </div>
          <Link href={`/gia-ve`}>
            <div className="bg-[#2e3192]  p-2 rounded-full w-max relative p:bottom-5 d:bottom-20   p:left-0 d:-left-28  cursor-pointer ">
              <div className="border uppercase bg-[#2e3192] px-8 py-1 text-center font-LexendDeca text-white text-[20px] flicker rounded-full w-max font-bold">
                Vé Tàu - Vé Phà <br /> Cao Tốc
              </div>
            </div>
          </Link>

          <div
            className="flex absolute top-0 p:-left-16 d:-left-24 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <div className="border p-1 rounded-full text-[18px]">
              <RxCross2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingButton;
