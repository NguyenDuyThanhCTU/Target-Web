"use client";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { Modal, Timeline } from "antd";
import { useEffect, useState } from "react";

import { CgExtensionAdd } from "react-icons/cg";
import { FaHatWizard, FaPhotoVideo, FaTshirt } from "react-icons/fa";
import { GiConverseShoe, GiUnderwearShorts } from "react-icons/gi";

import { MdOutlineManageAccounts, MdOutlinePostAdd } from "react-icons/md";
import { SiTemporal, SiWebmoney } from "react-icons/si";
import { TfiLayoutSliderAlt } from "react-icons/tfi";
import SimilarProductCard from "../Product/SimilarProductCard";

const AccountInformation = ({ HeaderAdmin }: any) => {
  const { currentUser, Products } = useData();
  const [Cooldown, setCooldown] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ListProduct, setListProduct] = useState<any>([]);
  const [Selected, setSelected] = useState<any>();
  const { setSelectedId } = useStateProvider();
  const currentTime = new Date();
  const thirtyMinutes = currentUser?.limittime * 60 * 1000; // 30 phút tính bằng mili giây
  const endTime = new Date(currentTime.getTime() + thirtyMinutes);

  function updateCountdown() {
    const timeDifference = endTime.getTime() - new Date().getTime();
    const minutesLeft = Math.floor(timeDifference / (1000 * 60)); // Chuyển đổi sang phút
    if (minutesLeft >= 0) {
      setCooldown(` ${minutesLeft} phút`);
    } else {
      setCooldown("Có thể bắt đầu ");
    }
  }

  // Gọi hàm updateCountdown mỗi giây để cập nhật thời gian còn lại

  const ProductsCollection = Products.filter((item: any) =>
    currentUser?.productscollection?.includes(item.id)
  );

  useEffect(() => {
    const sort = ProductsCollection.filter(
      (item: any) => item.parentUrl === Selected
    );
    if (sort.length > 0) {
      setListProduct(sort);
    }
  }, [Selected]);

  const HandleSelected = (type: string) => {
    setIsModalOpen(true);
    setSelected(type);
    setSelectedId(type);
  };

  return (
    <>
      <div className="flex-[60%]">
        <div className="relative">
          <div className="flex justify-center ">
            <div className=" d:h-[500px] d:w-[500px] p:w-[250px] p:h-[250px] overflow-hidden rounded-full shadow-xl">
              <img
                src={HeaderAdmin?.photoURL}
                alt="avatar"
                className=" object-cover object-top hover:scale-125 duration-1000 w-full h-full"
              />
            </div>
          </div>

          <div>
            <div
              className="flex bg-slate-200 cursor-pointer hover:scale-110 duration-300  gap-3  text-black rounded-full items-center h-32  w-32 justify-center p:py-2  p:px-4 d:text-[28px] p:text-[13px] absolute -top-10 left-[43%] shadow-lg"
              onClick={() => HandleSelected("giay-toc-do")}
            >
              <GiConverseShoe className="text-[80px]" />
            </div>
          </div>
          <div>
            <div
              className="flex cursor-pointer hover:scale-110 duration-300  gap-3 bg-red-200 text-black rounded-full items-center h-32  w-32 justify-center p:py-2  p:px-4 d:text-[28px] p:text-[13px] absolute bottom-0  left-32 shadow-lg"
              onClick={() => HandleSelected("non-vuot-gioi-han")}
            >
              <FaHatWizard className="text-[80px]" />
            </div>
          </div>
          <div>
            <div
              className="flex cursor-pointer hover:scale-110 duration-300  gap-3 bg-blue-200 text-black rounded-full items-center h-32  w-32 justify-center p:py-2  p:px-4 d:text-[28px] p:text-[13px] absolute top-[20%] left-20 shadow-lg"
              onClick={() => HandleSelected("quan-phong-cach")}
            >
              <GiUnderwearShorts className="text-[80px]" />
            </div>
          </div>

          <div>
            <div
              className="flex justify-center cursor-pointer hover:scale-110 duration-300  gap-3 bg-purple-200 text-black rounded-full items-center  p:py-2   h-32  w-32 p:px-4 d:text-[28px] p:text-[13px] absolute bottom-0 right-28 shadow-lg"
              onClick={() => HandleSelected("phu-kien-sang-tao")}
            >
              <SiTemporal className="text-[80px]" />
            </div>
          </div>
          <div>
            <div
              className="flex justify-center  cursor-pointer hover:scale-110 duration-300  gap-3 bg-yellow-200 text-black rounded-full items-center  p:py-2   h-32  w-32 p:px-4 d:text-[28px] p:text-[13px] absolute top-[20%] right-20 shadow-lg"
              onClick={() => HandleSelected("ao-thach-thuc")}
            >
              <FaTshirt className="text-[80px]" />
            </div>
          </div>
        </div>
        <div className="te t-center mt-14 flex  justify-center  ">
          <div className=" w-[870px] flex flex-col gap-3">
            <h3 className="uppercase text-[#ff753f] font-semibold text-[20px] text-center">
              Hi there, I'm {HeaderAdmin?.name}
            </h3>

            <p className="text-[20px] text-gray-500 px-2 text-center">
              {HeaderAdmin?.introduce}
            </p>
            <div className="flex   items-center flex-col w-full font-LexendDeca mb-2">
              <div>
                <h3 className="  font-semibold text-[18px]">
                  Quyền hạn:{" "}
                  <span
                    className={`
                  
                  ${
                    HeaderAdmin?.role === "admin"
                      ? "text-[#ff3f3f]"
                      : HeaderAdmin?.role === "editor"
                      ? "text-yellow-400"
                      : "text-blue-400"
                  }`}
                  >
                    {HeaderAdmin?.role}
                  </span>
                </h3>
                <h3 className="  font-semibold text-[18px]">
                  {HeaderAdmin?.status && (
                    <>
                      Trạng thái:{" "}
                      <span
                        className={`${
                          HeaderAdmin.status === "active"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {HeaderAdmin?.status}
                      </span>{" "}
                    </>
                  )}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 ml-10 flex justify-center">
          <Timeline
            style={{ width: "50%" }}
            items={[
              {
                children: `Tỷ lệ coin chuyển đổi: x${HeaderAdmin?.limitcoinearning}`,
              },
              {
                children: `Quãng đường tối đa: ${HeaderAdmin?.limitdistance} Km`,
              },
              {
                children: `Tốc độ tối đa: ${HeaderAdmin?.limitspeed} Km/h`,
              },
            ]}
          />
          <Timeline
            items={[
              {
                children: `Quãng đường tích lũy: ${HeaderAdmin?.collectionPoint} Km`,
              },
              {
                children: `Thời gian phục hồi sau mỗi phiên chạy: ${HeaderAdmin?.limittime} phút`,
              },
              {
                children: `Thời gian cho phiên chạy tiếp theo: ${Cooldown}`,
              },
            ]}
          />
        </div>
      </div>
      <>
        <Modal
          title="Danh sách sản phẩm"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
        >
          <div>
            {ListProduct.map((item: any, idx: number) => (
              <div key={idx}>
                <SimilarProductCard item={item} type="profile" />
              </div>
            ))}
          </div>
        </Modal>
      </>
    </>
  );
};

export default AccountInformation;
