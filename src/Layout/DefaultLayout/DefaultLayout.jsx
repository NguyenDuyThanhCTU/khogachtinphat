import React from "react";

import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Ads from "./Ads/Ads";
import PopUp from "./PopUp/PopUp";
import Fetch from "./Item/Fetch";
import Footer from "./Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="bg-black">
      {/* <div className="d:block p:hidden absolute z-10 h-[2500px]">
        <Sidebar />
      </div>
      <div className="absolute d:block p:hidden right-0 mt-20 h-[2500px] ">
        <Ads />
      </div> */}

      <div>
        <Header />
        <div className="mt-16 text-yellow-400 ">{children}</div>
      </div>
      <div className="fixed bottom-10 left-10 phone:bottom-24  phone:right-4 z-50">
        <PopUp />
      </div>
      <div className="z-40 absolute w-full ">
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
