import React from "react";
import Footer from "../components/FrontEnd/Footer";
import Header from "../components/FrontEnd/Header";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
