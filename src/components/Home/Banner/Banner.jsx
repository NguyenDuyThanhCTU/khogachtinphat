import React from "react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useData } from "../../../Context/DataProviders";

const Banner = () => {
  const { Banner } = useData();
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
        {Banner.map((data, idx) => (
          <SwiperSlide>
            <img key={idx} src={data} alt="banner" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
