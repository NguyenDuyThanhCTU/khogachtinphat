import React, { useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

import { BiMinus, BiPlus } from "react-icons/bi";
import { useData } from "../../../../Context/DataProviders";
import { useNavigate } from "react-router-dom";
import { useStateProvider } from "../../../../Context/StateProvider";
import { ProductDetailItems } from "../../../../Utils/Item";

const Section1 = ({ Data }) => {
  const [isCombo, setIsCombo] = useState(1);
  const { ContactData, setCartItems, CartItems } = useData();
  const { setOpenCart } = useStateProvider();
  const navigate = useNavigate();
  const onMinus = () => {
    if (isCombo > 0) {
      setIsCombo(isCombo - 1);
    }
  };

  const HandleOrder = (id, type) => {
    if (type === "buy") {
      setCartItems((prevItems) => [...prevItems, id]);
      navigate("/thanh-toan");
    } else {
      setCartItems((prevItems) => [...prevItems, ...Array(isCombo).fill(id)]);
      setOpenCart(true);
    }
  };

  return (
    <div>
      <div className="flex d:mx-16 gap-16 font-LexendDeca d:flex-row p:flex-col p:mx-2 py-14">
        <div className="border-2 flex-1 border-blue-400 rounded-lg d:h-[820px] p:h-auto overflow-hidden">
          <img
            src={Data.image}
            alt="product image"
            className="p-2 h-full w-full object-cover hover:scale-110 duration-500"
          />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h3 className="text-[28px] uppercase">{Data.title}</h3>
          <div className="flex gap-1 flex-col">
            {Data.sale.discount !== 0 ? (
              <>
                <span className="line-through text-[14px]">
                  {Data.price} VNĐ/{Data.weight}
                </span>
                <span className="text-red-600 text-[24px">
                  {Data.sale.newPrice} VNĐ
                </span>
              </>
            ) : (
              <>
                {" "}
                <span className="text-red-600 text-[24px]">
                  {Data.price} VNĐ/{Data.weight}
                </span>
              </>
            )}
            <div className="flex gap-3 items-center">
              <div className="flex text-yellow-500 gap-1">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                {Data.evaluate === 5 ? <BsStarFill /> : <BsStarHalf />}
              </div>
              <span className="text-gray-400 italic">
                Đã bán ({Data.access})
              </span>
            </div>
          </div>
          <div className="w-[200px] ">
            {Data.state ? (
              <div className="p-3 text-green-500 border border-green-500 rounded-xl font-bold">
                Tình trạng: Còn hàng
              </div>
            ) : (
              <div className="p-3 text-red-500 border border-red-500 rounded-xl font-bold">
                Tình trạng: Hết hàng
              </div>
            )}
          </div>
          <div className="flex flex-col font-normal text-gray-500 gap-3">
            <p>
              Mua sỉ lẻ liên hệ{" "}
              <strong className="text-red-500 font-semibold">
                {ContactData.phone}
              </strong>{" "}
              để được báo giá và tư vấn.
            </p>
            {/* <span>
              <strong className="text-black font-semibold">Chất liệu:</strong>{" "}
              {DataFetch.material}
            </span>
            <span>
              <strong className="text-black font-semibold">Màu sắc:</strong>{" "}
              {DataFetch.color}
            </span>
            <span>
              <strong className="text-black font-semibold">Kích cỡ:</strong>{" "}
              {DataFetch.size}
            </span>
            <span>
              <strong className="text-black font-semibold">Thành phần:</strong>{" "}
              {DataFetch.ingredient}.
            </span> */}
          </div>

          <div className="border border-blue-500   h-12 rounded-sm w-[200px] ">
            <div className="flex justify-between items-center h-full mx-5">
              <BiMinus onClick={() => onMinus()} className="cursor-pointer" />
              <input
                type="text"
                value={`Số lượng: ${isCombo}`}
                className=" focus-visible:outline-none w-full text-center border-0 px-0 py-[9px] h-auto text-13 "
              />
              <BiPlus
                onClick={() => setIsCombo(isCombo + 1)}
                className="cursor-pointer"
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div
              className="p-3 bg-blue-500 text-white hover:bg-blue-600 rounded-sm cursor-pointer"
              onClick={() => HandleOrder(Data.id, "add")}
            >
              Thêm vào giỏ hàng
            </div>
            <div
              className="p-3 bg-orange-500 text-white hover:bg-orange-600 rounded-sm cursor-pointer"
              onClick={() => HandleOrder(Data.id, "buy")}
            >
              Mua ngay
            </div>
          </div>
          <div className="bg-gradient-to-t from-blue-400 to-blue-500 text-white">
            <div className="p-3 flex flex-col gap-3">
              {ProductDetailItems.map((items, idx) => (
                <>
                  <div className="flex gap-5 items-center">
                    <div className="rounded-full bg-orange-700 p-2 w-10 h-10 flex items-center justify-center">
                      <span> {idx}</span>
                    </div>
                    <p>{items.name}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="d:px-16 py-5 p:px-2">
          <h3 className="text-[24px] font-semibold ">Mô tả sản phẩm</h3>
          <div
            className="mt-2 flex flex-col gap-3 p:w-auto d:w-[60%] indent-5"
            dangerouslySetInnerHTML={{ __html: Data.describe }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
