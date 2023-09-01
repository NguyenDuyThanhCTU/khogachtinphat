import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
// import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useStateProvider } from "../../../../Context/StateProvider";

const DropDown = ({ content, link, setHidden, idx, dropdown }) => {
  const [isSelected, setIsSelected] = useState(true);
  const { setSortByType } = useStateProvider();
  const navigate = useNavigate();
  const HandleOpenSubMenu = (type) => {
    setSortByType(type);
    navigate("/san-pham");
  };

  return (
    <div
      className={`${
        idx === 0 && "border-t-0"
      } border-t border-gray-200 items-start justify-between py-3  mx-5 flex flex-col`}
    >
      <div className="flex items-center justify-between w-full">
        <Link to={`/${link}`}>
          <h3
            className="text-[20px] font-normal"
            onClick={() => {
              setHidden(false);
            }}
          >
            {content}
          </h3>
        </Link>
        {link === "san-pham" && (
          <AiFillCaretDown onClick={() => setIsSelected(!isSelected)} />
        )}
      </div>

      {link === "san-pham" && (
        <div
          className={`flex flex-col  overflow-y-scroll duration-300 gap-2 my-2 ml-2  ${
            isSelected ? "h-0" : "h-auto"
          }`}
        >
          {dropdown.map((items, idx) => (
            <div>
              {" "}
              <div className="flex items-center justify-between">
                <div
                  className="p-4 font-light text-black group duration-300 hover:text-red-500 hover:bg-mainpink flex justify-between items-center w-full"
                  onClick={() => {
                    HandleOpenSubMenu(items.typename);
                  }}
                >
                  <h3
                    onClick={() => {
                      setHidden(false);
                    }}
                    className="cursor-pointer"
                  >
                    {items.typename}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
