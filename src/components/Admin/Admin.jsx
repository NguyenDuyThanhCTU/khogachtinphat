import React, { useEffect } from "react";
import { useAuth } from "../../Context/AuthProviders";
import { useNavigate } from "react-router-dom";
import Header from "./UI/Header";
import Webconfig from "./UI/WebConfig";
import AddProduct from "./AddProduct/AddProduct";
import { useStateProvider } from "../../Context/StateProvider";

const Admin = () => {
  const { verify } = useAuth();
  const { isUploadProduct } = useStateProvider();
  const navigate = useNavigate();
  const logo1 = "https://image-sn.s3.amazonaws.com/Russo+Tech.png";
  const logo2 = "https://image-sn.s3.amazonaws.com/NDTh.png";

  useEffect(() => {
    if (!verify) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Header />
      <div>{isUploadProduct === 1 && <AddProduct />}</div>

      <Webconfig />
    </>
  );
};

export default Admin;
