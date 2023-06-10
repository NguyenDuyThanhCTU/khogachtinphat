import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [isUploadProduct, setIsUploadProduct] = useState(0);
  // isUploadProduct 0: Nothing to do, 1: Open Add products, 2: Delete products
  return (
    <StateContext.Provider value={{ isUploadProduct, setIsUploadProduct }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
