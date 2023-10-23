import Hero from "@components/client/Introduce/Hero";
import Slide from "@components/client/Introduce/Slide";
import React from "react";

const IntroductionPage = () => {
  return (
    <div className="flex  w-full flex-col items-center">
      <div className="d:w-[1440px] p:w-screen">
        <Hero />
        <Slide />
      </div>
    </div>
  );
};

export default IntroductionPage;
