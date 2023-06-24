import React from "react";

import { Input, Radio, Space } from "antd";

import { useStateProvider } from "../../../Context/StateProvider";
import { useData } from "../../../Context/DataProviders";

const Sidebar = () => {
  const { setSortByType, setSortBySize, SortBySize, SortByType } =
    useStateProvider();
  const { Logo, Websitename, BrickSize, BrickType } = useData();

  const onChangeSize = (e) => {
    setSortBySize(e.target.value);
  };

  const onChangeType = (e) => {
    setSortByType(e.target.value);
  };
  return (
    <div className="h-full w-[270px] border font-LexendDeca d:block p:hidden">
      <div>
        <div className="flex items-center justify-center">
          <img src={Logo} alt="logo" className="h-[79px] w-20" />
          <p className="text-[23px] text-center ml-2 font-bold w-[140px]">
            {Websitename}
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
                <Radio value={data.typename}>{data.typename}</Radio>
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
                <Radio value={data.typename}>{data.typename}</Radio>
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
