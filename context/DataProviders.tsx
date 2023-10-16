"use client";
import React, { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export type DataContextType = {
  ContactData: any;
  setContactData: (contact: any) => void;
  TradeMarkData: any;
  setTradeMarkData: (trademark: any) => void;
  Slides: any;
  setSlides: (slides: any) => void;
  SocialMedia: any;
  setSocialMedia: (social: any) => void;
  Videos: any;
  setVideos: (video: any) => void;

  Accounts: any;
  setAccounts: (account: any) => void;
  UpdateId: any;
  setUpdateId: (update: any) => void;
  Products: any;
  setProducts: (product: any) => void;
  productTypes: any;
  setProductType: (productType: any) => void;
  Branches: any;
  setBranches: (branch: any) => void;
  Orders: any;
  setOrders: (account: any) => void;
  HeaderAdmin: any;
  setHeaderAdmin: (headeradmin: any) => void;
  Introduction: any;
  setIntroduction: (introduction: any) => void;

  Sale: any;
  setSale: (sale: any) => void;
  Notification: any;
  setNotification: (notification: any) => void;
  CartItems: any;
  setCartItems: (cartItem: any) => void;
  News: any;
  setNews: (news: any) => void;
  TravelHandbook: any;
  setTravelHandbook: (travelhandbook: any) => void;
  Gallery: any;
  setGallery: (gallery: any) => void;
  Fare: any;
  setFare: (fare: any) => void;
  DepartureSchedule: any;
  setDepartureSchedule: (departureSchedule: any) => void;
};

export const DataContext = createContext<DataContextType>({
  ContactData: "",
  setContactData: () => {},
  TradeMarkData: "",
  setTradeMarkData: () => {},
  Slides: [],
  setSlides: () => {},
  SocialMedia: [],
  setSocialMedia: () => {},
  Videos: [],
  setVideos: () => {},

  Accounts: "",
  setAccounts: () => {},
  UpdateId: "",
  setUpdateId: () => {},
  Products: [],
  setProducts: () => {},
  productTypes: [],
  setProductType: () => {},
  Branches: [],
  setBranches: () => {},
  Orders: [],
  setOrders: () => {},
  HeaderAdmin: "",
  setHeaderAdmin: () => {},
  Introduction: [],
  setIntroduction: () => {},

  Sale: {},
  setSale: () => {},
  Notification: [],
  setNotification: () => {},
  CartItems: [],
  setCartItems: () => {},
  News: [],
  setNews: () => {},
  TravelHandbook: [],
  setTravelHandbook: () => {},
  Gallery: [],
  setGallery: () => {},
  Fare: [],
  setFare: () => {},
  DepartureSchedule: [],
  setDepartureSchedule: () => {},
});

export const DataProviders: React.FC<Props> = ({ children }) => {
  //Website
  const [HeaderAdmin, setHeaderAdmin] = useState("");
  const [ContactData, setContactData] = useState("");
  const [TradeMarkData, setTradeMarkData] = useState("");
  const [Slides, setSlides] = useState([]);
  const [SocialMedia, setSocialMedia] = useState("");
  const [Videos, setVideos] = useState([]);
  const [Accounts, setAccounts] = useState("");

  //Cart
  const [UpdateId, setUpdateId] = useState("");

  //Services
  const [Products, setProducts] = useState([]);
  const [productTypes, setProductType] = useState([]);
  const [Branches, setBranches] = useState([]);
  const [Orders, setOrders] = useState([]);
  const [Introduction, setIntroduction] = useState([]);
  const [Sale, setSale] = useState({});
  const [Notification, setNotification] = useState([]);
  const [CartItems, setCartItems] = useState([]);
  //custom
  const [News, setNews] = useState([]);
  const [TravelHandbook, setTravelHandbook] = useState([]);
  const [Gallery, setGallery] = useState([]);
  const [Fare, setFare] = useState([]);
  const [DepartureSchedule, setDepartureSchedule] = useState([]);
  return (
    <DataContext.Provider
      value={{
        DepartureSchedule,
        setDepartureSchedule,
        Fare,
        setFare,
        News,
        setNews,
        TravelHandbook,
        setTravelHandbook,
        Gallery,
        setGallery,
        CartItems,
        setCartItems,
        Notification,
        setNotification,
        Sale,
        setSale,
        Introduction,
        setIntroduction,
        HeaderAdmin,
        setHeaderAdmin,

        Orders,
        setOrders,
        Branches,
        setBranches,
        UpdateId,
        setUpdateId,
        Products,
        setProducts,
        productTypes,
        setProductType,
        Accounts,
        setAccounts,

        Videos,
        setVideos,
        SocialMedia,
        setSocialMedia,
        Slides,
        setSlides,
        TradeMarkData,
        setTradeMarkData,
        ContactData,
        setContactData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
