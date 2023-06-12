import React from "react";
import ProductAds from "../Home/Ads/ProductAds";
import { BiTrendingUp } from "react-icons/bi";

const Ads = () => {
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
            <ProductAds />
            <ProductAds />
            <ProductAds />
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
          <img
            src="https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/img%2Fbanner_chuong_trinh_khuyen_mai.jpg?alt=media&token=442ebb08-bccf-45e2-bf13-e78f61636876&_gl=1*vjdz5p*_ga*MTA1MjQ5NTQ0OS4xNjg0NDAxMjc5*_ga_CW55HF8NVT*MTY4NjM2ODU2OS41Ny4xLjE2ODYzNjg2MTEuMC4wLjA."
            alt="img"
            className="object-fill w-[200px] h-[500px] shadow-2xl "
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/img%2Fbanner_chuong_trinh_khuyen_mai.jpg?alt=media&token=442ebb08-bccf-45e2-bf13-e78f61636876&_gl=1*vjdz5p*_ga*MTA1MjQ5NTQ0OS4xNjg0NDAxMjc5*_ga_CW55HF8NVT*MTY4NjM2ODU2OS41Ny4xLjE2ODYzNjg2MTEuMC4wLjA."
            alt="img"
            className="object-fill w-[200px] h-[500px] shadow-2xl "
          />
        </div>
      </div>
    </div>
  );
};

export default Ads;
