"use client";
import React from "react";
import Video from "./Section/Video";

const OverallVideo: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Video topic="Danh sách giá vé tàu cao tốc" type="FastFerry" />
      <Video topic="Danh sách giá vé phà" type="ROROFerry" />
    </div>
  );
};

export default OverallVideo;
