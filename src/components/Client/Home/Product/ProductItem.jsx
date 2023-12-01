import React from "react";
import { SiDatabricks } from "react-icons/si";
import { GiBrickPile } from "react-icons/gi";
import { useData } from "../../../../Context/DataProviders";

const ProductItem = ({ image, bricktype, bricksize, name }) => {
  const { Phone } = useData();
  return (
    <div>
      <div className="p:w-auto d:w-56 h-[380px] text-yellow-400 bg-black rounded-xl  hover:shadow-xl hover:scale-105 duration-300">
        <img
          src={image}
          alt="img"
          className="w-full h-56 object-cover rounded-t-xl"
        />
        <div className="flex  flex-col w-full p-2 px-3 d:text-[18px] p:text-[14px]">
          <h3 className="p:text-[16px] d:text-[20px]  truncate text-center cursor-pointer hover:underline">
            {name}
          </h3>

          <div className="">
            <p>
              <GiBrickPile className="   inline-block mr-2" />
              {bricksize}
            </p>
          </div>
          <div className="flex w-full justify-between items-center">
            <p>
              <SiDatabricks className="inline-block mr-2" />
              {bricktype}
            </p>
            <a
              target="_blank"
              href={`http://zalo.me/${Phone}`}
              className="px-2 py-1 border-2 rounded-xl  border-black cursor-pointer hover:scale-105 duration-300 hover:bg-BlueFFhover hover:border-gray-300 hover:text-white"
            >
              Liên hệ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
