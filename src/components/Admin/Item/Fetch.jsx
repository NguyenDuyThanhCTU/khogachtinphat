import React, { useEffect } from "react";

import { useStateProvider } from "../../../Context/StateProvider";
import { useData } from "../../../Context/DataProviders";
import {
  getDocuments,
  getProducts,
} from "../../../Config/Services/Firebase/FireStoreDB";

const Fetch = () => {
  const {
    setPhone,
    setBrickSize,
    setBrickType,
    setAdvertisement,
    setBanner,
    setLocation,
    setLogo,
    setWebsiteName,
    setProducts,
    setGmail,
    setAddress,
  } = useData();
  const { setSocialMedia } = useData();

  const { isRefetch, setIsRefetch } = useStateProvider();

  useEffect(() => {
    setIsRefetch(1);
  }, []);

  useEffect(() => {
    getDocuments("website").then((data) => {
      setPhone(data[0].phone);
      setGmail(data[0].gmail);
      setLocation(data[0].location);
      setAddress(data[0].address);
    });
    getDocuments("website").then((data) => {
      setLogo(data[2].websiteLogo);
      setWebsiteName(data[2].websiteName);
    });
    getDocuments("website").then((data) => {
      setBanner(data[1].Slide0);
      setAdvertisement(data[1].advertisement);
    });

    getDocuments("SocialMedia").then((data) => {
      setSocialMedia(data);
    });

    getProducts("ProductSize").then((data) => {
      setBrickSize(data.reverse());
    });
    getProducts("ProductTypes").then((data) => {
      setBrickType(data.reverse());
    });

    getDocuments("products").then((data) => {
      setProducts(data);
    });
  }, [isRefetch]);
  return <></>;
};

export default Fetch;
