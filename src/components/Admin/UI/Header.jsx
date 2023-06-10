import React, { useState } from "react";
import { useAuth } from "../../../Context/AuthProviders";
import DropDown from "../Item/DropDown";

const Header = () => {
  const { users } = useAuth();
  const [Click, setClick] = useState(0);

  return (
    <div className="h-14 bg-Blue3D font-LexendDeca text-white flex ">
      <div className="flex justify-between w-full mx-10 items-center relative ">
        <div className="flex gap-32 cursor-pointer">
          <div>
            <img
              src="https://image-sn.s3.amazonaws.com/Russo+Tech.png"
              alt="logo"
              className="w-14 h-[50px] inline-block "
            />
            <p className="inline-block ml-3">Th Dashboard</p>
          </div>
          <div className="flex items-center">
            <div className="group relative">
              <img
                src={users?.photoURL}
                alt="logo"
                className="w-12 h-12 inline-block"
              />
              <div className="absolute right-[-115px] top-[75px] hidden  group-hover:block ">
                <DropDown />
              </div>
            </div>

            <p className="inline-block ml-3">{users?.displayName}</p>
          </div>
        </div>

        <div className="cursor-pointer flex gap-20">
          <div onClick={() => setClick(1)}>
            <p className="">Sản phẩm</p>
          </div>
          <div onClick={() => setClick(2)}>
            <p className="">Something</p>
          </div>
        </div>
        <div
          className={`w-5 h-1 bg-red-500 absolute right-14 bottom-3 ${
            Click === 2
              ? "-translate-x-[5px] transform  transition duration-1000"
              : Click === 1
              ? "-translate-x-[165px] transform  transition duration-1000"
              : null
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Header;
