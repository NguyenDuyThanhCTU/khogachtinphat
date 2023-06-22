import React from "react";
import { TbListDetails, TbSlideshow } from "react-icons/tb";
import { BiNetworkChart } from "react-icons/bi";
import { MdOutlinePostAdd } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { CgListTree } from "react-icons/cg";
import { useStateProvider } from "../../../Context/StateProvider";
import { ProductSidebarAdmin, WebsiteSidebarAdmin } from "../../../Utils/Item";
const Sidebar = () => {
  const { isSelected, setSelected } = useStateProvider();

  return (
    <div className="bg-black  h-screen text-white border-r border-gray-800">
      <div className="w-full flex items-center justify-center border-b border-gray-800 py-3">
        <img
          src="https://image-sn.s3.amazonaws.com/Russo+Tech.png"
          alt="logo"
          className="w-24 h-[100] inline-block circle-animation"
        />
        <p className="inline-block ml-3 text-[25px]">Th Dashboard</p>
      </div>
      <div className="flex flex-col ml-14 gap-16 mt-10 relative">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-[25px]">Website</h3>
          <div className="flex flex-col items-start gap-10">
            {WebsiteSidebarAdmin.map((items, idx) => {
              let Icon;

              if (items.icon === "TbListDetails") {
                Icon = TbListDetails;
              } else if (items.icon === "TbSlideshow") {
                Icon = TbSlideshow;
              } else if (items.icon === "BiNetworkChart") {
                Icon = BiNetworkChart;
              } else if (items.icon === "MdOutlinePostAdd") {
                Icon = MdOutlinePostAdd;
              }

              return (
                <div
                  className={`flex gap-3 items-center cursor-pointer hover:scale-125 duration-300 ${
                    isSelected === idx ? "text-blue-400" : "border-white"
                  }`}
                  onClick={() => setSelected(idx)}
                >
                  {Icon && (
                    <Icon
                      className={`border-2 rounded-full text-[30px] p-[3px] ${
                        isSelected === idx ? "border-blue-400" : "border-white"
                      }`}
                    />
                  )}
                  <p> {items.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h3 className="text-[28px]">Sản phẩm</h3>
          <div className="flex flex-col items-start gap-10">
            {ProductSidebarAdmin.map((items, idx) => {
              let Icon;

              if (items.icon === "AiOutlineUnorderedList") {
                Icon = AiOutlineUnorderedList;
              } else if (items.icon === "CgListTree") {
                Icon = CgListTree;
              }
              return (
                <div
                  className={`flex gap-3 items-center cursor-pointer hover:scale-125 duration-300 ${
                    isSelected === idx + 4 ? "text-blue-400" : "border-white"
                  }`}
                  onClick={() => setSelected(idx + 4)}
                >
                  {Icon && (
                    <Icon
                      className={`border-2 rounded-full text-[30px] p-[3px]  ${
                        isSelected === idx + 4
                          ? "border-blue-400"
                          : "border-white"
                      }`}
                    />
                  )}
                  <p> {items.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`h-12 w-1 bg-blue-400 overflow-hidden rounded-t-full rounded-b-full absolute right-0 top-[43px]
        duration-300 transition transform 
        ${
          isSelected === 0
            ? "translate-y-0"
            : isSelected === 1
            ? "translate-y-[73px]"
            : isSelected === 2
            ? "translate-y-[142px]"
            : isSelected === 3
            ? "translate-y-[212px]"
            : isSelected === 4
            ? "translate-y-[368px]"
            : isSelected === 5
            ? "translate-y-[438px]"
            : null
        }`}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
