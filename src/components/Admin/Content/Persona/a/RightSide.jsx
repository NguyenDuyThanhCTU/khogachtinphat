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
        <div className="flex items-center justify-center my-5">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/img%2Fz4389707119439_b2577afc9718501441ffaf1ae38d1281-removebg-preview.png?alt=media&token=6066e727-39f9-4697-90a8-26eaba866ebc&_gl=1*xcjnck*_ga*MTA1MjQ5NTQ0OS4xNjg0NDAxMjc5*_ga_CW55HF8NVT*MTY4NjIxNjkxOS40Ny4xLjE2ODYyMTcwMTMuMC4wLjA."
            alt="logo"
            className="h-[100px] w-30"
          />
          <p className="text-[20px] text-center ml-2 font-bold w-[140px]">
            Gạch cao cấp Tín Phát
          </p>
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
        <div>
          <div className="bg-gray-600 w-full h-[450px]"></div>
        </div>
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
