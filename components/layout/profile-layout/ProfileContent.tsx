"use client";
import React from "react";

import { useStateProvider } from "@context/StateProvider";
import Account from "@components/admin/Content/Account/Account";
import { useData } from "@context/DataProviders";

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
            <></>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProfileContent;
