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
    setNews,
    setGallery,
    setTravelHandbook,
    setIntroduction,

    setSale,
    setNotification,
    setFare,
    setDepartureSchedule,
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
        } else if (items.id === "Sale") {
          setSale(items);
        }
      });
    });

    getAllDocuments("Introduction").then((data: any) => {
      setIntroduction(data);
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
    setTimeout(() => {
      getProducts("news").then((data: any) => {
        setNews(data?.reverse());
      });
      getProducts("gallery").then((data: any) => {
        setGallery(data?.reverse());
      });
      getProducts("TravelHandbook").then((data: any) => {
        setTravelHandbook(data?.reverse());
      });
    }, 500);
    getAllDocuments("fare").then((data: any) => {
      setFare(data?.reverse());
    });
    getAllDocuments("departureschedule").then((data: any) => {
      setDepartureSchedule(data?.reverse());
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
        setIsRefetch("done");
      });
    } else if (isRefetch === "CRUD news") {
      getAllDocuments("news").then((data: any) => {
        setNews(data?.reverse());
        setIsRefetch("done");
      });
    } else if (isRefetch === "CRUD gallery") {
      getAllDocuments("gallery").then((data: any) => {
        setGallery(data?.reverse());
        setIsRefetch("done");
      });
    } else if (isRefetch === "CRUD TravelHandbook") {
      getAllDocuments("TravelHandbook").then((data: any) => {
        setTravelHandbook(data?.reverse());
        setIsRefetch("done");
      });
    } else if (isRefetch === "CRUD fare") {
      console.log("refetch");
      getAllDocuments("fare").then((data: any) => {
        setFare(data?.reverse());
        setIsRefetch("done");
      });
    } else if (isRefetch === "CRUD departureschedule") {
      getAllDocuments("departureschedule").then((data: any) => {
        setDepartureSchedule(data?.reverse());
        setIsRefetch("done");
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefetch]);

  return <></>;
};

export default Fetch;
