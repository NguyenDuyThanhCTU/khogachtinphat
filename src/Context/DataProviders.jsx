import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProviders = ({ children }) => {
  const [facebook, setFacebook] = useState();
  const [zalo, setZalo] = useState();
  const [phone, setPhone] = useState();
  return (
    <DataContext.Provider
      value={{ facebook, setFacebook, zalo, setZalo, phone, setPhone }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
