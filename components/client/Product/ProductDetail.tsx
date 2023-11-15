"use client";
import { useEffect, useState } from "react";
import { Image, Tabs, Tooltip } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { FiPhoneCall } from "react-icons/fi";
import { FacebookProvider, Comments } from "react-facebook";
import { useSearchParams } from "next/navigation";
import { useSmartContract } from "@context/ContractProviders";
import coin from "@assets/animation/coin.json";
import road from "@assets/animation/road.json";

import speed from "@assets/animation/speed.json";

import wait from "@assets/animation/wait.json";
import levelup from "@assets/animation/level-up.json";

import { useRouter } from "next/navigation";
import { BsFillCartPlusFill } from "react-icons/bs";
import Lottie from "lottie-react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const ProductDetail = ({ DbData }: any) => {
  const [ContractData, setContractData] = useState<any>();
  const [similarProduct, setSimilarProduct] = useState([]);

  const { getShoe, contract, address, Shoes } = useSmartContract();
  const searchParams = useSearchParams();
  const search = searchParams.get("pId");
  const level = searchParams.get("level");
  const fetchCampaigns = async () => {
    const data = await getShoe(search);
    setContractData(data);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  useEffect(() => {
    const similarproduct: any = Shoes.filter(
      (item: any) => item.parenturl === ContractData?.parenturl
    );
    setSimilarProduct(similarproduct);
  }, [Shoes, ContractData]);

  const router = useRouter();
  const priceString = `${ContractData?.price}`;
  const speedString = `${ContractData?.limitspeed}`.slice(0, -18);
  const roadString = `${ContractData?.limitroad}`.slice(0, -18);
  const coinString = `${ContractData?.coin}`.slice(0, -18);
  const waitString = `${ContractData?.waittime}`.slice(0, -18);

  const price = priceString.slice(0, -18);

  const HandleNavigate = (Url: any, Level: any, pId: any) => {
    router.push(`/chi-tiet-san-pham/${Url}?level=${Level}&pId=${pId}`);
  };
  // const [ProductFetch, setProductFetch] = useState<any>();
  // const [isCombo, setIsCombo] = useState(1);
  // const [openContact, setOpenContact] = useState<any>(false);
  // const { setCartItems, Sale } = useData();
  // const { setOpenCart, OpenCart } = useStateProvider();
  // const router = useRouter();
  // const { Products } = useData();
  // const params = useParams();

  // useEffect(() => {
  //   const sort = Products.filter((item: any) => item.url === params.slug);
  //   if (sort) {
  //     setProductFetch(sort[0]);
  //   }
  // }, [params.slug, Products]);

  // const onMinus = () => {
  //   if (isCombo > 0) {
  //     setIsCombo(isCombo - 1);
  //   }
  // };
  // const currentTime = new Date();
  // const formatCurrentTime = moment(currentTime).format("YYYY-MM-DD");
  // const isSale =
  //   ProductFetch?.sale.discount === 0 || formatCurrentTime > Sale.end;

  // const HandleOrder = (id: string, type: string) => {
  //   if (type === "buy") {
  //     setCartItems((prevItems: any) => [...prevItems, id]);
  //     router.push("/thanh-toan");
  //   } else {
  //     setCartItems((prevItems: any) => [
  //       ...prevItems,
  //       ...Array(isCombo).fill(id),
  //     ]);
  //     setOpenCart(true);
  //   }
  // };
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

  const Productspecifications = [
    {
      animation: speed,
      topic: "Tốc độ tối đa",
      detail: (
        <p>
          Tốc độ tối đa{" "}
          <span className="text-green-500">+${speedString} km/h</span>
        </p>
      ),
      tooltip:
        "Vật phẩm có khả năng tăng giới hạn tốc độ tối đa mà người dùng có thể đạt được trong một khoản thời gian. Nâng cấp Vật phẩm có thể giúp đạt được giới hạn tốc độ cao hơn.",
    },
    {
      animation: road,
      topic: "Quãng đường tối đa",
      detail: (
        <p>
          Quãng đường mỗi phiên chạy{" "}
          <span className="text-green-500">+${roadString} km </span>
        </p>
      ),
      tooltip:
        "Vật phẩm có thể giới hạn quãng đường tối đa trong một phiên chạy. Có thể nâng cấp để tăng giới hạn",
    },
    {
      animation: coin,
      topic: "Số coin nhận được",
      detail: (
        <p>
          Tỷ lệ coin nhận được sau mỗi phiên chạy{" "}
          <span className="text-green-500">x${coinString} </span>
        </p>
      ),

      tooltip:
        "Sau mỗi phiên chạy bạn sẽ nhận được coin tương ứng. Có thể nâng cấp để tăng hiệu suất nhận được coin sau mỗi phiên chạy",
    },
    {
      animation: wait,
      topic: "Thời gian chờ",
      detail: (
        <p>
          Khoản thời gian chờ sau mỗi phiên chạy{" "}
          <span className="text-green-500">-${waitString} phút</span>
        </p>
      ),

      tooltip:
        "Sau mỗi phiên chạy bạn sẽ có một khoản thời gian chờ trước khi bắt đầu phiên chạy mới. Có thể nâng cấp để rút ngắn thời gian phải chờ đợi sau mỗi phiên chạy",
    },
  ];
  return (
    <div className="flex flex-col gap-5  d:w-[1500px] d:mx-auto p:w-auto p:mx-2">
      <div>
        <div className="grid grid-cols-8 d:mx-16 gap-5 font-LexendDeca d:flex-row p:flex-col p:mx-2 py-14">
          <div className="col-span-3 rounded-lg d:h-max p:h-auto overflow-hidden">
            <Image.PreviewGroup>
              <Image
                className="p-2 h-full w-full object-contain hover:scale-110 duration-500"
                src={ContractData?.image}
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
                          <SwiperSlide>
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
                    {ContractData?.name} - Cấp {level}{" "}
                  </h3>
                ) : (
                  <h3 className="text-[26px] uppercase">
                    {ContractData?.name}{" "}
                  </h3>
                )}
                <div className="w-[80px] cursor-pointer hover:scale-110 duration-300">
                  <Lottie animationData={levelup} />
                </div>
              </div>

              <div className="bg-black w-24 h-1"></div>
            </div>
            <div className="flex gap-1 flex-col text-[20px]">
              {/* {ProductFetch?.sale?.discount === 0 ? (
                <>
                  <p>
                    Giá:{" "}
                    <span className="text-red-500">
                      {ProductFetch?.price} <sup>VNĐ</sup>
                    </span>
                  </p>
                </>
              ) : (
                <div>
                  <p>
                    Giá cũ:{" "}
                    <span className="text-[16px] line-through">
                      {ProductFetch?.price} <sup>VNĐ</sup>
                    </span>
                  </p>
                  <div className="flex items-end">
                    <p>
                      Giá mới:{" "}
                      <span className="text-red-500 text-[20px]">
                        {ProductFetch?.sale?.newPrice} <sup>VNĐ</sup>
                      </span>{" "}
                    </p>
                    <div className="ml-5 border-2 border-red-500 bg-red-500 text-white p-2">
                      Giảm {ProductFetch?.sale?.discount} %
                    </div>
                  </div>
                </div>
              )} */}
              <>
                <p>
                  Giá:{" "}
                  <span className="text-red-500">
                    {price}
                    <sup>$</sup>
                  </span>
                </p>
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
            <div>
              {Productspecifications.map((item: any, idx: number) => (
                <div key={idx} className="border-b p-2 cursor-default">
                  <div className="p-2 grid grid-cols-4 gap-2">
                    <Lottie animationData={item.animation} />
                    <div className="col-span-3 flex flex-col">
                      <div className="flex items-center gap-2">
                        <h2 className="font-bold text-[18px]">{item.topic}</h2>
                        <Tooltip title={item.tooltip}>
                          <AiOutlineQuestionCircle />
                        </Tooltip>
                      </div>
                      <div className="font-light">{item.detail}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
              {similarProduct?.map((item: any, idx: number) => {
                const priceString = `${item.price}`;
                const price = priceString.slice(0, -18);
                const levelString = `${item.level}`;
                const level = levelString.slice(0, -18);

                return (
                  <div
                    className="flex gap-3 py-3 border-b cursor-pointer hover:bg-gray-100"
                    key={idx}
                    onClick={() => HandleNavigate(item.url, level, item.pId)}
                  >
                    <div className="flex-[30%]">
                      <img src={item.image} alt="similarProduct" />
                    </div>
                    <div className="flex-[60%]">
                      <h3 className="truncate1">{item.name}</h3>

                      <h3 className="text-mainred text-[18px] font-semibold text-redPrimmary">
                        {price}
                        <sup>$</sup>
                      </h3>
                      <div className="flex">
                        <div className="py-1 px-4 bg-mainred text-white flex gap-2 items-center text-[15px]">
                          <FiPhoneCall />
                          <span>Chi tiết</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* <>
        {openContact && (
          <Contact setOpenContact={setOpenContact} OpenContact={openContact} />
        )}
      </> */}
    </div>
  );
};

export default ProductDetail;
