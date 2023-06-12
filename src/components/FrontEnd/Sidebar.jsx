import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { Input, Radio, Space } from "antd";
import { BrickSize, BrickType } from "../../Utils/Item";
import { useStateProvider } from "../../Context/StateProvider";

const Sidebar = () => {
  const { setSortByType, setSortBySize, SortBySize, SortByType } =
    useStateProvider();
  const onChangeSize = (e) => {
    setSortBySize(e.target.value);
  };

  const onChangeType = (e) => {
    setSortByType(e.target.value);
  };
  return (
    <div className="h-full w-[270px] border font-LexendDeca">
      <div>
        <div className="flex items-center justify-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/img%2Fz4389707119439_b2577afc9718501441ffaf1ae38d1281-removebg-preview.png?alt=media&token=6066e727-39f9-4697-90a8-26eaba866ebc&_gl=1*xcjnck*_ga*MTA1MjQ5NTQ0OS4xNjg0NDAxMjc5*_ga_CW55HF8NVT*MTY4NjIxNjkxOS40Ny4xLjE2ODYyMTcwMTMuMC4wLjA."
            alt="logo"
            className="h-[79px] w-20"
          />
          <p className="text-[20px] text-center ml-2 font-bold">
            Gạch cao cấp <br /> Tín Phát
          </p>
        </div>
        <div className="h-[79px] mt-[21px] w-full  bg-[#a0d2ba] relative">
          <div className="h-[79px] bg-[#a0d2ba] w-10 absolute -right-2 -top-0"></div>
        </div>
        <div className="flex mx-12 mt-10 flex-col gap-2 font-light">
          <h3 className="text-[18px] font-normal">Phân loại</h3>
          <Radio.Group onChange={onChangeType} value={SortByType}>
            <Space direction="vertical" className="font-normal text-[18px]">
              <Radio value={" "}>Tất cả</Radio>
              {BrickType.map((data) => (
                <Radio value={data.name}>{data.name}</Radio>
              ))}
            </Space>
          </Radio.Group>

          {/* <div className="flex items-center gap-1 font-medium text-[13px] text-gray-700 ">
            Xem thêm <AiOutlineRight className="text-[11px]" />
          </div> */}
        </div>

        <div className="flex mx-12 mt-4 flex-col gap-2 border-t pt-2 font-light">
          <h3 className="text-[18px] font-normal">Kích thước</h3>
          <Radio.Group onChange={onChangeSize} value={SortBySize}>
            <Space direction="vertical" className="font-normal text-[18px]">
              <Radio value={" "}>Tất cả</Radio>
              {BrickSize.map((data) => (
                <Radio value={data.name}>{data.name}</Radio>
              ))}
            </Space>
          </Radio.Group>

          {/* <div className="flex items-center gap-1 font-medium text-[13px] text-gray-700 ">
            Xem thêm <AiOutlineRight className="text-[11px]" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
