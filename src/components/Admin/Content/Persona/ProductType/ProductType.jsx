import React, { useEffect, useState } from "react";
import { FcViewDetails } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";

import { Popconfirm, message } from "antd";
import { useStateProvider } from "../../../../../Context/StateProvider";
import { delDocument } from "../../../../../Config/Services/Firebase/FireStoreDB";
import { useData } from "../../../../../Context/DataProviders";

const ProductType = () => {
  const { setIsUploadProduct, setIsRefetch } = useStateProvider();
  const { BrickSize, BrickType } = useData();

  const HandleDelete = (id, type) => {
    if (type === "type") {
      delDocument("ProductTypes", id).then(() => {
        message.success("Xóa sản phẩm thành công!");
        setIsRefetch("ProductTypes");
      });
    } else if (type === "size") {
      delDocument("ProductSize", id).then(() => {
        message.success("Xóa sản phẩm thành công!");
        setIsRefetch("ProductSize");
      });
    }
  };

  return (
    <div>
      <div className="h-full w-full flex gap-5">
        <div className="">
          <div className="flex flex-col justify-between bg-[#353535] shadow-gray-700 p-5 rounded-xl">
            <div className="ml-3 mb-2 bg-[#353535] shadow-gray-700 p-5 rounded-xl w-[450px]">
              <h3 className="text-[24px] text-center font-bold mb-2">
                Danh sách loại gạch
              </h3>
              <div className="">
                <div className=" py-2  ml-1 h-[281px] overflow-y-scroll  ">
                  {BrickType?.map((data, idx) => (
                    <div className="flex flex-row items-center my-2  ml-1 justify-between mx-10 gap-2 pb-2">
                      <div className="group relative ">
                        <FiEdit className="text-red-600 hover:scale-125 duration-300 " />
                        <div className="w-[120px] bg-white opacity-90 absolute -top-2 h-8 left-5 rounded-lg hidden group-hover:block ">
                          <div className="mx-3 flex  justify-between text-[24px] h-full items-center ">
                            <FcViewDetails className="hover:scale-125 duration-300" />
                            <FiEdit className="text-green-600 hover:scale-125 duration-300" />
                            <Popconfirm
                              title="Xóa sản phẩm"
                              description="Bạn muốn xóa sản phẩm này?"
                              onConfirm={() => {
                                HandleDelete(data.id, "type");
                              }}
                              onCancel={() => {
                                message.error("Sản phẩm chưa được xóa!");
                              }}
                              okText="Yes"
                              okType="danger"
                              cancelText="No"
                            >
                              <MdDeleteForever className="text-red-600 hover:scale-125 duration-300" />
                            </Popconfirm>
                          </div>
                          <div className="absolute bg-none w-3 h-8 top-0 -left-2"></div>
                        </div>
                      </div>
                      <p className=" w-[60px]">{data.typename}</p>

                      {data.daysSinceCreation > 0 ? (
                        <>
                          {" "}
                          <p className="text-[12px] w-[85px] truncate  py-1 border px-2 rounded-3xl text-orange-300 border-orange-300">
                            {data.daysSinceCreation} ngày trước
                          </p>
                        </>
                      ) : (
                        <>
                          {" "}
                          <p className="text-[12px]  truncate  border px-2 py-1 rounded-3xl text-green-300 border-green-300">
                            Bây giờ
                          </p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between bg-[#353535] shadow-gray-700 p-5 rounded-xl">
            <div className="ml-3 mb-2 bg-[#353535] shadow-gray-700 p-5 rounded-xl w-[450px]">
              <h3 className="text-[24px] text-center font-bold mb-2">
                Danh sách kích cở gạch
              </h3>
              <div className="">
                <div className=" py-2  ml-1 h-[281px] overflow-y-scroll  ">
                  {BrickSize?.map((data, idx) => (
                    <div className="flex flex-row items-center my-2  ml-1 justify-between mx-10 gap-2 pb-2">
                      <div className="group relative ">
                        <FiEdit className="text-red-600 hover:scale-125 duration-300 " />
                        <div className="w-[120px] bg-white opacity-90 absolute -top-2 h-8 left-5 rounded-lg hidden group-hover:block ">
                          <div className="mx-3 flex  justify-between text-[24px] h-full items-center ">
                            <FcViewDetails className="hover:scale-125 duration-300" />
                            <FiEdit className="text-green-600 hover:scale-125 duration-300" />
                            <Popconfirm
                              title="Xóa sản phẩm"
                              description="Bạn muốn xóa sản phẩm này?"
                              onConfirm={() => {
                                HandleDelete(data.id, "size");
                              }}
                              onCancel={() => {
                                message.error("Sản phẩm chưa được xóa!");
                              }}
                              okText="Yes"
                              okType="danger"
                              cancelText="No"
                            >
                              <MdDeleteForever className="text-red-600 hover:scale-125 duration-300" />
                            </Popconfirm>
                          </div>
                          <div className="absolute bg-none w-3 h-8 top-0 -left-2"></div>
                        </div>
                      </div>
                      <p className=" w-[60px]">{data.typename}</p>

                      {data.daysSinceCreation > 0 ? (
                        <>
                          {" "}
                          <p className="text-[12px] w-[85px] truncate  py-1 border px-2 rounded-3xl text-orange-300 border-orange-300">
                            {data.daysSinceCreation} ngày trước
                          </p>
                        </>
                      ) : (
                        <>
                          {" "}
                          <p className="text-[12px]  truncate  border px-2 py-1 rounded-3xl text-green-300 border-green-300">
                            Bây giờ
                          </p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex w-full  justify-center">
        <button
          className="py-3 px-5 bg-BlueFF  rounded-3xl hover:bg-BlueFFhover"
          onClick={() => {
            setIsUploadProduct(2);
          }}
        >
          Thêm sản phẩm
        </button>
      </div>
    </div>
  );
};

export default ProductType;
