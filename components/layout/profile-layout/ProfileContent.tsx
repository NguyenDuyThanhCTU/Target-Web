"use client";
import React from "react";

import { useStateProvider } from "@context/StateProvider";
import { useData } from "@context/DataProviders";
import UserFavorite from "@components/client/Profile/UserFavorite";
import UserOrders from "@components/client/Profile/UserOrders";
import Account from "@components/admin/Content/Account/Account";
import UserChangePassword from "@components/client/Profile/UserChangePassword";
import ProfileAccount from "@components/client/Profile/ProfileAccount";
import Inventory from "@components/client/Profile/Inventory";
import Exchange from "@components/client/Profile/Exchange";

const ProfileContent = () => {
  const { isSelected } = useStateProvider();
  const { currentUser } = useData();

  return (
    <div className="relative ">
      <div className="overflow-y-auto d:h-[100vh] p:h-auto d:w-full font-LexendDeca text-[#D8D8D8] p:w-auto">
        {isSelected === 0 ? (
          <div className="p-5 d:px-10 flex justify-start gap-10 d:flex-row p:flex-col p:px-2">
            <>
              <ProfileAccount />
            </>
          </div>
        ) : isSelected === 1 ? (
          <div className="p-5 d:px-10 flex justify-start gap-10 flex-col p:px-2">
            <>
              <UserFavorite />
            </>
          </div>
        ) : isSelected === 2 ? (
          <div className="p-5 d:px-10 flex justify-start gap-10 flex-col p:px-2">
            <>
              <UserOrders />
            </>
          </div>
        ) : isSelected === 3 ? (
          <div className="p-5 d:px-10 flex justify-start gap-10 flex-col p:px-2">
            <>
              <Inventory />
            </>
          </div>
        ) : isSelected === 4 ? (
          <div className="p-5 d:px-10 flex justify-start gap-10 flex-col p:px-2">
            <>
              <Exchange />
            </>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProfileContent;
