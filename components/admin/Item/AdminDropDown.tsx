"use client";
import React from "react";

import AddPost from "./DropDownItem/AddPost";

import AddBranch from "./DropDownItem/AddBranch";

import { useStateProvider } from "@context/StateProvider";

const AdminDropDown = () => {
  const { isDropDown } = useStateProvider();
  return (
    <div
      className={`duration-300 absolute left-0 right-0  ${
        isDropDown === "" ? "h-0" : "h-[100vh]"
      }`}
    >
      {isDropDown === "add-news" ? (
        <AddPost type="news" />
      ) : isDropDown === "add-gallery" ? (
        <AddPost type="gallery" />
      ) : isDropDown === "add-TravelHandbook" ? (
        <AddPost type="TravelHandbook" />
      ) : isDropDown === "add-branch" ? (
        <AddBranch />
      ) : null}
    </div>
  );
};

export default AdminDropDown;
