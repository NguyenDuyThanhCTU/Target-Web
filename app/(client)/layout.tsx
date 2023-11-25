import BookingButton from "@components/layout/client-layout/BookingButton";
import Copyright from "@components/layout/client-layout/Copyright";
import FloatButton from "@components/layout/client-layout/FloatButton";
import Footer from "@components/layout/client-layout/Footer";
import Header from "@components/layout/client-layout/Header";
import MobileFooter from "@components/layout/client-layout/MobileFooter";
import OnTop from "@components/layout/client-layout/OnTop";
import TopFooter from "@components/layout/client-layout/TopFooter";
import { Metadata } from "next";
import React from "react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "RunTech Motion+",
  description: "New Era of Technology",
};

const layout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="relative h-screen font-LexendDeca font-extralight">
      <Header />
      <div>{children}</div>
      <FloatButton />

      <div className="relative z-50">
        <OnTop />
      </div>
      <TopFooter />
      <Footer />
      <Copyright />
      <div className="w-full d:hidden p:fixed bottom-0">
        <MobileFooter />
      </div>

      {/* <div className="relative z-50">
        <BookingButton />
      </div>*/}
    </div>
  );
};

export default layout;
