import AdminPage from "@components/admin/AdminPage";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "RunTech Motion+",
  description: "New Era of Technology",
};
const page = () => {
  return (
    <div>
      <AdminPage />
    </div>
  );
};

export default page;
