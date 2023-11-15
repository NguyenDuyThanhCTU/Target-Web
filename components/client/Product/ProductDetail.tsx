"use client";
import { useEffect, useState } from "react";

import { Image, Skeleton, Tabs } from "antd";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { FiPhoneCall } from "react-icons/fi";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FacebookProvider, Comments } from "react-facebook";
import moment from "moment";
import { useStateProvider } from "@context/StateProvider";
import { useData } from "@context/DataProviders";
import { useRouter, useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { BsFillCartPlusFill } from "react-icons/bs";
import Contact from "./Contact";
import { useSmartContract } from "@context/ContractProviders";

const ProductDetail = () => {
  const [ContractData, setContractData] = useState<any>();
  const { getShoe, contract, address } = useSmartContract();
  const searchParams = useSearchParams();
  const search = searchParams.get("pId");
  console.log(search);
  const fetchCampaigns = async () => {
    const data = await getShoe(search);
    setContractData(data);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);
  // const [similarProduct, setSimilarProduct] = useState([]);
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

  // useEffect(() => {
  //   const similarproduct = Products.filter(
  //     (item: any) => item.type === ProductFetch?.type
  //   );
  //   setSimilarProduct(similarproduct);
  // }, [Products, ProductFetch]);

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
            // dangerouslySetInnerHTML={{ __html: ProductFetch?.content }}
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
  return (
    <div className="flex flex-col gap-5  d:w-[1300px] d:mx-auto p:w-auto p:mx-2">
      <div>
        <div className="flex d:mx-16 gap-16 font-LexendDeca d:flex-row p:flex-col p:mx-2 py-14">
          <div className="flex-[40%] rounded-lg d:h-max p:h-auto overflow-hidden">
            <Image.PreviewGroup>
              <Image
                className="p-2 h-full w-full object-contain hover:scale-110 duration-500"
                src={ContractData?.image}
              />
            </Image.PreviewGroup>
            {/* {ProductFetch?.subimage?.length > 0 && (
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
                        {ProductFetch?.subimage?.map(
                          (item: any, idx: number) => (
                            <SwiperSlide>
                              {" "}
                              <Image
                                className="p-2 h-full w-full object-contain"
                                src={item.url}
                              />

                            </SwiperSlide>
                          )
                        )}
                      </Swiper>
                    </Image.PreviewGroup>
                  </div>
                </div>
              </>
            )} */}
          </div>
          <div className="flex-[70%] flex flex-col gap-5">
            <div>
              <h3 className="text-[26px] uppercase">{ContractData?.name}</h3>
              <div className="bg-black w-24 h-1"></div>
            </div>
            {/* <div className="flex gap-1 flex-col text-[20px]">
              {ProductFetch?.sale?.discount === 0 ? (
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
              )}
            </div> */}
            {/* <div className="w-[200px] ">
              {ProductFetch?.state ? (
                <div className=" text-green-500 rounded-xl font-bold">
                  Tình trạng: Còn hàng
                </div>
              ) : (
                <div className=" text-red-500  rounded-xl font-bold">
                  Tình trạng: Hết hàng
                </div>
              )}
            </div> */}

            <div
              className="rounded-sm col-span-3 w-full text-[18px] text-primary bg-[#f0edf8] hover:bg-[#e1dbf0] flex items-center  py-2 justify-center cursor-pointer gap-1"
              // onClick={() => HandleOrder(ProductFetch?.id, "add")}
            >
              <BsFillCartPlusFill className="text-[23px] " />
              <p> Mua ngay</p>
            </div>

            {/* <div className="py-4 border-t border-b w-full font-light">
              <h3>Mô tả</h3>
              <div
                dangerouslySetInnerHTML={{ __html: ProductFetch?.describe }}
              ></div>
            </div>
            <div className="flex gap-3 items-center font-light">
              <span className="">Lượt xem {ProductFetch?.access}</span>
            </div> */}
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
            {/* <div>
              {similarProduct?.map((item: any, idx: number) => (
                <>
                  <div className="flex gap-3 py-3 border-b" key={idx}>
                    <div className="flex-[30%]">
                      <img src={item.image} alt="similarProduct" />
                    </div>
                    <div className="flex-[60%]">
                      <h3 className="truncate1">{item.title}</h3>
                      <h3 className="text-mainred text-[18px] font-bold">
                        {item.price}
                      </h3>
                      <div className="flex">
                        <div className="py-1 px-4 bg-mainred text-white flex gap-2 items-center text-[15px]">
                          <FiPhoneCall />
                          <span>Liên hệ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div> */}
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
