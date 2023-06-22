import React from "react";

import { FaCloudUploadAlt } from "react-icons/fa";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { RxUpdate } from "react-icons/rx";
import { SlideDashboard } from "../../../../../Utils/Temp";

const Slide = () => {
  return (
    <div className="border rounded-xl">
      <div className="p-4 flex gap-5 ">
        <div>
          <h3 className="text-[30px] py-5 text-center text-[#03DAC5] font-bold">
            Cập nhật Slide trình chiếu
          </h3>
          <div className="grid grid-cols-2 gap-5 cursor-pointer overflow-y-scroll h-[300px]">
            {SlideDashboard.map((items) => (
              <div className="shadow-2xl bg-[#353535] h-[300px]">
                <div className="">
                  <img
                    src={items.image}
                    alt=""
                    className="w-[500px] object-cover"
                  />
                </div>
                <div className=" ml-3 ">
                  <h3 className="py-3 text-[25px] font-bold ">
                    Thay đổi hình ảnh
                  </h3>
                  <div className="mb-5 flex  items-center gap-2">
                    <label className="cursor-pointer px-4 py-2 text-[20px] bg-[#6A35EE] rounded-full  text-center z-10 flex items-center gap-2">
                      <AiOutlineCloudUpload className="text-white " />
                      <p>Tải lên</p>
                      <input
                        type="file"
                        name="upload-video"
                        className="w-0 h-0"
                      />
                    </label>
                    <p>hoặc</p>
                    <input
                      type="text"
                      placeholder="Nhập liên kết hình ảnh"
                      className="py-3 px-4 text-black  border rounded-full outline-none"
                    />
                  </div>
                </div>
                <div className="text-center uppercase py-2 border mx-2 bg-purple hover:bg-purpleAdmin hover:text-purpleHover hover:border-purpleHover text-blueAdmin border-blueAdmin ">
                  Cập nhật
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[400px] shadow-2xl bg-[#353535]">
          <div className="p-3">
            <div className="flex justify-between items-center text-[25px] pb-3">
              <p>Ngày cập nhật gần nhất</p>
              <RxUpdate />
            </div>
            <div>25-21200b</div>
            <div className="pl-3 mt-3 w-full">
              <div className="w-full">
                <h3 className="text-[18px] ">Tiêu đề</h3>
                <input
                  type="text"
                  className="outline-none px-3 py-2 w-full text-black"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-[18px]">Nội dung</h3>
                <textarea
                  type="text"
                  className="outline-none px-3 py-2 w-full text-black"
                />
              </div>
              <div className="text-center uppercase py-2 border mt-5 bg-purple hover:bg-purpleAdmin hover:text-purpleHover hover:border-purpleHover text-blueAdmin border-blueAdmin ">
                Cập nhật
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
