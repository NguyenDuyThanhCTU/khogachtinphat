import React, { useState } from "react";
import { Progress, Space } from "antd";
const RightSide = () => {
  const [selectedIdx, setSelectedIdx] = useState(1);
  const Feature = [
    { id: 1, name: "Website" },
    { id: 2, name: "Khách hàng" },
    { id: 3, name: "Sản phẩm" },
  ];

  return (
    <div className="flex flex-col justify-between h-full w-[540px] text-white">
      <div>
        <div>hi</div>
        <div>
          Logo,tên website, link facebook, sđt, zalo,banner, quảng cáo, google
          map, địa chỉ, loại gạch, kích thước, khách hàng, sản phẩm
        </div>
        <div className="flex flex-row items-center gap-1">
          {Feature.map((feature, idx) => (
            <button
              key={idx}
              className={`p-2 px-4  rounded-lg ${
                selectedIdx === idx
                  ? "bg-white text-[#172C51]"
                  : "text-white bg-[#172C51]"
              }`}
              onClick={() => setSelectedIdx(idx)}
            >
              {feature.name}
            </button>
          ))}
        </div>
        <div class="neon-div bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 bg-gradient-45deg bg-no-repeat bg-scroll bg-opacity-100 w-full h-2 rounded-l-full my-5"></div>
      </div>

      <div className="text-white">
        <Progress
          percent={99.9}
          strokeColor={{ "50%": "#108ee9", "100%": "#87d068" }}
        />
        <Progress
          percent={99.9}
          status="active"
          strokeColor={{ from: "#108ee9", to: "#87d068" }}
        />
        <Space wrap>
          <Progress
            type="circle"
            percent={90}
            strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
          />
          <Progress
            type="circle"
            percent={100}
            strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
          />
        </Space>
      </div>
    </div>
  );
};

export default RightSide;
