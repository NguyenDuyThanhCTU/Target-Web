import { SiGooglemaps, SiZalo } from "react-icons/si";
import {
  BsFacebook,
  BsMessenger,
  BsYoutube,
  BsBatteryCharging,
  BsFillSendExclamationFill,
  BsFillSendCheckFill,
  BsFillSendXFill,
} from "react-icons/bs";
import { HiOutlineTicket, HiOutlineUserGroup } from "react-icons/hi";
import {
  AiFillInstagram,
  AiOutlineProfile,
  AiOutlineSlack,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FaFirstOrderAlt, FaTiktok } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiNetworkChart, BiSlideshow } from "react-icons/bi";
import {
  TbCarouselHorizontal,
  TbCubeSend,
  TbListDetails,
  TbSlideshow,
} from "react-icons/tb";
import {
  MdAirlineSeatReclineNormal,
  MdManageAccounts,
  MdOutlineLocalCarWash,
  MdOutlinePostAdd,
} from "react-icons/md";
import { CgListTree, CgSize } from "react-icons/cg";
import { IoMdColorWand } from "react-icons/io";
import { GiExitDoor } from "react-icons/gi";

import { CiViewList } from "react-icons/ci";
import { IconType } from "react-icons/lib";
import { IoFlashOutline } from "react-icons/io5";

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
  },
  {
    label: "Chính sách và quy định chung",
    value: "chinh-sach-va-quy-dinh-chung",
  },

  {
    label: "Chính sách bảo mật",
    value: "chinh-sach-bao-mat",
  },

  {
    label: "Phương thức thanh toán",
    value: "phuong-thuc-thanh-toan",
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
// export const TypeProductItems = [
//   {
//     label: "Giày theo sự kiện",
//     value: "giam-gia",
//   },
//   {
//     label: "Giày theo chủ đề",
//     value: "toc-do-toi-da",
//   },
//   {
//     label: "Giày theo nhu cầu",
//     value: "quang-duong-toi-da",
//   },
//   {
//     label: "Giày theo thuộc tính",
//     value: "tang-hieu-suat-kiem-coin",
//   },
//   {
//     label: "Thời gian chờ",
//     value: "thoi-gian-cho",
//   },
//   {
//     label: "Cấp độ giày",
//     value: "cap-do-giay",
//   },
//   {
//     label: "Sự kiện",
//     value: "su-kien",
//   },
//   {
//     label: "Nhiệm vụ",
//     value: "nhim-vu",
//   },

//   {
//     label: "Chạy đêm",
//     value: "chay-dem",
//   },
//   {
//     label: "Dùng thử",
//     value: "Dung-thu",
//   },
// ];
export const TypeProductItems = [
  {
    label: "Giày tốc độ",
    value: "giay-toc-do",
  },
  {
    label: "Nón không giới hạn",
    value: "non-khong-gioi-han",
  },

  {
    label: "Áo bức phá",
    value: "ao-buc-pha",
  },
  {
    label: "Quần phong cách",
    value: "quan-phong-cach",
  },

  {
    label: "Phụ kiện sáng tạo",
    value: "phu-kien-sang-tao",
  },
  {
    label: "Khác",
    value: "khac",
  },
];

export const IntroduceItems = [
  {
    label: "Giới thiệu",
    value: "/",
  },
  {
    label: "Tổng quan",
    value: "tong-quan",
  },
  {
    label: "Sơ đồ tổ chức",
    value: "so-do-to-chuc",
  },
  {
    label: "Điều lệ vận chuyển",
    value: "dieu-le-van-chuyen",
  },
  {
    label: "Điều khoản và điều kiện sử dụng",
    value: "dieu-khoan-va-dieu-kien-su-dung",
  },
  {
    label: "Chính sách bảo mật thông tin",
    value: "chinh-sach-bao-mat-thong-tin",
  },
  {
    label: "Điều kiện đặt vé trực tuyến",
    value: "dieu-kien-dat-ve-truc-tuyen",
  },
  {
    label: "Quy định hoàn đổi vé online",
    value: "quydinh-hoan-doi-ve-online",
  },
];

export const PolicyItems = [
  {
    title: "Điều lệ vận chuyển",
    content: "Nội dung bài viết 1",
    url: "dieu-le-van-chuyen",
    type: "policy",
    image: "",
  },
  {
    title: "Điều khoản và điều kiện sử dụng",
    content: "Nội dung bài viết ",
    url: "dieu-khoan-va-dieu-kien-su-dung",
    type: "policy",
    image: "",
  },
  {
    title: "Chính sách bảo mật thông tin",
    content: "Nội dung bài viết ",
    url: "chinh-sach-bao-mat-thong-tin",
    type: "policy",
    image: "",
  },
  {
    title: "Điều kiện đặt vé trực tuyến",
    content: "Nội dung bài viết ",
    url: "dieu-kien-dat-ve-truc-tuyen",
    type: "policy",
    image: "",
  },
  {
    title: "Quy định hoàn đổi vé online",
    content: "Nội dung bài viết ",
    url: "quy-dinh-hoan-doi-ve-online",
    type: "policy",
    image: "",
  },
];

export {};
