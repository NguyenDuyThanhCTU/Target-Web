import ThemeLayout from "@components/items/ThemeLayout";
import React from "react";

const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeLayout>
      <div className="  p:w-auto d:w-[1300px] p:mx-auto d:mx-auto grid p:grid-cols-1 d:grid-cols-7 font-LexendDeca font-extralight gap-10">
        {children}
      </div>
    </ThemeLayout>
  );
};

export default NewsLayout;
