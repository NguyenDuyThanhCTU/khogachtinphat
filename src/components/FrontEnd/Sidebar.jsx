import React from "react";
import { AiOutlineRight } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className="h-full w-[270px] border font-LexendDeca">
      <div>
        <div className="flex items-center justify-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/img%2Fz4389707119439_b2577afc9718501441ffaf1ae38d1281-removebg-preview.png?alt=media&token=6066e727-39f9-4697-90a8-26eaba866ebc&_gl=1*xcjnck*_ga*MTA1MjQ5NTQ0OS4xNjg0NDAxMjc5*_ga_CW55HF8NVT*MTY4NjIxNjkxOS40Ny4xLjE2ODYyMTcwMTMuMC4wLjA."
            alt="logo"
            className="h-20 w-20"
          />
          <p className="text-[20px] text-center ml-2 font-bold">
            Gạch cao cấp <br /> Tín Phát
          </p>
        </div>
        <div className="flex mx-12 mt-10 flex-col gap-2 font-light">
          <h3 className="font-normal text-[18px]">Phân loại</h3>
          <div className="flex">
            <input type="radio" />
            <p className="ml-3">GC</p>
          </div>
          <div className="flex">
            <input type="radio" />
            <p className="ml-3">GC</p>
          </div>
          <div className="flex">
            <input type="radio" />
            <p className="ml-3">GC</p>
          </div>
          <div className="flex">
            <input type="radio" />
            <p className="ml-3">GC</p>
          </div>
          <div className="flex items-center gap-1 font-medium text-[13px] text-gray-700 ">
            Xem thêm <AiOutlineRight className="text-[11px]" />
          </div>
        </div>

        <div className="flex mx-12 mt-4 flex-col gap-2 border-t pt-2 font-light">
          <h3 className="text-[18px] font-normal">Kích thước</h3>
          <div className="flex">
            <input type="radio" />
            <p className="ml-3">15x90</p>
          </div>
          <div className="flex">
            <input type="radio" />
            <p className="ml-3">50x50</p>
          </div>
          <div className="flex">
            <input type="radio" />
            <p className="ml-3">60x60</p>
          </div>
          <div className="flex">
            <input type="radio" />
            <p className="ml-3">60x120</p>
          </div>
          <div className="flex items-center gap-1 font-medium text-[13px] text-gray-700 ">
            Xem thêm <AiOutlineRight className="text-[11px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
