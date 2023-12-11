"use client";
import { useEffect, useState } from "react";
import { Image, Modal, Tabs, Tooltip, notification } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { FiPhoneCall } from "react-icons/fi";
import { FacebookProvider, Comments } from "react-facebook";
import { useSearchParams } from "next/navigation";
import { useSmartContract } from "@context/ContractProviders";

import levelup from "@assets/animation/level-up.json";
import iconCoin from "@assets/animation/coin-icon.json";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import { BsFillCartPlusFill } from "react-icons/bs";

import { AiOutlineQuestionCircle } from "react-icons/ai";
import SimilarProductCard from "./SimilarProductCard";
import { useData } from "@context/DataProviders";
import ProductSpecifications from "./ProductSpecifications";
import Upgrade from "./Upgrade";
import Checkpayment from "./Checkpayment";
import { useStateProvider } from "@context/StateProvider";

const ProductDetail = ({ DbData }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [similarProduct, setSimilarProduct] = useState([]);
  // const { getShoe, contract, address, Shoes, buyShoe } = useSmartContract();
  const { setLoginState } = useStateProvider();
  const { currentUser, setBill, Products } = useData();

  const [similarProductUpdate, setSimilarProductUpdate] = useState<any>([]);
  const searchParams = useSearchParams();
  const search = searchParams.get("pId");
  const level = searchParams.get("level");
  const [isCheckPaymentOpen, setIsCheckPaymentOpen] = useState(false);

  useEffect(() => {
    const similarproduct: any = Products.filter(
      (item: any) => item.parentUrl === DbData?.parentUrl
    );
    const similarproductUpdate: any = Products.filter(
      (item: any) => item.url === DbData?.url
    );
    setSimilarProductUpdate(similarproductUpdate);
    setSimilarProduct(similarproduct);
  }, [DbData, Products]);

  const router = useRouter();
  const speedString = `${DbData?.limitspeed}`;
  const roadString = `${DbData?.limitdistance}`;
  const coinString = `${DbData?.limitcoinearning}`;
  const waitString = `${DbData?.limittime}`;

  const items = [
    {
      key: "1",
      label: "Chi tiết sản phẩm",
      children: (
        <>
          <h3 className="text-[24px] font-semibold ">Chi tiết sản phẩm</h3>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: DbData?.introduction }}
          ></div>
        </>
      ),
    },
    {
      key: "2",
      label: "Bình luận",
      children: (
        <>
          <div className="w-[778px]">
            <FacebookProvider appId="781034490143336">
              {" "}
              <Comments
                href="https://khogachcaocaptinphat.com"
                width={778}
              />{" "}
            </FacebookProvider>
          </div>
        </>
      ),
    },
  ];
  let sort: any = currentUser?.productscollection;
  const HandleBuy = () => {
    if (currentUser) {
      if (sort?.some((item: any) => item === DbData.id)) {
        notification["info"]({
          message: " Bạn đã mua sản phẩm này rồi !",
          description: `
        Bạn có thể nâng cấp để tăng chỉ số của sản phẩm`,
        });
      } else {
        const searchNumber = Number(search);
        const OrderData = {
          id: currentUser.id,
          image: DbData?.image,
          name: currentUser.displayName,
          address: currentUser.address,
          email: currentUser.email,
          phone: currentUser.phone,
          productscollection: [...currentUser.productscollection],
          productId: DbData?.id,
          level: DbData?.level,
          limitcoinearning: coinString,
          limitdistance: roadString,
          limitspeed: speedString,
          limittime: waitString,
          pId: searchNumber,
          price: DbData?.price,
        };
        setBill(OrderData);
        router.push(`/thanh-toan`);
      }
    } else {
      setIsCheckPaymentOpen(true);
    }
  };
  const HandleLogin = () => {
    setLoginState(true);
    setIsCheckPaymentOpen(false);
  };

  return (
    <div className="flex flex-col gap-5 mt-[98px]  d:w-[1500px] d:mx-auto p:w-auto p:mx-2">
      <div>
        <div className="grid grid-cols-8 d:mx-16 gap-5 font-LexendDeca d:flex-row p:flex-col p:mx-2 py-14">
          <div className="col-span-3 rounded-lg d:h-max p:h-auto overflow-hidden">
            <Image.PreviewGroup>
              <Image
                className="p-2 h-full w-full object-contain hover:scale-110 duration-500"
                src={DbData?.image}
              />
            </Image.PreviewGroup>
            {DbData?.subimage?.length > 0 && (
              <>
                {" "}
                <div className="w-full bg-gray-100 mt-3">
                  <div className="p-2 flex ">
                    <Image.PreviewGroup>
                      <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        slidesPerView={5}
                        slidesPerGroup={1}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                      >
                        {DbData?.subimage?.map((item: any, idx: number) => (
                          <SwiperSlide key={idx}>
                            {" "}
                            <Image
                              className="p-2 h-full w-full object-contain"
                              src={item.url}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </Image.PreviewGroup>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="col-span-3 flex flex-col gap-5">
            <div>
              <div className="flex gap-2 items-center">
                {level ? (
                  <h3 className="text-[26px] uppercase">
                    {DbData?.title} - Cấp {level}{" "}
                  </h3>
                ) : (
                  <h3 className="text-[26px] uppercase">{DbData?.name} </h3>
                )}
                <div
                  className="w-[80px] cursor-pointer hover:scale-110 duration-300"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Lottie animationData={levelup} />
                </div>
              </div>

              <div className="bg-black w-24 h-1"></div>
            </div>
            <div className="flex gap-1 flex-col text-[20px]">
              <>
                <div className="flex items-center g">
                  <div className="w-20">
                    <Lottie animationData={iconCoin} />
                  </div>
                  <span className="text-red-500">
                    {DbData?.price} SepoliaETH
                  </span>
                </div>
              </>
            </div>
            <div className="w-[200px] ">
              {DbData?.state ? (
                <div className=" text-green-500 rounded-xl font-bold">
                  Tình trạng: Còn hàng
                </div>
              ) : (
                <div className=" text-red-500  rounded-xl font-bold">
                  Tình trạng: Hết hàng
                </div>
              )}
            </div>

            <div
              className="rounded-sm col-span-3 w-full text-[18px] text-primary bg-[#f0edf8] hover:bg-[#e1dbf0] flex items-center  py-2 justify-center cursor-pointer gap-1"
              onClick={() => HandleBuy()}
              // onClick={() => HandleOrder(ProductFetch?.id, "add")}
            >
              <BsFillCartPlusFill className="text-[23px] " />
              <p> Mua ngay</p>
            </div>

            <div className="py-4 border-t border-b w-full font-light">
              <h3>Mô tả</h3>
              <div
                dangerouslySetInnerHTML={{ __html: DbData?.description }}
              ></div>
            </div>
            <div className="flex gap-3 items-center font-light">
              <span className="">Lượt xem {DbData?.access}</span>
            </div>
          </div>
          <div className="border  col-span-2 border-redPrimmary h-max">
            <ProductSpecifications
              speedString={speedString}
              roadString={roadString}
              coinString={coinString}
              waitString={waitString}
            />
          </div>
        </div>

        <div className="grid p:grid-cols-1 d:grid-cols-4 gap-5">
          <div className="d:px-16 py-5 p:px-2 border col-span-3">
            <Tabs
              defaultActiveKey="1"
              items={items}
              className="bg-white px-10 rounded-md font-LexendDeca py-5"
            />
          </div>

          <div className="col-span-1">
            <h3 className="text-mainred py-2 border-b-2 border-mainred uppercase font-bold">
              Sản phẩm liên quan
            </h3>
            <div>
              {similarProduct?.slice(0, 8).map((item: any, idx: number) => (
                <div key={idx}>
                  <SimilarProductCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <Upgrade Data={similarProductUpdate} />
      </Modal>

      <>
        <Modal
          closable={false}
          open={isCheckPaymentOpen}
          onCancel={() => setIsCheckPaymentOpen(false)}
          footer={null}
        >
          <div>
            <h2 className="text-[24px] font-semibold">Đến trang đăng nhập</h2>
            <p>Đăng nhập để giao dịch</p>
            <div className="flex w-full justify-center gap-5 mt-5">
              <div
                className="py-2 px-6 rounded-full border border-mainyellow cursor-pointer text-mainyellow duration-300 hover:border-orange-500 hover:text-orange-500"
                onClick={() => setIsCheckPaymentOpen(false)}
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

export default ProductDetail;
