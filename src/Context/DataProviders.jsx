import React, { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataProviders = ({ children }) => {
  // Default
  const [Gmail, setGmail] = useState("");
  const [Adress, setAddress] = useState("");
  const [Location, setLocation] = useState("");
  const [Phone, setPhone] = useState("");

  const [Facebook, setFacebook] = useState();
  const [Products, setProducts] = useState([]);
  const [Logo, setLogo] = useState("");
  const [Websitename, setWebsiteName] = useState("");
  const [Fanpage, setFanpage] = useState("");
  const [Message, setMessage] = useState("");
  const [Instagram, setInstagram] = useState("");
  const [Tiktok, setTiktok] = useState("");
  const [Twitter, setTwitter] = useState("");
  const [Youtube, setYoutube] = useState("");

  // Custom
  const [BrickSize, setBrickSize] = useState([]);
  const [BrickType, setBrickType] = useState([]);
  const [Advertisement, setAdvertisement] = useState([]);
  const [Banner, setBanner] = useState([]);

  return (
    <DataContext.Provider
      value={{
        Fanpage,
        setFanpage,
        Message,
        setMessage,
        Instagram,
        setInstagram,
        Tiktok,
        setTiktok,
        Twitter,
        setTwitter,
        Youtube,
        setYoutube,
        Gmail,
        setGmail,
        Adress,
        setAddress,
        Websitename,
        setWebsiteName,
        Advertisement,
        setAdvertisement,
        Products,
        setProducts,
        Facebook,
        setFacebook,
        Phone,
        setPhone,
        BrickSize,
        setBrickSize,
        BrickType,
        setBrickType,
        Banner,
        setBanner,
        Location,
        setLocation,
        Logo,
        setLogo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
