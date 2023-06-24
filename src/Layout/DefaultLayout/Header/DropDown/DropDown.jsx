import React, { useState } from "react";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { iconMapping } from "../../../../../../Utils/Item";
import { FaUserFriends } from "react-icons/fa";

const DropDown = ({ content, title }) => {
  const [DropDown, setDropDown] = useState(false);
  return (
    <div className="flex flex-col pl-5">
      <div
        className="flex items-center gap-2 font-bold text-[14px] py-2"
        onClick={() => {
          setDropDown(!DropDown);
        }}
      >
        {DropDown ? (
          <AiOutlineRight className="text-[16px]" />
        ) : (
          <AiOutlineDown className="text-[16px] " />
        )}
        <h3>{content}</h3>
      </div>

      <div
        className={`${
          DropDown ? "h-20" : "h-0"
        } w-full duration-1000 bg-none overflow-hidden  mx-5  text-[18px]`}
      >
        {title.map((items) => {
          let Icon = iconMapping[items.icon] || FaUserFriends;

          return (
            <div className="text-[14px] flex items-center gap-2 py-1">
              {Icon && <Icon className="text-colorBlueBold text-[18px]" />}
              <p>{items.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
