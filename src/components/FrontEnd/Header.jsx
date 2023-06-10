import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { SiZalo } from "react-icons/si";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className="h-20 bg-[#326E51] font-LexendDeca">
      <div className="flex justify-between items-center mx-20 h-full">
        <div className="flex flex-row gap-5 text-[30px] text-white cursor-pointer">
          <AiFillFacebook />
          <BsPhone />
          <SiZalo />
        </div>
        <div className="flex flex-row  items-center gap-28 ">
          <div className="relative text-white group  cursor-pointer">
            <input
              type="text"
              className="p-2 px-4 outline-none rounded-full bg-[#326E51] border-white border w-[300px]"
            />
            <FiSearch className="inline-block bg-white w-[36px] h-[36px] p-2 font-bold rounded-full text-[#F67D08] absolute right-[4px] bottom-[3px] group-hover:-right-10 duration-300" />
            <p className="bg-[#326E51] absolute top-2 left-4 group-hover:-top-3 group-hover:left-5 px-2 duration-300">
              Tìm kiếm
            </p>
          </div>
          <div>
            <button className="p-3 text-white border px-6 rounded-2xl hover:bg-white hover:text-[#326E51]">
              Liên hệ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
