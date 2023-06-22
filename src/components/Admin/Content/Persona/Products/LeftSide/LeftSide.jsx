import React, { useEffect, useState } from "react";
import { FcViewDetails } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { useStateProvider } from "../../../../../../Context/StateProvider";
import {
  delDocument,
  getProducts,
} from "../../../../../../Config/Services/Firebase/FireStoreDB";
import { Popconfirm, message } from "antd";

const LeftSide = () => {
  const [DataFetch, setDataFetch] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const { isUploadProduct, setIsUploadProduct } = useStateProvider();

  useEffect(() => {
    getProducts("products").then((data) => {
      setDataFetch(data.reverse());
    });
  }, [isUploadProduct]);

  const HandleProduct = () => {
    setIsClick(!isClick);
    console.log(isClick);
  };

  const HandleDelete = (id) => {
    delDocument("products", id).then(() => {
      message.success("Xóa sản phẩm thành công!");
      setIsUploadProduct(2);
    });
  };

  return (
    <div className="flex flex-col justify-between h-full w-[540px]">
      <div className="mt-20">
        <button
          className="py-3 px-5 bg-BlueFF  rounded-3xl hover:bg-BlueFFhover"
          onClick={() => {
            setIsUploadProduct(1);
          }}
        >
          Thêm sản phẩm
        </button>
      </div>

      <div className="flex items-center justify-center">
        <div
          className="relative group cursor-pointer"
          onClick={() => HandleProduct()}
        >
          {/* <p
            className={`absolute w-28 -top-24 -left-1 font-bold duration-75 ${
              isClick ? "text-white" : "text-black"
            } `}
          >
            Xem theo tên{" "}
          </p>
          <p
            className={`absolute w-28 -top-24 -left-36 font-bold duration-[3000ms] ${
              isClick ? "text-white" : "text-black"
            } `}
          >
            Xem theo tên{" "}
          </p> */}
          <div className="text-center border w-[90px] p-2 rounded-full group-hover:bg-BlueFF ">
            Loại <br /> sản phẩm
          </div>
          <TbCircleDashed className="absolute      w-36 h-36 -top-7 -left-[27px] circle-animation hover:text-red-600 hover:w-56 hover:h-56 hover:-top-16 hover:-left-[65px] duration-300" />
        </div>
      </div>

      <div className="ml-3 mb-2">
        <h3 className="text-[24px] text-center font-bold mb-2">
          Danh sách sản phẩm
        </h3>
        <div className="">
          <div className=" py-2  ml-1 h-[281px] overflow-y-scroll">
            {DataFetch?.map((data, idx) => (
              <div className="flex flex-row gap-5 items-center my-2  ml-1 ">
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
                          HandleDelete(data.id);
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
                <p className="truncate w-[107px]">{data.name}</p>

                <img
                  src={data.image}
                  alt="product"
                  className="w-14 h-14 rounded-lg object-cover"
                />

                <p className="truncate w-[60px]  ml-3">{data.brickType}</p>
                <p className="truncate w-[60px]  ">{data.brickSize}</p>
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
  );
};

export default LeftSide;
