import React from "react";

import { BiTrendingUp } from "react-icons/bi";
import { useData } from "../../../Context/DataProviders";
import ProductAds from "./ProductAds";

const Ads = () => {
  const { Advertisement, Products } = useData();
  const newProducts = Products.slice(-3);

  return (
    <div className="h-full w-[270px] border font-LexendDeca">
      <div>
        <h3 className="font-bold text-[26px] py-5 px-5 my-5   bg-[#a0d2ba] w-full cursor-pointer ">
          Sản phẩm Mới
          <BiTrendingUp className="text-green-600 text-[30px] inline-block ml-1" />
        </h3>

        <div className="  w-full flex  justify-center">
          <div
            className="flex gap-5 flex-col items-center
          border rounded-xl w-[230px] border-[#598a73] p-5 shadow-lg"
          >
            {newProducts.map((items) => (
              <ProductAds
                image={items.image}
                name={items.name}
                bricktype={items.brickType}
                bricksize={items.brickSize}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center flex-col items-center ">
        <h3 className="font-bold text-[26px] py-5 px-5 my-5   bg-[#a0d2ba] w-full cursor-pointer shadow-2xl ">
          Chương trình khuyến mãi mới
        </h3>
        <div
          className="flex gap-5 flex-col items-center
          border rounded-xl w-[230px] border-[#061b11] p-5 shadow-lg"
        >
          {Advertisement.map((items, idx) => (
            <img
              key={idx}
              src={items}
              alt="img"
              className="object-fill w-[200px] h-[500px] shadow-2xl "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ads;
