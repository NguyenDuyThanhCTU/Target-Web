import ProfileSidebar from "@components/layout/profile-layout/ProfileSidebar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Thông tin người dùng",
  description: "New Era of Technology",
};

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-flow-col font-LexendDeca relative min-h-screen bg-no-repeat bg-cover bg-center bg-[url(https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/UI%2Fphoto_2023-11-10_15-24-54.jpg?alt=media&token=9d93d08d-a9eb-4df5-bed5-b33fcfb51f1b)] ">
      <div className="flex w-full bg-[rgba(41,75,97,0.8)]">
        <div
          className={`overflow-hidden  d:min-w-[310px] 
    d:block p:hidden`}
        >
          <ProfileSidebar />
        </div>
        <div className="flex-[80%]  ">{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
