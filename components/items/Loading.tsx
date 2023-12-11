"use client";
import { useStateProvider } from "@context/StateProvider";
import Lottie from "lottie-react";
import React, { useEffect } from "react";
import LoadingAnimation from "@assets/animation/loading.json";

const Loading = () => {
  const { isLoading } = useStateProvider();

  return (
    <div>
      {isLoading && (
        <div className="z-[100] fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className="text-xl font-bold text-primary flex flex-col items-center">
              <Lottie animationData={LoadingAnimation} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loading;
