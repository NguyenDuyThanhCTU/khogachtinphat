import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsList, BsPhone } from "react-icons/bs";
import { SiDatabricks, SiZalo } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import { useData } from "../../../Context/DataProviders";
import { Input, Radio, Space } from "antd";
import PhoneDropDown from "./DropDown/PhoneDropDown";
import { BiUser } from "react-icons/bi";
import { GiClayBrick } from "react-icons/gi";
import { useStateProvider } from "../../../Context/StateProvider";

const Header = () => {
  const { setSortByType, SortByType, setSortBySize, SortBySize } =
    useStateProvider();
  const { Phone, BrickSize, BrickType, Logo } = useData();
  const [isOpen, setIsOpen] = useState(0);
  console.log(BrickType);
  const Connect = [
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
  ];

  const onChangeType = (e) => {
    setSortByType(e.target.value);
  };

  const onChangeSize = (e) => {
    setSortBySize(e.target.value);
  };
  return (
    <div className="d:h-20 p:h-16 bg-[#326E51] font-LexendDeca">
      <div className="d:flex justify-between items-center mx-20 h-full p:hidden">
        <div className="flex flex-row gap-5 text-[30px] text-white cursor-pointer">
          {Connect.map((items) => {
            let Icon = items.icon;

            return (
              <>
                {items.url && (
                  <a href={items.url} target="_blank" rel="noreferrer">
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
              rel="noreferrer"
            >
              Liên hệ
            </a>
          </div>
        </div>
      </div>

      {/* <-- Phone --> */}
      <div className="p:flex d:hidden relative z-20">
        <div className="flex justify-between items-center mx-2 w-full">
          <div className="" onClick={() => setIsOpen(2)}>
            <GiClayBrick className="text-[50px] text-white" />
          </div>
          <div>
            <img src={Logo} alt="logo" className="w-16 " />
          </div>

          <div onClick={() => setIsOpen(1)}>
            <SiDatabricks className="text-[40px] text-white" />
          </div>
        </div>

        <div
          className={`h-screen ${
            isOpen === 1 ? "w-full" : " w-0 "
          } absolute flex right-0  duration-300 overflow-hidden`}
        >
          <div
            className="flex-[30%] h-full  bg-[rgba(0,0,0,0.4)]"
            onClick={() => setIsOpen(0)}
          ></div>
          <div
            className={`${
              isOpen === 1
                ? "flex-[70%] h-full bg-white overflow-y-scroll"
                : "hidden"
            } z-50`}
          >
            <div className="mx-5 mt-10">
              <div className="flex items-center text-black text-[15px] gap-2 pb-5">
                <AiOutlineStar className="text-colortopdownBlue" />
                <p>Danh sách loại gạch</p>
              </div>
              <div className="flex items-start pr-5 flex-col gap-5  py-4 border-b border-t">
                <Radio.Group onChange={onChangeType} value={SortByType}>
                  <Space
                    direction="vertical"
                    className="font-normal text-[18px] "
                  >
                    <Radio value={" "}>Tất cả</Radio>
                    {BrickType.map((data) => (
                      <Radio value={data.typename}>{data.typename}</Radio>
                    ))}
                  </Space>
                </Radio.Group>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`h-screen ${
            isOpen === 2 ? "w-full" : " w-0"
          } absolute flex duration-300 overflow-hidden`}
        >
          <div
            className={`${
              isOpen === 2 ? "flex-[70%] h-full bg-white" : "hidden"
            }`}
          >
            <div className="mx-5 mt-10">
              <div className="flex items-center text-black text-[15px] gap-2 pb-5">
                <AiOutlineStar className="text-colortopdownBlue" />
                <p>Danh sách kích cỡ gạch</p>
              </div>
              <div className="flex  flex-col gap-5  py-4 border-b border-t">
                <Radio.Group onChange={onChangeSize} value={SortBySize}>
                  <Space
                    direction="vertical"
                    className="font-normal text-[18px]"
                  >
                    <Radio value={" "}>Tất cả</Radio>
                    {BrickSize.map((data) => (
                      <Radio value={data.typename}>{data.typename}</Radio>
                    ))}
                  </Space>
                </Radio.Group>
              </div>
            </div>
          </div>
          <div
            className="flex-[30%] h-full bg-[rgba(0,0,0,0.4)]"
            onClick={() => setIsOpen(0)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
