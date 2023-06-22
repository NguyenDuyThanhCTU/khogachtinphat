import React from "react";

import Card from "./Card/Card";
import { BsFacebook, BsMessenger, BsYoutube } from "react-icons/bs";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { SiZalo } from "react-icons/si";
import { SocialMediaDashboard } from "../../../../../Utils/Item";
const SocialMedia = () => {
  return (
    <div className="">
      <div className="  border rounded-md border-gray-500">
        <h3 className="p-5 shadow-lg rounded-t-md text-[25px] bg-[#353535]">
          Các kênh truyền thông
        </h3>
        <div className="p-5 grid grid-cols-4 gap-10 ">
          {SocialMediaDashboard.map((items, idx) => {
            let Icon;

            if (items.icon === "SiZalo") {
              Icon = SiZalo;
            } else if (items.icon === "BsFacebook") {
              Icon = BsFacebook;
            } else if (items.icon === "HiOutlineUserGroup") {
              Icon = HiOutlineUserGroup;
            } else if (items.icon === "BsMessenger") {
              Icon = BsMessenger;
            } else if (items.icon === "AiFillInstagram") {
              Icon = AiFillInstagram;
            } else if (items.icon === "FaTiktok") {
              Icon = FaTiktok;
            } else if (items.icon === "AiOutlineTwitter") {
              Icon = AiOutlineTwitter;
            } else if (items.icon === "BsYoutube") {
              Icon = BsYoutube;
            }
            return <Card title={items.title} Icon={Icon} image={items.image} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
