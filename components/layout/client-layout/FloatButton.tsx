"use client";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { Modal } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";
import { BiSolidMagicWand } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function FloatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, theme } = useStateProvider();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchRs, setSearchRs] = useState([]);
  const { Products } = useData();

  useEffect(() => {
    const sort = Products?.filter((product: any) =>
      product?.title?.toLowerCase().includes(search.toLowerCase())
    );
    setSearchRs(sort);
  }, [Products, search]);

  return (
    <div className="fixed p:bottom-14 d:bottom-7 p:right-5 d:right-10  box-border flex flex-col gap-5 z-10">
      {theme === "light" ? (
        <div className="flex items-center ">
          <div
            className={`${
              isOpen
                ? "w-[46px] h-[46px] hover:shadow-gray-400 text-[30px]  p-2 rounded-full shadow-lg shadow-gray-300 bg-white   cursor-pointer"
                : "w-0 h-0 overflow-hidden"
            }  duration-300 `}
            onClick={() => setIsModalOpen(true)}
          >
            <IoSearchOutline className="text-black p-1" />
          </div>
        </div>
      ) : (
        <div className="flex items-center ">
          <div
            className={`${
              isOpen
                ? "w-[46px] h-[46px] hover:shadow-gray-400 text-[30px]  p-2 rounded-full shadow-lg shadow-gray-300 bg-black   cursor-pointer"
                : "w-0 h-0 overflow-hidden"
            }  duration-300 `}
            onClick={() => setIsModalOpen(true)}
          >
            <IoSearchOutline className="text-white p-1" />
          </div>
        </div>
      )}
      {theme === "light" ? (
        <div className="flex items-center ">
          <div
            className={`${
              isOpen
                ? "w-[46px] h-[46px] hover:shadow-gray-400 text-[30px]  p-2 rounded-full shadow-lg shadow-gray-300 bg-white   cursor-pointer"
                : "w-0 h-0 overflow-hidden"
            }  duration-300 `}
            onClick={() => setTheme("dark")}
          >
            <MdDarkMode className="text-black p-1" />
          </div>
        </div>
      ) : (
        <div className="flex items-center ">
          <div
            className={`${
              isOpen
                ? "w-[46px] h-[46px] hover:shadow-gray-400 text-[30px]  p-2 rounded-full shadow-lg shadow-gray-300 bg-black   cursor-pointer"
                : "w-0 h-0 overflow-hidden"
            }  duration-300 `}
            onClick={() => setTheme("light")}
          >
            <MdDarkMode className="text-white p-1" />
          </div>
        </div>
      )}

      <div className="flex items-center    ">
        <div
          className={`${
            theme === "light"
              ? "bg-black shadow-gray-300 hover:shadow-gray-400 text-white black-animation"
              : "bg-white shadow-gray-300 hover:shadow-gray-400 while-animation"
          } text-[30px] p-2 rounded-full shadow-xl   duration-300  cursor-pointer `}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RxCross2 className=" " />
          ) : (
            <BiSolidMagicWand className=" " />
          )}
        </div>
      </div>
      <Modal
        closeIcon={false}
        open={isModalOpen}
        footer={null}
        className="h-max"
        onCancel={() => setIsModalOpen(false)}
      >
        <div>
          <div className=" relative">
            <div className="border rounded-full border-mainyellow flex items-center ">
              <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                <input
                  type="text"
                  className="outline-none mr-2 col-span-6 "
                  placeholder="Tìm kiếm sản phẩm..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div>
                  <div
                    className={`${
                      search ? "block" : "hidden"
                    }  bg-gray-500 text-gray-300 w-max p-1 rounded-full text-[10px] cursor-pointer`}
                    onClick={() => setSearch("")}
                  >
                    <RxCross2 />
                  </div>
                </div>
              </div>
              <Link
                className="bg-mainyellow border-mainyellow py-3 px-6 text-gray-100 rounded-r-full cursor-pointer"
                href={`/san-pham/tat-ca?search=${search}`}
              >
                <FaSearch />
              </Link>
            </div>
            {search && (
              <div className="absolute w-full bg-gray-100 top-full flex flex-col shadow-inner z-50 mt-2">
                <div className=" flex flex-col">
                  {searchRs.map((product: any, idx: number) => (
                    <Link
                      href={`/chi-tiet-san-pham/${product.url}`}
                      key={idx}
                      className="cursor-pointer p-2 hover:bg-gray-200"
                    >
                      {product.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default FloatButton;
