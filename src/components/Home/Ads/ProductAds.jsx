import React from "react";
import { SiDatabricks } from "react-icons/si";
import { GiBrickPile } from "react-icons/gi";
const ProductAds = () => {
  return (
    <div>
      <div
        className="w-[170px] h-[170px] bg-gray-200 rounded-xl  shadow-2xl   relative"
        onClick={() => console.log("a")}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/sanpham%2FNY18%20-%20GC15901.jpg?alt=media&token=a55bd82a-2347-47ea-bfd8-2edfed3f5b10&_gl=1*fc3qik*_ga*MTA1MjQ5NTQ0OS4xNjg0NDAxMjc5*_ga_CW55HF8NVT*MTY4NjMyOTUzNS41NS4xLjE2ODYzMjk1NDIuMC4wLjA."
          alt="img"
          className="w-full h-[124px]  object-cover rounded-t-xl"
        />
        <div className="flex  flex-col w-full p-2 px-3">
          <div className="text-[16px] flex gap-5">
            <p>
              <SiDatabricks className="inline-block text-[18px] mr-2" />
              GC
            </p>
            <p>
              <GiBrickPile className="  text-[18px] inline-block mr-2 " />
              50x90
            </p>
          </div>
          <h3 className=" text-[18px]  px-1 rounded-lg truncate text-center cursor-pointer  absolute bottom-14 text-black bg-[#ffffff81]">
            NY18 - GC15901
          </h3>
          <div className="text-[#6347F9] px-2 py-1 rounded-xl bg-white cursor-pointer hover:scale-105 duration-300 hover:bg-BlueFFhover hover:text-white absolute top-3 right-3">
            Liên hệ
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAds;
