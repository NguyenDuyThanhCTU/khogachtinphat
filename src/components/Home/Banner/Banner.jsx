import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useData } from "../../../Context/DataProviders";
import ProductAds from "../../../Layout/DefaultLayout/Ads/ProductAds";
import { BiTrendingUp } from "react-icons/bi";

const Banner = () => {
  const { Banner, Products } = useData();
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    setLatest(Products.reverse());
  }, [Products]);

  return (
    <div>
      {/* <div className="h-[79px] mt-[21px] w-full  bg-[#a0d2ba] relative d:block p:hidden">
        <div className="h-[79px] bg-[#a0d2ba] w-10 absolute -right-2"></div>
      </div> */}
      <div className="rounded-xl border border-yellow-400 shadow-xl p:w-[400px] h-auto d:mx-auto d:w-[1505px] bg-gray-500 text-yellow-400">
        <div className="p-5">
          <h3 className="font-semibold d:text-[24px] p:text-[18px] ">
            Sản phẩm mới
            <BiTrendingUp className="text-yellow-400 text-[30px] inline-block ml-1" />
          </h3>
          <div className="p:hidden w-auto  d:flex items-center">
            <Swiper
              loop={true}
              pagination={{
                dynamicBullets: true,
              }}
              slidesPerView={5}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper rounded my-3 "
            >
              {/* {Banner.map((data, idx) => (
            <SwiperSlide>
              <img key={idx} src={data} alt="banner" />
            </SwiperSlide>
          ))} */}
              <div className="pb-5">
                {latest.slice(0, 10).map((items) => (
                  <SwiperSlide>
                    <ProductAds
                      image={items.image}
                      name={items.name}
                      bricktype={items.brickType}
                      bricksize={items.brickSize}
                    />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
          <div className="d:hidden w-auto justify-center p:flex items-center">
            <Swiper
              loop={true}
              pagination={{
                dynamicBullets: true,
              }}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper rounded my-3   "
            >
              {/* {Banner.map((data, idx) => (
            <SwiperSlide>
              <img key={idx} src={data} alt="banner" />
            </SwiperSlide>
          ))} */}
              <div className="pb-5 ">
                {latest.slice(0, 10).map((items) => (
                  <SwiperSlide>
                    <ProductAds
                      image={items.image}
                      name={items.name}
                      bricktype={items.brickType}
                      bricksize={items.brickSize}
                    />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
