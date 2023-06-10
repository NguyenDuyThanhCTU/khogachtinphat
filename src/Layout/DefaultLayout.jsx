import React from "react";
import Footer from "../components/FrontEnd/Footer";
import Header from "../components/FrontEnd/Header";
import Sidebar from "../components/FrontEnd/Sidebar";
import Ads from "../components/FrontEnd/Ads";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="absolute z-10 h-[2500px]">
        <Sidebar />
      </div>
      <div className="absolute right-0 mt-20 h-[2500px] ">
        <Ads />
      </div>
      <div className="ml-[270px] ">
        <Header />
        <div className="mr-[270px]">{children}</div>
      </div>
      <div className="z-40 absolute w-full">
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
