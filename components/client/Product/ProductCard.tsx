"use client";
import {
  addDataToArrayField,
  deleteDataFromArrayValue,
} from "@config/Services/Firebase/FireStoreDB";
import { useSmartContract } from "@context/ContractProviders";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { Badge, Modal } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

const ProductCard = ({ Data }: any) => {
  const [user, setUser] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const { Accounts, currentUser } = useData();
  const { setIsRefetch, setLoginState } = useStateProvider();
  const router = useRouter();

  const HandleNavigate = (Url: any, Level: any) => {
    router.push(`/chi-tiet-san-pham/${Url}?level=${Level}&pId=${Data.pId}`);
  };

  useEffect(() => {
    const sort = Accounts?.filter(
      (item: any) => item.username === currentUser?.username
    );
    setUser(sort);
  }, [currentUser, Accounts]);

  const HandleFavorite = (id: any) => {
    if (currentUser) {
      if (user[0]?.favorite.filter((item: any) => item === id).length > 0) {
        deleteDataFromArrayValue(
          "accounts",
          currentUser?.id,
          "favorite",
          id
        ).then(() => {
          setIsRefetch("CRUD accounts");
        });
      } else {
        addDataToArrayField("accounts", currentUser?.id, "favorite", id).then(
          () => {
            setIsRefetch("CRUD accounts");
          }
        );
      }
    } else {
      setIsModalOpen(true);
    }
  };
  const HandleLogin = () => {
    setLoginState(true);
    setIsModalOpen(false);
  };
  return (
    <div>
      <Badge.Ribbon text={`Cấp ${Data.level}`} color="red" placement="end">
        <div className="border font-LexendDeca font-extralight  cursor-pointer h-[350px] hover:shadow-xl duration-300">
          <div className="">
            <div
              className="pt-2 px-2"
              onClick={() => HandleNavigate(Data.url, Data.level)}
            >
              <div className="overflow-hidden h-[200px]  ">
                <img
                  src={Data.image}
                  alt="product"
                  className="w-full h-full px-4 hover:scale-110 duration-300"
                />
              </div>
              <h3 className=" mt-2 truncate1 d:text-[16px] p:text-[14px] font-normal text-center">
                {Data.title}
              </h3>
              <p className="text-redPrimmary font-light flex gap-2 items-center mt-2 justify-center">
                <FaEthereum />
                <span> {Data.price} SepoliaETH</span>
              </p>
            </div>

            <div className="flex w-full justify-between pl-2 py-4 d:text-[16px] p:text-[12px]">
              <div
                className={`hover:scale-110 duration-300 text-[22px] ml-5 ${
                  user[0]?.favorite?.includes(Data.id) && "text-redPrimmary "
                }`}
                onClick={() => HandleFavorite(Data.id)}
              >
                <IoIosHeart />
              </div>

              <div
                className=" px-4 py-1 flex items-center gap-3 bg-orange-500 text-white rounded-l-full"
                onClick={() => HandleNavigate(Data.url, Data.level)}
              >
                <p> Chi tiết</p>
              </div>
            </div>
          </div>
        </div>
      </Badge.Ribbon>
      <>
        <Modal
          closable={false}
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
        >
          <div>
            <h2 className="text-[24px] font-semibold">Đến trang đăng nhập</h2>
            <p>Đăng nhập để thêm sản phẩm vào mục yêu thích</p>
            <div className="flex w-full justify-center gap-5 mt-5">
              <div
                className="py-2 px-6 rounded-full border border-mainyellow cursor-pointer text-mainyellow duration-300 hover:border-orange-500 hover:text-orange-500"
                onClick={() => setIsModalOpen(false)}
              >
                Hủy
              </div>
              <div
                className="py-2 px-6 rounded-full border border-mainyellow bg-mainyellow text-white duration-300 hover:bg-orange-500 hover:border-orange-500 cursor-pointer"
                onClick={() => HandleLogin()}
              >
                Đăng nhập
              </div>
            </div>
          </div>
        </Modal>
      </>
    </div>
  );
};

export default ProductCard;
