import { SiGooglemaps, SiZalo } from "react-icons/si";
import paymentAnimation from "./animation/payment.json";
import policyAnimation from "./animation/policy.json";
import rulesAnimation from "./animation/rules.json";
import securityAnimation from "./animation/security.json";
import {
  BsFacebook,
  BsMessenger,
  BsYoutube,
  BsBatteryCharging,
  BsFillSendExclamationFill,
  BsFillSendCheckFill,
  BsFillSendXFill,
  BsCoin,
} from "react-icons/bs";
import { HiOutlineTicket, HiOutlineUserGroup } from "react-icons/hi";
import {
  AiFillInstagram,
  AiOutlineProfile,
  AiOutlineSlack,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FaFirstOrderAlt, FaHeart, FaTiktok } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiNetworkChart, BiSlideshow } from "react-icons/bi";
import {
  TbCarouselHorizontal,
  TbCoinOff,
  TbCubeSend,
  TbListDetails,
  TbSlideshow,
} from "react-icons/tb";
import {
  MdAirlineSeatReclineNormal,
  MdManageAccounts,
  MdOutlineLocalCarWash,
  MdOutlinePassword,
  MdOutlinePostAdd,
  MdSecurity,
} from "react-icons/md";
import { CgListTree, CgSize } from "react-icons/cg";
import { IoMdColorWand } from "react-icons/io";
import {
  GiAchievement,
  GiBackwardTime,
  GiExitDoor,
  GiLevelThree,
  GiNightSky,
  GiPartyFlags,
  GiRoad,
  GiSubmarineMissile,
} from "react-icons/gi";

import { CiCoinInsert, CiDiscount1, CiViewList } from "react-icons/ci";
import { IconType } from "react-icons/lib";
import { IoFlashOutline } from "react-icons/io5";
import { SlSpeedometer } from "react-icons/sl";

interface IconMappingType {
  [key: string]: IconType;
}

export const IconMapping: IconMappingType = {
  IoFlashOutline: IoFlashOutline,
  MdManageAccounts: MdManageAccounts,
  SiZalo: SiZalo,
  BsFacebook: BsFacebook,
  HiOutlineUserGroup: HiOutlineUserGroup,
  BsMessenger: BsMessenger,
  AiFillInstagram: AiFillInstagram,
  FaTiktok: FaTiktok,
  AiOutlineTwitter: AiOutlineTwitter,
  BsYoutube: BsYoutube,
  BiSlideshow: BiSlideshow,
  TbListDetails: TbListDetails,
  TbSlideshow: TbSlideshow,
  BiNetworkChart: BiNetworkChart,
  MdOutlinePostAdd: MdOutlinePostAdd,
  AiOutlineUnorderedList: AiOutlineUnorderedList,
  CgListTree: CgListTree,
  FaFirstOrderAlt: FaFirstOrderAlt,
  AiOutlineSlack: AiOutlineSlack,
  BsBatteryCharging: BsBatteryCharging,
  IoMdColorWand: IoMdColorWand,
  MdAirlineSeatReclineNormal: MdAirlineSeatReclineNormal,
  CgSize: CgSize,
  MdOutlineLocalCarWash: MdOutlineLocalCarWash,
  TbCarouselHorizontal: TbCarouselHorizontal,
  GiExitDoor: GiExitDoor,
  AiOutlineProfile: AiOutlineProfile,
  BsFillSendExclamationFill: BsFillSendExclamationFill,
  BsFillSendCheckFill: BsFillSendCheckFill,
  TbCubeSend: TbCubeSend,
  BsFillSendXFill: BsFillSendXFill,
  CiViewList: CiViewList,
  HiOutlineTicket: HiOutlineTicket,
  SiGooglemaps: SiGooglemaps,
  SlSpeedometer: SlSpeedometer,
  GiRoad: GiRoad,
  BsCoin: BsCoin,
  GiBackwardTime: GiBackwardTime,
  GiLevelThree: GiLevelThree,
  GiPartyFlags: GiPartyFlags,
  GiSubmarineMissile: GiSubmarineMissile,
  CiDiscount1: CiDiscount1,
  GiNightSky: GiNightSky,
  TbCoinOff: TbCoinOff,
  GiAchievement: GiAchievement,
  FaHeart: FaHeart,
  CiCoinInsert: CiCoinInsert,
  MdOutlinePassword: MdOutlinePassword,
};

export const ProductSidebarAdmin = [
  {
    name: "Giới thiệu",
    icon: "AiOutlineSlack",
  },
  {
    name: "Sản phẩm",
    icon: "FaFirstOrderAlt",
  },
  {
    name: "Sale",
    icon: "IoFlashOutline",
  },
  {
    name: "Đơn hàng",
    icon: "AiOutlineUnorderedList",
  },
  {
    name: "Chi nhánh",
    icon: "CgListTree",
  },
];

export const WebsiteSidebarAdmin = [
  {
    name: "Thông tin website",
    icon: "TbListDetails",
  },
  {
    name: "Slide trình chiếu",
    icon: "TbSlideshow",
  },
  {
    name: "Kênh truyền thông",
    icon: "BiNetworkChart",
  },
  {
    name: "Bài viết",
    icon: "MdOutlinePostAdd",
  },
  {
    name: "Video",
    icon: "BiSlideshow",
  },
  {
    name: "Tài khoản",
    icon: "MdManageAccounts",
  },
];

export const ProfileSidebarItems = [
  {
    name: "Thông Tin Người Dùng",
    icon: "AiOutlineSlack",
  },
  {
    name: "Sản phẩm yêu thích",
    icon: "FaHeart",
  },
  {
    name: "Lịch sử giao dịch",
    icon: "CiCoinInsert",
  },
  {
    name: "Hoạt Động Chạy Bộ",
    icon: "FaFirstOrderAlt",
  },
  {
    name: "Nâng Cấp và Điểm Thưởng",
    icon: "IoFlashOutline",
  },

  {
    name: "Thành tựu",
    icon: "GiAchievement",
  },
  {
    name: "Đổi mật khẩu",
    icon: "MdOutlinePassword",
  },
];

export const SocialMediaDashboard = [
  {
    title: "Trang zalo",
    icon: "SiZalo",
    image:
      "https://atpsoftware.vn/wp-content/uploads//2020/03/20211208103735_id_zalo-1.jpg",
    style: "hover:text-blue-400 hover:bg-white",
  },
  {
    title: "Facebook cá nhân",
    icon: "BsFacebook",
    image:
      "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZWJvb2slMjBsb2dvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    style: "hover:bg-white hover:text-blue-600",
  },
  {
    title: "Trang Fanpage",
    icon: "HiOutlineUserGroup",
    image:
      "https://img.freepik.com/premium-photo/3d-pile-facebook-logo-background-facebook-famous-social-media-platform_73903-705.jpg?w=2000",
    style: "hover:bg-white hover:text-black p-1",
  },
  {
    title: "Trang Messenger",
    icon: "BsMessenger",
    image:
      "https://img.freepik.com/premium-photo/3d-facebook-messenger-logo-application-blue-background-social-media-communication_73903-695.jpg",
    style: "hover:bg-white hover:text-blue-600 p-1",
  },
  {
    title: "Trang Instagram",
    icon: "AiFillInstagram",
    image: "https://images2.alphacoders.com/123/1230947.png",
    style: "hover:bg-pink-500 hover:text-white",
  },

  {
    title: "Trang Tiktok",
    icon: "FaTiktok",
    image: "https://images.alphacoders.com/112/1123670.png",
    style: "hover:bg-black hover:text-white p-1",
  },

  {
    title: "Google map",
    icon: "SiGooglemaps",
    image:
      "https://viondigital.com/wp-content/uploads/2021/11/google-maps-10.jpg",
    style: "hover:bg-white hover:text-blue-600 p-1",
  },
  {
    title: "Trang YouTube",
    icon: "BsYoutube",
    image:
      "https://img.nhandan.com.vn/Files/Images/2021/04/13/3A708284_F5B8_407D_ADC0_339DBEE-1618275907021.jpeg",
    style: "hover:bg-red-600 hover:text-white p-1",
  },
];

export const OrderDashboardItems = [
  {
    name: "Mới",
    icon: "BsFillSendExclamationFill",
  },
  {
    name: "Đã phản hồi",
    icon: "BsFillSendCheckFill",
  },
  {
    name: "Đã thanh toán",
    icon: "TbCubeSend",
  },
  {
    name: "Hủy đơn",
    icon: "BsFillSendXFill",
  },
  {
    name: "Chi tiết đơn hàng",
    icon: "CiViewList",
  },
];

/*<---------------------------------------------------------- Custom System ----------------------------------------------------------> */

export const SocialMediaCustom = [
  {
    id: 0,
    title: "Trang zalo",
    icon: "SiZalo",
    image:
      "https://atpsoftware.vn/wp-content/uploads//2020/03/20211208103735_id_zalo-1.jpg",
    style: "hover:text-blue-600 hover:bg-white ",
  },
  {
    id: 1,
    title: "Facebook cá nhân",
    icon: "BsFacebook",
    image:
      "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZWJvb2slMjBsb2dvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    style: "hover:bg-white hover:text-blue-600",
  },

  {
    id: 5,
    title: "Trang Tiktok",
    icon: "FaTiktok",
    image: "https://images.alphacoders.com/112/1123670.png",
    style: "hover:bg-black hover:text-white p-1",
  },

  {
    id: 7,
    title: "Trang YouTube",
    icon: "BsYoutube",
    image:
      "https://img.nhandan.com.vn/Files/Images/2021/04/13/3A708284_F5B8_407D_ADC0_339DBEE-1618275907021.jpeg",
    style: "hover:bg-red-600 hover:text-white p-1",
  },
];

export const HeaderItems = [
  {
    name: "Trang chủ",
    link: "",
  },
  {
    name: "Danh mục sản phẩm",
    link: "san-pham/giam-gia",
  },
  {
    name: "Sản phẩm",
    link: "san-pham/tat-ca",
  },

  {
    name: "Giới thiệu",
    link: "gioi-thieu",
  },
  {
    name: "Tin tức",
    link: "tin-tuc",
  },

  {
    name: "Hỗ trợ",
    link: "bai-viet/huong-dan-su-dung",
  },
  {
    name: "Liên hệ",
    link: "lien-he",
  },
];

export const ToolsTipsSocialMediaItems = [
  {
    title: "zalo.me/...",
  },
  {
    title: "www.facebook.com/...",
  },
  {
    title: "www.facebook.com/plugins/page.php?href=....",
  },
  {
    title: "",
  },
  {
    title: "www.instagram.com/...",
  },
  {
    title: "www.tiktok.com/...",
  },
  {
    title: "maps.app.goo.gl/...",
  },
  {
    title: "www.youtube.com/...",
  },
];

/*<-------------------------------------------------------------------------------------------------------------------- CUSTOM --------------------------------------------------------------------------------------------------------------------> */

export const ProductLimitSpeedItems = [
  {
    label: "4 Km/h",
    value: "4",
  },
  {
    label: "6 Km/h",
    value: "6",
  },

  {
    label: "8 Km/h",
    value: "8",
  },

  {
    label: "10 Km/h",
    value: "10",
  },

  {
    label: "14 Km/h",
    value: "14",
  },

  {
    label: "16 Km/h",
    value: "16",
  },

  {
    label: "18 Km/h",
    value: "18",
  },

  {
    label: "20 Km/h",
    value: "20",
  },
];

export const ProductLimitRoadItems = [
  {
    label: "3 Km",
    value: "3",
  },
  {
    label: "6 Km",
    value: "6",
  },
  {
    label: "8 Km",
    value: "8",
  },
  {
    label: "10 Km",
    value: "10",
  },
  {
    label: "13 Km",
    value: "13",
  },
  {
    label: "16 Km",
    value: "16",
  },
  {
    label: "18 Km",
    value: "18",
  },
  {
    label: "20 Km",
    value: "20",
  },
];

export const ProductLimitCoinItems = [
  {
    label: "1.8x",
    value: "1.8",
  },
  {
    label: "2x",
    value: "2",
  },
  {
    label: "2.2x",
    value: "2.2",
  },
  {
    label: "2.4x",
    value: "2.4",
  },
  {
    label: "2.8x",
    value: "2.8",
  },
  {
    label: "3.0x",
    value: "3",
  },
  {
    label: "3.2x",
    value: "3.2",
  },
  {
    label: "3.4x",
    value: "3.4",
  },
  {
    label: "3.6x",
    value: "3.6",
  },
  {
    label: "3.8x",
    value: "3.8",
  },
];

export const productLimitTime = [
  {
    label: "15 phút",
    value: "15",
  },
  {
    label: "30 phút",
    value: "30",
  },
  {
    label: "45 phút",
    value: "45",
  },
  {
    label: "60 phút",
    value: "60",
  },
];

export const TypePostItems = [
  {
    label: "Tin tức",
    value: "tin-tuc",
  },

  {
    label: "Hướng dẫn sử dụng",
    value: "huong-dan-su-dung",
  },
  {
    label: "Catalogue Sản phẩm",
    value: "catalogue-san-pham",
  },

  {
    label: "Điều khoản sử dụng",
    value: "dieu-khoan-su-dung",
    animation: rulesAnimation,
  },
  {
    label: "Chính sách và quy định chung",
    value: "chinh-sach-va-quy-dinh-chung",
    animation: policyAnimation,
  },

  {
    label: "Chính sách bảo mật",
    value: "chinh-sach-bao-mat",
    animation: securityAnimation,
  },
  {
    label: "Phương thức thanh toán",
    value: "phuong-thuc-thanh-toan",
    animation: paymentAnimation,
  },
];

export const ServiceTypeItems = [
  {
    label: "Đặt vé",
    value: "dat-ve",
  },
  {
    label: "Lịch tàu chạy",
    value: "lich-tau-chay",
  },
  {
    label: "Giá vé",
    value: "gia-ve",
  },
  {
    label: "Dịch vụ khác",
    value: "dich-vu-khac",
  },
];

export const newsTypeItems = [
  {
    label: "Công ty",
    value: "cong-ty",
  },
  {
    label: "Sự kiện",
    value: "su-kien",
  },
  {
    label: "Khuyến mãi",
    value: "khuyen-mai",
  },
];

export const galleryTypeItems = [
  {
    label: "Nội - ngoại thất tàu",
    value: "noi-ngoai-that-tau",
  },
  {
    label: "Đội ngũ nhân viên",
    value: "doi-ngu-nhan-vien",
  },
];

export const TravelHandbookTypeItems = [
  {
    label: "Khách sạn",
    value: "khach-san",
  },
  {
    label: "Nhà hàng",
    value: "nha-hang",
  },
  {
    label: "Thông tin cần biết",
    value: "thong-tin-can-biet",
  },
];
export const TypeProductFunc = [
  {
    label: "Tăng tốc độ tối đa",
    value: "bai-viet/tang-toc-do-toi-da",
    icon: "SlSpeedometer",
  },
  {
    label: "Tăng quãng đường tối đa",
    value: "bai-viet/tang-quang-duong-toi-da",
    icon: "GiRoad",
  },
  {
    label: "Tăng quà nhận được",
    value: "bai-viet/tang-qua-nhan-duoc",
    icon: "BsCoin",
  },
  {
    label: "Giảm thời gian chờ",
    value: "bai-viet/giam-thoi-gian-cho",
    icon: "GiBackwardTime",
  },
  {
    label: "Giày theo cấp độ",
    value: "bai-viet/giay-theo-cap-do",
    icon: "GiLevelThree",
  },
  {
    label: "Giày theo sự kiện",
    value: "bai-viet/giay-theo-su-kien",
    icon: "GiPartyFlags",
  },
  {
    label: "Giày có nhiệm vụ kèm theo",
    value: "bai-viet/gia-co-nhiem-vu-kem-theo",
    icon: "GiSubmarineMissile",
  },
  {
    label: "Giảm giá",
    value: "bai-viet/giam-gia",
    icon: "CiDiscount1",
  },
  {
    label: "Hỗ trợ chạy đêm",
    value: "bai-viet/ho-tro-chay-dem",
    icon: "GiNightSky",
  },
  {
    label: "Dùng thử",
    value: "bai-viet/Dung-thu",
    icon: "TbCoinOff",
  },
];
export const TypeProductItems = [
  {
    label: "Giày tốc độ",
    value: "giay-toc-do",
    image:
      "https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/Untitled%20design.jpg?alt=media&token=44d776a1-1027-4071-99b0-4ef438668324",
  },
  {
    label: "Nón vượt giới hạn",
    value: "non-vuot-gioi-han",
    image:
      "https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/UI%2Fhat.jpg?alt=media&token=53b27d57-de62-4967-b391-5d1fef711863",
  },

  {
    label: "Áo thách thức",
    value: "ao-thach-thuc",
    image:
      "https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/UI%2Fshirt.jpg?alt=media&token=92386420-6732-4e7b-b492-031e264a017d",
  },
  {
    label: "Quần phong cách",
    value: "quan-phong-cach",
    image:
      "https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/UI%2Fshort.jpg?alt=media&token=4a941d7d-0892-4b48-902c-d078eba9d7b5",
  },

  {
    label: "Phụ kiện sáng tạo",
    value: "phu-kien-sang-tao",
    image:
      "https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/UI%2Faccessory.jpg?alt=media&token=fb1205b4-1ebc-4b55-9d64-8828449d1be3",
  },
  {
    label: "Khác",
    value: "khac",
    image:
      "https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/UI%2Fanother.jpg?alt=media&token=f8494224-9618-47af-9965-2230fcacae62",
  },
];

export {};
