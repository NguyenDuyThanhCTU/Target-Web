"use client";
import React from "react";
import Post from "./Section/Post";
import { useData } from "@context/DataProviders";
import {
  TravelHandbookTypeItems,
  galleryTypeItems,
  newsTypeItems,
} from "@assets/item";

const OverallPosts: React.FC = () => {
  const { News, Gallery, TravelHandbook } = useData();
  return (
    <div className="w-full flex flex-col">
      <Post
        Data={News}
        title="Danh sách tin tức"
        type="news"
        typeItems={newsTypeItems}
      />
      <Post
        Data={Gallery}
        title="Danh sách hình ảnh"
        type="gallery"
        typeItems={galleryTypeItems}
      />
      <Post
        Data={TravelHandbook}
        title="Danh sách hướng dẫn du lịch"
        type="TravelHandbook"
        typeItems={TravelHandbookTypeItems}
      />
    </div>
  );
};

export default OverallPosts;
