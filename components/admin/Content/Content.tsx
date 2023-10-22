"use client";
import React from "react";
import Contact from "./Webconfig/Contact/Contact";
import Trademark from "./Webconfig/Trademark/Trademark";
import SocialMedia from "./SocialMedia/SocialMedia";
import Slide from "./Slide/Slide";
import Post from "./Post/Post";
import Video from "./Video/Video";

import Product from "./Service/Product/Product";
import Order from "./Service/Order/Order";
import Branch from "./Service/Branch/Branch";
import Introduce from "./Service/Introduce/introduce";
import Account from "./Account/Account";
import Sale from "./Sale/Sale";
import { useStateProvider } from "@context/StateProvider";

const Content: React.FC = () => {
  const { isSelected } = useStateProvider();

  return (
    <div className="relative ">
      <div className="overflow-y-auto d:h-[100vh] p:h-auto d:w-full font-LexendDeca text-[#D8D8D8] p:w-auto">
        {isSelected === 0 ? (
          <div className="p-5 d:px-10 flex justify-start gap-10 d:flex-row p:flex-col p:px-2">
            <Contact />
            <Trademark />
          </div>
        ) : isSelected === 1 ? (
          <div className="p-5 d:px-10 flex justify-start gap-10 flex-col p:px-2">
            <Slide />
          </div>
        ) : isSelected === 2 ? (
          <div className="p-5 d:px-10 p:px-2 flex justify-start gap-10">
            <SocialMedia />
          </div>
        ) : isSelected === 3 ? (
          <>
            <div className="p-5 d:px-10 p:px-2 flex justify-start gap-10">
              <Post />
            </div>
          </>
        ) : isSelected === 4 ? (
          <>
            <div className="p-5 d:px-10 p:px-2 flex justify-start gap-10">
              <Video />
            </div>
          </>
        ) : isSelected === 5 ? (
          <>
            <div className="p-5 d:px-10 p:px-2 flex justify-start gap-10">
              <Account />
            </div>
          </>
        ) : isSelected === 6 ? (
          <>
            <div className="p-5 d:px-10 p:px-2 flex justify-start gap-10">
              <Introduce />
              <></>
            </div>
          </>
        ) : isSelected === 7 ? (
          <>
            <div className="p-5 d:px-10 p:px-2 flex justify-start gap-10">
              <Product />
            </div>
          </>
        ) : isSelected === 8 ? (
          <>
            <div className="p-5 d:px-10 p:px-2 flex justify-start gap-10">
              <>
                <Sale />
              </>
            </div>
          </>
        ) : isSelected === 9 ? (
          <>
            <div className="p-5 d:px-10 p:px-2 flex justify-start gap-10">
              <Order />
              <></>
            </div>
          </>
        ) : isSelected === 10 ? (
          <>
            <div className="p-5 d:px-10 p:px-2 flex justify-start gap-10">
              <Branch />
              <></>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Content;
