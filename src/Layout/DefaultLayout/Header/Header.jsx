import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useData } from "../../../Context/DataProviders";

import { AiFillCaretRight } from "react-icons/ai";

import { BsCart3 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

import DropDown from "./Item/DropDown";
import { HeaderItems } from "../../../Utils/Item";
import { useStateProvider } from "../../../Context/StateProvider";

const Header = () => {
  const [isSelected, setIsSelected] = useState(0);
  const [Hidden, setHidden] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [elementTop, setElementTop] = useState(95);
  const [IsTranslate, setTranslate] = useState(false);
  const { setSearch, Search } = useStateProvider();
  const [keyword, setKeyword] = useState();

  const targetPosition = 1;
  const { Logo, Websitename, BrickType } = useData();
  const { setSortByType } = useStateProvider();

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > targetPosition) {
      setElementTop(0);
      setTranslate(true);
    } else {
      setElementTop(95);
      setTranslate(false);
    }
  }, [scrollPosition]);

  const HandleOpenSubMenu = (type) => {
    setSortByType(type);
    navigate("/");
  };
  const HandleSearch = () => {
    setSearch(keyword);
  };

  return (
    <div className="d:h-[126px] font-LexendDeca  p:h-auto">
      <div className="bg-white ">
        <div className=" bg-none h-full relative  bg-white ">
          <div className=" w-full    text-[#1b365d] h-[92px] z-50 p:hidden d:flex justify-center">
            <div className="flex justify-between first-letter: items-center w-[1100px] ">
              <div className="flex items-center gap-10">
                <Link to="/">
                  <img src={Logo} alt="img" className="w-[90px]" />
                </Link>
                <div className=" text-[#2d94c4]">
                  <div className="flex items-center flex-col">
                    <h3 className="uppercase text-[24px] font-bold">
                      {Websitename}
                    </h3>
                    <span className="text-redPrimmary">
                      Uy tín - Chất lượng - Giá rẻ
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-20 items-center">
                <div className="relative text-black group  cursor-pointer">
                  <input
                    type="text"
                    onChange={(e) => setKeyword(e.target.value)}
                    className="p-2 px-4 outline-none rounded-full bg-white border-mainpink border w-[300px]"
                  />
                  <Link to={`/san-pham`}>
                    <FiSearch
                      onClick={() => HandleSearch()}
                      className={`${
                        Search ? "-right-10  " : "right-[4px] "
                      } bg-[#F67D08] text-white group-hover:text-white inline-block w-[36px] h-[36px] p-2 font-bold rounded-full absolute  bottom-[3px] group-hover:-right-10  duration-300 hover:scale-110`}
                    />
                  </Link>
                  <div
                    className={`${
                      Search ? "-top-3 left-5  " : "top-2 left-4"
                    } bg-white absolute   group-hover:-top-3 group-hover:left-5 px-2 duration-300`}
                  >
                    Tìm kiếm
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p:block d:hidden w-full  ">
            <div className="flex justify-between  items-center ">
              <Link to="/">
                <img src={Logo} alt="logo" className="h-[50px] m-5 " />
              </Link>
              <div className="flex items-center text-[60px]">
                {Hidden ? (
                  <RxCross1
                    className="bg-redPrimmary text-white p-2 "
                    onClick={() => setHidden(!Hidden)}
                  />
                ) : (
                  <MdOutlineFormatListBulleted
                    className="bg-redPrimmary text-white p-2 "
                    onClick={() => setHidden(!Hidden)}
                  />
                )}
              </div>
            </div>
            <div
              className={`${
                Hidden ? "h-screen" : "h-0 "
              } w-full duration-700 bg-[rgba(253,253,253,0.9)] overflow-y-scroll`}
            >
              {HeaderItems.map((items, idx) => {
                return (
                  <DropDown
                    idx={idx}
                    dropdown={BrickType}
                    content={items.name}
                    link={items.link}
                    setHidden={setHidden}
                  />
                );
              })}
            </div>
          </div>

          <div className="d:flex flex-col p:hidden w-full  items-center">
            <div
              className={`fixed z-10 ${
                IsTranslate
                  ? `w-full bg-white text-yellow-600 `
                  : " w-[1600px] bg-gray-600 text-white  "
              }   duration-300 h-[69px] rounded-lg flex justify-center px-5  items-center text-normal font-semibold gap-16`}
              style={{ top: `${elementTop}px` }}
            >
              {HeaderItems.map((items, idx) => {
                const sort = BrickType.filter(
                  (item) => item.parentParams === items.link
                );

                return (
                  <div className="relative" key={idx}>
                    <Link
                      to={`${
                        items.params ? `/${items.params}` : `/${items.link}`
                      }`}
                    >
                      <div className="group/main">
                        <div
                          className={`uppercase text-[18px] flex items-center justify-between  gap-2  hover:text-mainpink duration-500  ${
                            IsTranslate
                              ? ` ${
                                  isSelected === idx
                                    ? "text-mainpink"
                                    : "text-black"
                                }`
                              : `text-white`
                          }
  
                         `}
                          onClick={() => {
                            setIsSelected(idx);
                          }}
                        >
                          <p> {items.name}</p>
                          {items.link === "san-pham" && (
                            <AiFillCaretRight className="group-hover/main:rotate-90 duration-500" />
                          )}
                        </div>
                        {/*  */}
                        {items.link === "san-pham" && (
                          <div className="group-hover/main:block hidden relative z-20">
                            <div className="absolute h-10 w-full bg-none"></div>
                            <div className="  absolute  mt-5 w-[250px] max-h-[300px]  shadow-xl rounded-b-lg bg-white  overflow-y-auto overflow-x-visible">
                              {BrickType.map((items, idx) => (
                                <div className="">
                                  <div className="w-full">
                                    <div
                                      className="py-4 px-8 font-light bg-black text-yellow-400 group duration-300 hover:text-white hover:bg-mainpink flex justify-between items-center w-full"
                                      onClick={() =>
                                        HandleOpenSubMenu(items.typename)
                                      }
                                    >
                                      <span>{items.typename}</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {/*  */}
                      </div>
                    </Link>
                    <div
                      className={` ${
                        isSelected === idx
                          ? IsTranslate
                            ? "w-full bg-mainpink"
                            : "w-full bg-white"
                          : "w-0"
                      }  duration-500 h-2 rounded-3xl absolute -bottom-[23px]`}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
