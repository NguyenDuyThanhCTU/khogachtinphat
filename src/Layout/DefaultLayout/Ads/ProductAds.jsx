import React from "react";
import { SiDatabricks } from "react-icons/si";
import { GiBrickPile } from "react-icons/gi";
import { useData } from "../../../Context/DataProviders";
const ProductAds = ({ image, name, bricktype, bricksize }) => {
  const { Phone } = useData();
  return (
    <div className="py-5 bg-gray-500">
      <div className="h-auto p:w-auto d:w-[190px] d:mx-0 p:mx-2  shadow-2xl    relative ">
        <div className="h-[200px] p:w-auto d:w-[188px] overflow-hidden">
          <img
            src={image}
            alt="img"
            className="w-full h-full object-cover rounded-t-xl hover:scale-110 duration-300"
          />
        </div>
        <div className="flex  flex-col w-full p-2 px-3 bg-black ">
          <div className="text-[16px] flex flex-col">
            <p className="truncate">
              <SiDatabricks className="inline-block text-[18px] mr-2 " />
              {bricktype}
            </p>
            <p className="truncate">
              <GiBrickPile className="  text-[18px] inline-block mr-2 " />
              {bricksize}
            </p>
          </div>
          <h3 className=" text-[18px]  px-1 rounded-lg truncate text-center cursor-pointer  absolute bottom-20 left-7 text-black bg-[#ffffff81]">
            {name}
          </h3>
          <a
            target="_blank"
            href={`http://zalo.me/${Phone}`}
            className="text-[#6347F9] px-2 py-1 rounded-xl bg-white cursor-pointer hover:scale-105 duration-300 hover:bg-BlueFFhover hover:text-white absolute top-3 right-3"
          >
            Liên hệ
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductAds;
