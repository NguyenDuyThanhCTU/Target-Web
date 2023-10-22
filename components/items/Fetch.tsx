"use client";
import {
  getAllDocuments,
  getProducts,
} from "@config/Services/Firebase/FireStoreDB";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import React, { useEffect } from "react";

const Fetch: React.FC = () => {
  const {
    // Website
    setSocialMedia,
    setSlides,
    setContactData,
    setTradeMarkData,
    setAccounts,

    // Service
    setProductType,
    setProducts,
    setOrders,
    setBranches,
    setVideos,
    setPosts,
    setIntroduction,

    setSale,
    setNotification,
    // custom
  } = useData();

  const { isRefetch, setIsRefetch } = useStateProvider();

  useEffect(() => {
    getAllDocuments("website").then((data: any) => {
      data?.forEach((items: any) => {
        if (items.id === "Contact") {
          setContactData(items);
        } else if (items.id === "Trademark") {
          setTradeMarkData(items);
        } else if (items.id === "SocialMedia") {
          setSocialMedia(items.Data);
        } else if (items.id === "Introduction") {
          setIntroduction(items);
        } else if (items.id === "Sale") {
          setSale(items);
        }
      });
    });

    getAllDocuments("accounts").then((data: any) => {
      setAccounts(data);
    });

    getAllDocuments("notification").then((data: any) => {
      setNotification(data);
    });

    getAllDocuments("slide").then((data: any) => {
      setSlides(data?.reverse());
    });

    getAllDocuments("productTypes").then((data: any) => {
      setProductType(data);
    });

    getAllDocuments("orders").then((data: any) => {
      setOrders(data?.reverse());
    });

    getAllDocuments("branches").then((data: any) => {
      setBranches(data?.reverse());
    });

    getAllDocuments("videos").then((data: any) => {
      setVideos(data?.reverse());
    });
    getProducts("posts").then((data: any) => {
      setPosts(data);
    });
    getProducts("products").then((data: any) => {
      setProducts(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isRefetch === "CRUD website") {
      getAllDocuments("website").then((data: any) => {
        data?.forEach((items: any) => {
          if (items.id === "Contact") {
            setContactData(items);
          } else if (items.id === "Trademark") {
            setTradeMarkData(items);
          } else if (items.id === "SocialMedia") {
            setSocialMedia(items.Data);
          } else if (items.id === "Introduction") {
            setIntroduction(items);
          } else if (items.id === "Sale") {
            setSale(items);
          }
        });
      });
      setIsRefetch("done");
    } else if (isRefetch === "CRUD accounts") {
      getAllDocuments("accounts").then((data: any) => {
        setAccounts(data);
      });
      setIsRefetch("done");
    } else if (isRefetch === "CRUD notification") {
      getAllDocuments("notification").then((data: any) => {
        setNotification(data);
      });
      setIsRefetch("done");
    } else if (isRefetch === "CRUD slide") {
      getAllDocuments("slide").then((data: any) => {
        setSlides(data?.reverse());
      });
      setIsRefetch("done");
    } else if (isRefetch === "CRUD productTypes") {
      getAllDocuments("productTypes").then((data: any) => {
        setProductType(data);
      });
      setIsRefetch("done");
    } else if (isRefetch === "CRUD orders") {
      getAllDocuments("orders").then((data: any) => {
        setOrders(data?.reverse());
      });
      setIsRefetch("done");
    } else if (isRefetch === "CRUD branches") {
      getAllDocuments("branches").then((data: any) => {
        setBranches(data?.reverse());
      });
      setIsRefetch("done");
    } else if (isRefetch === "CRUD videos") {
      getAllDocuments("videos").then((data: any) => {
        setVideos(data?.reverse());
      });
      setIsRefetch("done");
    } else if (isRefetch === "CRUD products") {
      getProducts("products").then((data: any) => {
        setProducts(data);
      });
    } else if (isRefetch === "CRUD posts") {
      getProducts("posts").then((data: any) => {
        setPosts(data);
      });
      setIsRefetch("done");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefetch]);

  return <></>;
};

export default Fetch;
