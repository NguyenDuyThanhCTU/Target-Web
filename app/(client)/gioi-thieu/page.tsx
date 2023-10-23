import Hero from "@components/client/Introduce/Hero";
import Slide from "@components/client/Introduce/Slide";
import ThemeLayout from "@components/items/ThemeLayout";
import React from "react";

const IntroductionPage = () => {
  return (
    <ThemeLayout>
      <div className="flex  w-full flex-col items-center">
        <Hero />
        <Slide />
      </div>
    </ThemeLayout>
  );
};

export default IntroductionPage;
