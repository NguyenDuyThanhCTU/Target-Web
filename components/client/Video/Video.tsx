"use client";
import { useData } from "@context/DataProviders";
import React from "react";

const Video = () => {
  const { Videos } = useData();

  return (
    <>
      {Videos.map((item: any, idx: number) => (
        <div key={idx} className="flex justify-center w-full">
          <iframe
            width="400"
            height="315"
            src={item.embedurl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      ))}
    </>
  );
};

export default Video;
