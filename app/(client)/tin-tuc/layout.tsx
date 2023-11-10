import ThemeLayout from "@components/items/ThemeLayout";
import React from "react";

const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeLayout>
      <div className=" bg-no-repeat bg-cover bg-[url(https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/UI%2Fphoto_2023-11-10_15-27-27.jpg?alt=media&token=85a5533b-b57f-46bc-90c7-51d9e809f630)] ">
        <div className="bg-[rgba(255,255,255,0.8)] ">
          <div className=" py-10   p:w-auto d:w-[1300px] p:mx-auto d:mx-auto grid p:grid-cols-1 d:grid-cols-7 font-LexendDeca font-extralight gap-10">
            {children}
          </div>
        </div>
      </div>
    </ThemeLayout>
  );
};

export default NewsLayout;
