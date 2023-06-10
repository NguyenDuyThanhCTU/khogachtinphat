import React from "react";
import { SiDatabricks } from "react-icons/si";
import { GiBrickPile } from "react-icons/gi";
const Product = ({ image, bricktype, bricksize, name }) => {
  return (
    <div>
      <div className="w-56 h-[330px] bg-gray-200 rounded-xl  hover:shadow-xl hover:scale-105 duration-300">
        <img
          src={image}
          alt="img"
          className="w-full h-56 object-cover rounded-t-xl"
        />
        <div className="flex  flex-col w-full p-2 px-3">
          <h3 className=" text-[18px]  truncate text-center cursor-pointer hover:underline">
            {name}
          </h3>

          <div className="text-[16px]">
            <p>
              <SiDatabricks className="inline-block text-[18px] mr-2" />
              {bricktype}
            </p>
          </div>
          <div className="text-[16px] flex w-full justify-between items-center">
            <p>
              <GiBrickPile className="  text-[18px] inline-block mr-2" />
              {bricksize}
            </p>
            <div className="px-2 py-1 border-2 rounded-xl border-black cursor-pointer hover:scale-105 duration-300 hover:bg-BlueFFhover hover:border-gray-300 hover:text-white">
              Liên hệ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
