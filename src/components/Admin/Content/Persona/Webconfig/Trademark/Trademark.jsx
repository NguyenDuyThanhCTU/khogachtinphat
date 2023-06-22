import React from "react";
import { useData } from "../../../../../../Context/DataProviders";

const Trademark = () => {
  const { Websitename, Logo } = useData();
  return (
    <div className="bg-[#353535] text-white w-[400px] rounded-xl shadow-xl">
      <div className="p-4 ">
        <h3 className="text-[25px] text-center ">Thương hiệu website</h3>
        <div className="flex flex-col gap-3 mt-5">
          <label>Tên website</label>
          <div className="flex gap-5">
            <input
              type="text"
              placeholder={Websitename}
              className="px-4 py-2 text-black outline-none rounded-2xl bg-gray-300 bg-gray-300"
            />
            <button className="hover:bg-[#bb86fc37] hover:text-[#BB86FC] text-[#74affc] bg-[#74affc43] px-3 rounded-xl">
              Cập nhật
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-10">
          <label>Logo website</label>
          <div className="flex gap-5">
            <input
              type="text"
              placeholder={Logo}
              className="px-4 py-2 text-black outline-none rounded-2xl bg-gray-300"
            />
            <button className="hover:bg-[#bb86fc37] hover:text-[#BB86FC] text-[#74affc] bg-[#74affc43] px-3 rounded-xl">
              Cập nhật
            </button>
          </div>
          <div className="flex justify-center mt-10 w-full h-[300px] border rounded-lg">
            <img
              src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/trang-chu/prudential-logo-181x32.png"
              alt="logo"
              className="object-contain p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trademark;
