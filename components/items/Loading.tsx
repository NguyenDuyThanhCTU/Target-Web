"use client";
import { useStateProvider } from "@context/StateProvider";
import React, { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  const { isLoading, setIsLoading } = useStateProvider();

  useEffect(() => {
    const handle = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    handle();
  }, [isLoading]);

  return (
    <div>
      {isLoading && (
        <div className="z-[100] fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className="text-xl font-bold text-primary flex flex-col items-center">
              <FaSpinner className="animate-spin text-2xl text-black " />
              <div className="text-xl font-bold text-white animate-pulse pt-1">
                Loading...
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loading;
