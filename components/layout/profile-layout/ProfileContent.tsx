"use client";
import React from "react";

import { useStateProvider } from "@context/StateProvider";
import Account from "@components/admin/Content/Account/Account";
import { useData } from "@context/DataProviders";
import UserFavorite from "@components/admin/Content/Account/UserFavorite";
import UserOrders from "@components/admin/Content/Account/UserOrders";
import UserChangePassword from "@components/admin/Content/Account/UserChangePassword";

const ProfileContent = () => {
  const { isSelected } = useStateProvider();
  const { currentUser } = useData();

  return (
    <div className="relative ">
      <div className="overflow-y-auto d:h-[100vh] p:h-auto d:w-full font-LexendDeca text-[#D8D8D8] p:w-auto">
        {isSelected === 0 ? (
          <div className="p-5 d:px-10 flex justify-start gap-10 d:flex-row p:flex-col p:px-2">
            <>
              <Account />
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
              <UserFavorite />
            </>
          </div>
        ) : isSelected === 4 ? (
          <div className="p-5 d:px-10 flex justify-start gap-10 flex-col p:px-2">
            <>
              <UserFavorite />
            </>
          </div>
        ) : isSelected === 5 ? (
          <div className="p-5 d:px-10 flex justify-start gap-10 flex-col p:px-2">
            <>
              <UserFavorite />
            </>
          </div>
        ) : isSelected === 6 ? (
          <div className="p-5 d:px-10 flex justify-start gap-10 flex-col p:px-2">
            <>
              <UserChangePassword />
            </>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProfileContent;
