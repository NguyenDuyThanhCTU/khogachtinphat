import React, { useState } from "react";
import { useAuth } from "../../../Context/AuthProviders";
import DropDown from "../Item/DropDown";
import { useStateProvider } from "../../../Context/StateProvider";
import Clock from "./Clock/Clock";

const Header = () => {
  const { users } = useAuth();

  return (
    <div className=" h-14 bg-Blue3D font-LexendDeca text-white flex ">
      <div className="flex justify-between w-full mx-10 items-center relative ">
        <div className="flex gap-32 cursor-pointer">
          <div className="flex items-center">
            <div className="group relative ">
              <img
                src={users?.photoURL}
                alt="logo"
                className="w-12 h-12 inline-block "
              />
              <div className="absolute right-[-115px] top-[75px] hidden  group-hover:block ">
                <DropDown />
              </div>
            </div>

            <p className="inline-block ml-3">{users?.displayName}</p>
          </div>
        </div>

        <div className="cursor-pointer flex gap-20 ">
          <div>
            <p className="hover:scale-110 duration-300 ">
              <Clock />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
