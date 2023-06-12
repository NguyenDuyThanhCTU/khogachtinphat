import React from "react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const Banner = () => {
  return (
    <div>
      <div className="h-[79px] mt-[21px] w-full  bg-[#a0d2ba] relative">
        <div className="h-[79px] bg-[#a0d2ba] w-10 absolute -right-2"></div>
      </div>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper rounded mt-10"
      >
        <SwiperSlide>
          <img
            src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/banner1.webp"
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/banner2.webp"
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/banner3.webp"
            alt="banner"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
