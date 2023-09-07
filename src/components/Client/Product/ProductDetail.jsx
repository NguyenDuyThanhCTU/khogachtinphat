import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

import { ProductDetailItems } from "../../../Utils/Item";
import { useData } from "../../../Context/DataProviders";
import { imageItems } from "../../../Utils/Temp";
import { Image, Tabs } from "antd";
import { Comments, FacebookProvider } from "react-facebook";
import Display from "./Section/Display";

const ProductDetail = () => {
  const [similarProduct, setSimilarProduct] = useState([]);
  const [Sort, setSort] = useState();
  const location = useLocation();
  const { id } = useParams();
  const { Products } = useData();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, id]);

  useEffect(() => {
    const sort = Products.filter((item) => item.id === id);
    if (sort) {
      setSort(sort[0]);
    }
  }, [id, Products]);

  useEffect(() => {
    const similarproduct = Products.filter(
      (item) => item.brickType === Sort?.brickType
    );
    setSimilarProduct(similarproduct);
  }, [Products, Sort]);

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
            <Comments
              href="https://khogachcaocaptinphat.com"
              width={1250}
            />{" "}
          </FacebookProvider>
        </div>
      ),
    },
  ];

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
            {Sort?.listimage?.length > 0 && (
              <>
                {" "}
                <div className="w-full bg-white mt-3">
                  <div className="p-2 flex ">
                    <Image.PreviewGroup>
                      {Sort?.listimage?.map((item, idx) => (
                        <div className="mx-4 w-[150px] h-[150px] overflow-hidden flex items-center">
                          <Image
                            className="p-2 h-full w-full object-contain"
                            src={item.image}
                          />
                        </div>
                      ))}
                    </Image.PreviewGroup>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col justify-between flex-1">
            <div className=" flex flex-col gap-5">
              <h3 className="text-[30px] uppercase">{Sort?.name}</h3>
              <div className="flex gap-1 flex-col">
                <div className="flex gap-5 items-center">
                  <span className="text-yellow-500 text-[26px]">Giá:</span>
                  <span className="text-red-500 text-[26px] font-bold">
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
              <div className="flex flex-col font-normal gap-3 text-[24px]">
                <p>Loại gạch: {Sort?.brickType} </p>
                <p>Kích thước: {Sort?.brickSize}</p>
              </div>
            </div>

            <div className="bg-gradient-to-t from-yellow-400 to-yellow-500 text-black">
              <div className="p-3 flex flex-col gap-3">
                {ProductDetailItems.map((items, idx) => (
                  <>
                    <div className="flex gap-5 items-center">
                      <div className="rounded-full bg-white p-2 w-10 h-10 flex items-center justify-center">
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
              className="bg-white px-10 rounded-md font-LexendDeca py-5"
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <Display
            Data={similarProduct}
            title="Sản phẩm cùng loại"
            background="bg-[url(https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/img%2Fvecteezy_background-gradient-blue-abstract-design-vector-illustration_16513887.jpg?alt=media&token=0e41ca8a-89cb-4099-913a-ce8e0168324b)]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
