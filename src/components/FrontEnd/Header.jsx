import React, { useEffect, useState } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsMessenger, BsPhone, BsTiktok, BsTwitter } from "react-icons/bs";
import { SiZalo } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import { useData } from "../../Context/DataProviders";
import { getDocuments } from "../../Config/Services/Firebase/FireStoreDB";
import { HiUserGroup } from "react-icons/hi";

const Header = () => {
  const {
    Facebook,
    Fanpage,
    Message,
    Instagram,
    Tiktok,
    Twitter,
    Youtube,
    setFacebook,
    Phone,
    setPhone,
    setBrickSize,
    setBrickType,
    setAdvertisement,
    setBanner,
    setLocation,
    setLogo,
    setWebsiteName,
    setProducts,
    setGmail,
    setAdress,
    setFanpage,
    setMessage,
    setInstagram,
    setTiktok,
    setTwitter,
    setYoutube,
  } = useData();

  useEffect(() => {
    getDocuments("Swebsite").then((data) => {
      setWebsiteName(data[0].websiteName);
      setFacebook(data[0].facebook);
      setLogo(data[0].websiteLogo);
      setLocation(data[0].location);
      setBanner(data[0].banner);
      setAdvertisement(data[0].adv);
      setGmail(data[0].gmail);
      setAdress(data[0].address);
      setFanpage(data[0].fanpage);
      setMessage(data[0].message);
      setInstagram(data[0].instagram);
      setTiktok(data[0].tiktok);
      setTwitter(data[0].twitter);
      setYoutube(data[0].youtube);
    });

    getDocuments("Scustomer").then((data) => {
      setPhone(data[0].phone);
    });
    getDocuments("bricksize").then((data) => {
      setBrickSize(data[0].bricksize);
    });
    getDocuments("bricktype").then((data) => {
      setBrickType(data[0].bricktype);
    });
    getDocuments("products").then((data) => {
      setProducts(data);
    });
  }, []);

  const Connect = [
    {
      icon: AiFillFacebook,
      url: Facebook,
      style: "hover:bg-white hover:text-blue-600",
    },
    {
      icon: BsPhone,
      url: `tel:${Phone}`,
      style: "",
    },
    {
      icon: SiZalo,
      url: `http://zalo.me/${Phone}`,
      style: "hover:text-blue-400 hover:bg-white w-10",
    },
    {
      icon: HiUserGroup,
      url: Fanpage,
      style: "hover:bg-white hover:text-black p-1",
    },
    {
      icon: BsMessenger,
      url: Message,
      style: "hover:bg-white hover:text-blue-600 p-1",
    },
    {
      icon: AiOutlineInstagram,
      url: Instagram,
      style: "hover:bg-pink-500 hover:text-white",
    },
    {
      icon: BsTiktok,
      url: Tiktok,
      style: "hover:bg-black hover:text-white p-1",
    },
    {
      icon: BsTwitter,
      url: Twitter,
      style: "hover:bg-white hover:text-blue-600 p-1",
    },
    {
      icon: AiFillYoutube,
      url: Youtube,
      style: "hover:bg-red-600 hover:text-white p-1",
    },
  ];
  return (
    <div className="h-20 bg-[#326E51] font-LexendDeca">
      <div className="flex justify-between items-center mx-20 h-full">
        <div className="flex flex-row gap-5 text-[30px] text-white cursor-pointer">
          {Connect.map((items) => {
            let Icon = items.icon;
            console.log(Connect);
            return (
              <>
                {items.url && (
                  <a href={items} target="_blank">
                    <Icon
                      className={`hover:scale-125 duration-300 ${items.style}  `}
                    />
                  </a>
                )}
              </>
            );
          })}
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
            <a
              className="p-3 text-white border px-6 rounded-2xl hover:bg-white hover:text-[#326E51] "
              href={`http://zalo.me/${Phone}`}
              target="_blank"
            >
              Liên hệ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
