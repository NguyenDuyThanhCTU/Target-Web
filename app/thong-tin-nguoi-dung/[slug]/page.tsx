import ProfileHeader from "@components/layout/profile-layout/ProfileHeader";
import React from "react";

const page = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  console.log(searchParams, params);
  return (
    <div>
      {" "}
      <div className="d:relative p:fixed w-full z-20">
        <ProfileHeader />
      </div>
      <div className="d:mt-0 p:mt-16"></div>
    </div>
  );
};

export default page;
