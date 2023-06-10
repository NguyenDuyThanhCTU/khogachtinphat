import React from "react";
import { BsPhone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
const Footer = () => {
  return (
    <div className="bg-[#326E51] font-LexendDeca  p-2 cursor-pointer text-white ">
      <div className="flex justify-between mx-[270px] =">
        <div className="my-10 flex-1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/img%2Fz4389707119439_b2577afc9718501441ffaf1ae38d1281-removebg-preview.png?alt=media&token=6066e727-39f9-4697-90a8-26eaba866ebc&_gl=1*xcjnck*_ga*MTA1MjQ5NTQ0OS4xNjg0NDAxMjc5*_ga_CW55HF8NVT*MTY4NjIxNjkxOS40Ny4xLjE2ODYyMTcwMTMuMC4wLjA."
            alt="img"
            className="object-cover w-52 h-52 bg-white "
          />
        </div>
        <div className="flex-1 text-[18px] text-white">
          <h3 className="text-[32px] my-10 text-center font-bold">
            Kho gạch cao cấp Tín Phát
          </h3>
          <p>
            <BsPhone className="inline-block text-[18px] font-bold mr-2" />
            <strong>Điện thoại:</strong> 0932949933
            <p>
              <CiLocationOn className="inline-block text-[18px] font-bold mr-2 " />
              <strong>Địa chỉ:</strong> Số 280/4 đường Nguyễn Văn Linh, Khu vực
              Bình Dương, Phường Long Hoà, Quận Bình Thuỷ, Thành Phố Cần Thơ
            </p>
          </p>
        </div>
      </div>

      <div className=" mx-[270px] flex justify-between gap-28 py-12 border-t">
        <div className="flex  flex-col gap-2 h-[155px]">
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
            <div className="flex justify-start gap-10">
              <label>Google map:</label>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d250.31013965664803!2d105.72106925710689!3d10.050829198436773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDAzJzA0LjciTiAxMDXCsDQzJzEwLjUiRQ!5e0!3m2!1sen!2s!4v1686364648208!5m2!1sen!2s"
                width="400"
                height="300"
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
        <div className="flex justify-between mx-80 h-[41px] items-center ">
          <div className=" inline-block text-sm">
            <div>Copyright © 2023ADS </div>
          </div>
          <div className="inline-block text-sm">
            <p className="inline-block">Thiết kế bởi </p>
            <a className="inline-block ml-1" href="/">
              Thanh Dev
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
