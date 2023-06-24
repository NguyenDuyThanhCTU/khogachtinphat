import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import { notification } from "antd";

import { useStateProvider } from "../../../../../../Context/StateProvider";
import { addDocument } from "../../../../../../Config/Services/Firebase/FireStoreDB";
import Input from "../../Item/Input";

const AddType = () => {
  const [brickSize, setBrickSize] = useState("");
  const [brickType, setBrickType] = useState("");

  const { setIsUploadProduct, setIsRefetch } = useStateProvider();

  const handleDiscard = () => {
    setBrickSize("");
    setBrickType("");
  };

  const HandleSubmit = (idx) => {
    if (idx === 1) {
      if (!brickType) {
        notification["error"]({
          message: "Lỗi !",
          description: ` 
          Vui lòng nhập thông tin trước khi CẬP NHẬT !`,
        });
      } else {
        const newData = {
          typename: brickType,
        };
        addDocument("ProductTypes", newData).then(() => {
          notification["success"]({
            message: "Thành công !",
            description: `
    Thông tin đã được CẬP NHẬT !`,
          });
          setIsRefetch("productType");
          setBrickType("");
        });
      }
    } else if (idx === 2) {
      if (!brickSize) {
        notification["error"]({
          message: "Lỗi !",
          description: ` 
          Vui lòng nhập thông tin trước khi CẬP NHẬT !`,
        });
      } else {
        const newData = {
          typename: brickSize,
        };
        addDocument("ProductSize", newData).then(() => {
          notification["success"]({
            message: "Thành công !",
            description: `
    Thông tin đã được CẬP NHẬT !`,
          });
          setIsRefetch("productSize");
          setBrickSize("");
        });
      }
    }
  };

  return (
    <div
      className={`bg-[rgba(0,0,0,0.3)] w-full 
       h-full
      z-50 absolute rounded-md duration-300`}
    >
      <div className="w-[1500px] h-[700px] absolute bg-white bottom-[15%] left-[12%] flex font-LexendDeca cursor-pointer rounded-sm ">
        <div className="justify-center   w-full flex items-center gap-20">
          <div className="w-[500px] ">
            <p className="text-2xl font-bold text-center mb-3">
              Cập nhật loại gạch
            </p>

            <Input
              text="Tên loại gạch"
              Value={brickType}
              setValue={setBrickType}
            />
            <div className="flex gap-6 mt-10">
              <button
                onClick={() => handleDiscard()}
                type="button"
                className="border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
              >
                Xóa
              </button>
              <button
                //disabled={videoAsset?.url ? false : true}
                onClick={() => HandleSubmit(1)}
                type="button"
                className="bg-[#df6cad] hover:bg-red-500 focus:outline-none focus:shadow-outline text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
              >
                Tải lên
              </button>
            </div>
          </div>

          <div className="w-[500px] ">
            <p className="text-2xl font-bold text-center mb-3">
              Thêm kích cở gạch
            </p>

            <Input
              text="Tên kích cở gạch"
              Value={brickSize}
              setValue={setBrickSize}
            />
            <div className="flex gap-6 mt-10">
              <button
                onClick={() => handleDiscard()}
                type="button"
                className="border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
              >
                Xóa
              </button>
              <button
                //disabled={videoAsset?.url ? false : true}
                onClick={() => HandleSubmit(2)}
                type="button"
                className="bg-[#df6cad] hover:bg-red-500 focus:outline-none focus:shadow-outline text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
              >
                Tải lên
              </button>
            </div>
          </div>
        </div>

        <AiFillCloseCircle
          className="absolute -top-5 -right-5 text-[40px] border-white border-4 bg-black rounded-3xl text-white "
          onClick={() => {
            setIsUploadProduct(0);
          }}
        />
      </div>
    </div>
  );
};

export default AddType;
