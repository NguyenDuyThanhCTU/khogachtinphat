import React from "react";
import { BsPhone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { useData } from "../../../Context/DataProviders";

const Footer = () => {
  const { Phone, Location, Address } = useData();
  return (
    <div className="bg-gray-600 font-LexendDeca  p-2 cursor-pointer text-yellow-400 ">
      <div className="d:flex p:hidden   justify-between mx-[270px] =">
        <div className="my-10 flex-1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/img%2Fz4389707119439_b2577afc9718501441ffaf1ae38d1281-removebg-preview.png?alt=media&token=6066e727-39f9-4697-90a8-26eaba866ebc&_gl=1*xcjnck*_ga*MTA1MjQ5NTQ0OS4xNjg0NDAxMjc5*_ga_CW55HF8NVT*MTY4NjIxNjkxOS40Ny4xLjE2ODYyMTcwMTMuMC4wLjA."
            alt="img"
            className="object-cover w-52 h-52 bg-white "
          />
        </div>
        <div className="flex-1 text-[18px] text-yellow-400">
          <h3 className="text-[32px] my-10 text-center font-bold">
            Kho gạch cao cấp Tín Phát
          </h3>
          <p>
            <BsPhone className="inline-block text-[18px] font-bold mr-2" />
            <strong>Điện thoại:</strong> {Phone}
            <p>
              <CiLocationOn className="inline-block text-[18px] font-bold mr-2 " />
              <strong>Địa chỉ:</strong> {Address}
            </p>
          </p>
        </div>
      </div>

      <div className=" d:mx-[270px] p:mx-0 flex d:flex-row p:flex-col justify-between d:gap-28 p:gap-10  py-12 border-t">
        <div className="flex  flex-col gap-2 ">
          <h3 className="font-poppins font-medium text-[18px]  ">Từ khóa</h3>
          <div className="flex flex-col font-light text-[16px] font-poppins">
            <a href="/">Gạch cao cấp Cần Thơ </a>
            <a href="/">Gạch chất lượng cao </a>
          </div>
        </div>
        <div className="flex  flex-col gap-2 justify-start  ">
          <h3 className="font-poppins font-medium text-[18px]  ">Sản phẩm</h3>
          <div className="flex flex-col font-light text-[16px] font-poppins">
            <a href="/">
              15x90 GC <br /> 60x60 Polished <br />
              60x120 Matt
            </a>
            <a href="/">15X90 GK </a>
          </div>
        </div>
        <div className="flex  flex-col  font-poppins h-[] w-[700px] gap-2">
          <h3 className="font-poppins font-medium text-[18px] ml-15">
            Thông tin liên hệ
          </h3>
          <div className="flex flex-col font-light text-[16px] font-poppins">
            <a href="/">Bán Gạch cao cấp Cần Thơ</a>

            <a href="/">
              <strong>Website:</strong> https://khogachcaocaptinphat.com
            </a>
            <div className="d:flex justify-start gap-10 p:hidden">
              <label>Google map:</label>
              <iframe
                src={Location}
                width="300"
                height="200"
                // style="border:0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="rounded-2xl shadow-xl my-6 inline-block"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t  text-white">
        <div className="flex justify-between d:mx-80 p:mx-0 h-[41px] items-center ">
          <div className=" inline-block text-sm">
            <div>2020 Copyright© </div>
          </div>
          <div className="inline-block text-sm">
            <p className="inline-block"> Web Design by Th Dev Company </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
