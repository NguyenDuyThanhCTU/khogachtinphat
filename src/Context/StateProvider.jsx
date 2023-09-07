import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [isUploadProduct, setIsUploadProduct] = useState(0);
  const [isSelected, setSelected] = useState(0);

  const [SortBySize, setSortBySize] = useState(" ");
  const [SortByType, setSortByType] = useState(" ");

  const [isRefetch, setIsRefetch] = useState();
  const [Search, setSearch] = useState("");
  return (
    <StateContext.Provider
      value={{
        Search,
        setSearch,
        isSelected,
        setSelected,
        isRefetch,
        setIsRefetch,
        isUploadProduct,
        setIsUploadProduct,
        SortBySize,
        setSortBySize,
        SortByType,
        setSortByType,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
