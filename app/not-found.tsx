"use client";
import React from "react";
import Notfound from "@assets/animation/NotFound.json";
import Lottie from "lottie-react";
const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Lottie animationData={Notfound} />
    </div>
  );
};

export default NotFound;
