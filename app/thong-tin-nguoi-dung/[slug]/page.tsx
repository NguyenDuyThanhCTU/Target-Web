import ProfileContent from "@components/layout/profile-layout/ProfileContent";
import ProfileHeader from "@components/layout/profile-layout/ProfileHeader";
import { getDataByTypeProps } from "@components/lib/get-data";
import React from "react";

const page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const Data = await getDataByTypeProps("accounts", "username", params.slug);

  return (
    <div>
      {" "}
      <div className="d:relative p:fixed w-full z-20">
        <ProfileHeader Data={Data[0]} />
      </div>
      <div className="d:mt-0 p:mt-16">
        <ProfileContent />
      </div>
    </div>
  );
};

export default page;
