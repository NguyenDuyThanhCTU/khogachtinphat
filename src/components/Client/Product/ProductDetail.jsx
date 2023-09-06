import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

import { BiMinus, BiPlus } from "react-icons/bi";
import { ProductDetailItems } from "../../../Utils/Item";
import { useData } from "../../../Context/DataProviders";
import { imageItems } from "../../../Utils/Temp";
import { Image, Tabs } from "antd";
import { Comments, FacebookProvider } from "react-facebook";

const ProductDetail = () => {
  const [similarProduct, setSimilarProduct] = useState([]);
  const [Sort, setSort] = useState();
  const [isCombo, setIsCombo] = useState(1);

  const { ContactSort, Products } = useData();
  const { id } = useParams();

  const onMinus = () => {
    if (isCombo > 0) {
      setIsCombo(isCombo - 1);
    }
  };

  useEffect(() => {
    const sort = Products.filter((item) => item.id === id);
    if (sort) {
      setSort(sort[0]);
    }
  }, [id, Products]);

  // useEffect(() => {
  //   const similarproduct = Products.filter(
  //     (item) => item.parentParams === Sort?.parentParams
  //   );
  //   setSimilarProduct(similarproduct);
  // }, [Products, Sort]);

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Chi tiết sản phẩm",
      children: (
        <div className="">
          {" "}
          <div>
            <h3 className="text-[24px] font-semibold ">Thông tin sản phẩm</h3>
            <div
              className="mt-2 flex flex-col gap-3 p:w-auto d:w-[60%] indent-5"
              dangerouslySetInnerHTML={{ __html: Sort?.detail }}
            ></div>
          </div>
          <div>
            <h3 className="text-[24px] font-semibold ">Mô tả sản phẩm</h3>
            <div
              className="mt-2 flex flex-col gap-3 p:w-auto d:w-[60%] indent-5"
              dangerouslySetInnerHTML={{ __html: Sort?.describe }}
            ></div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Bình luận",
      children: (
        <div className="w-full">
          <FacebookProvider appId="781034490143336">
            {" "}
            <Comments href="http://localhost:3000" width={1250} />{" "}
          </FacebookProvider>
        </div>
      ),
    },
  ];
  console.log(Sort);
  return (
    <div className="flex flex-col gap-5 ">
      <div>
        <div className="flex d:mx-16 gap-16 font-LexendDeca d:flex-row p:flex-col p:mx-2 py-14">
          <div className="flex-1 ">
            <div className="border-2  border-blue-400 rounded-lg d:h-[420px] p:h-auto overflow-hidden">
              <Image.PreviewGroup>
                <Image
                  // className="p-2 h-full w-full object-contain hover:scale-110 duration-500"
                  src={Sort?.image}
                />
              </Image.PreviewGroup>
            </div>
            <div className="w-full bg-white mt-3">
              <div className="p-2 flex ">
                <Image.PreviewGroup>
                  {imageItems.map((item, idx) => (
                    <div className="mx-4 w-[150px] ">
                      <Image
                        className="p-2 h-full w-full object-contain hover:scale-110 duration-500"
                        src={item.image}
                      />
                    </div>
                  ))}
                </Image.PreviewGroup>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-5">
            <h3 className="text-[28px] uppercase">{Sort?.name}</h3>
            <div className="flex gap-1 flex-col">
              <div className="flex gap-5 items-center">
                <span className="text-yellow-500 text-[24px]">Giá:</span>
                <span className="bg-white text-red-500 py-2 px-4 rounded-2xl text-[24px] cursor-pointer">
                  {" "}
                  Liên Hệ
                </span>
              </div>
            </div>
            <div className="w-[200px] ">
              {!Sort?.state ? (
                <div className="p-3 text-green-500 border border-green-500 rounded-xl font-bold">
                  Tình trạng: Còn hàng
                </div>
              ) : (
                <div className="p-3 text-red-500 border border-red-500 rounded-xl font-bold">
                  Tình trạng: Hết hàng
                </div>
              )}
            </div>
            <div className="flex flex-col font-normal gap-3">
              <p>Loại gạch: {Sort?.brickType} </p>
              <p>Kích thước: {Sort?.brickSize}</p>
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
            <Tabs
              defaultActiveKey="1"
              items={items}
              onChange={onChange}
              className="bg-white px-10 rounded-md font-LexendDeca py-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
