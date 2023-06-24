import React, { useState } from "react";
import { useData } from "../../../../../Context/DataProviders";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper";

import { FaCloudUploadAlt } from "react-icons/fa";

import { getStorage } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateArrayFieldAtIndex } from "../../../../../Config/Services/Firebase/FireStoreDB";
import { useStateProvider } from "../../../../../Context/StateProvider";
import { notification } from "antd";

const Banner = () => {
  const { Advertisement } = useData();
  const { setIsRefetch } = useStateProvider();
  const [Hidden, setHidden] = useState(true);
  const [Banner, setBanner] = useState(0);
  const [urlTyping, setUrlTyping] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [Error, setError] = useState(false);

  const uploadImage = async (e, idx) => {
    let selectImage = e.target.files[0];
    const filetypes = ["image/jpeg", "image/jpg", "image/png"];

    if (filetypes.includes(selectImage.type)) {
      const storage = getStorage();
      const storageRef = ref(storage, `img/slide-${idx}`);

      uploadBytes(storageRef, selectImage)
        .then((snapshot) => {
          console.log("Uploaded a blob or file!");

          getDownloadURL(snapshot.ref)
            .then((url) => {
              setImageUrl(url);
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
            });
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    } else {
      setError(true);
    }
  };

  const HandleUpload = () => {
    if (!Hidden) {
      if (urlTyping || ImageUrl) {
        const newData = `${ImageUrl ? ImageUrl : urlTyping}`;
        updateArrayFieldAtIndex(
          "website",
          "Slide",
          "advertisement",
          newData,
          Banner
        ).then(() => {
          setIsRefetch("banner");
          setImageUrl("");
          setUrlTyping("");
          notification["success"]({
            message: "Tải lên thành công!",
            description: `Sản phẩm của bạn đã được tải lên !`,
          });
        });
      } else {
        notification["error"]({
          message: "Tải lên không thành công!",
          description: `Vui lòng bổ sung đầy đủ thông tin !`,
        });
      }
    } else {
      setHidden(false);
    }
  };

  return (
    <div className="border rounded-xl">
      <div className="p-5">
        <div>
          <h3>Banner Quảng cáo</h3>
        </div>
        <div className="flex gap-10 items-start mt-5">
          <div className="cursor-pointer flex flex-col gap-5 items-center">
            {ImageUrl ? (
              <div className="h-[390px]">
                <img
                  src={ImageUrl}
                  alt="banner
            "
                  className="h-[390px] w-[260px] object-cover"
                />
              </div>
            ) : (
              <>
                {" "}
                <div
                  className={`mb-5 flex flex-col items-center gap-5 border p-5 duration-300 overflow-hidden ${
                    Hidden ? "h-0 border-none" : "h-[390px]"
                  }`}
                >
                  <label className="cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="flex flex-col justify-center items-center">
                        <p className="font-bold text-xl">
                          <FaCloudUploadAlt className="text-gray-300 text-6xl" />
                        </p>
                        <p className="text-xl font-semibold">
                          Chọn hình ảnh để tải lên
                        </p>
                      </div>
                      <p className="text-gray-400  text-center mt-5 text-sm leading-10">
                        Định dạng jpg hoặc png <br />
                      </p>
                      <p className="bg-[#0047AB] hover:bg-[#0000FF] text-center mt-5 rounded text-white text-md font-medium p-2 w-52 outline-none">
                        Chọn từ thiết bị
                      </p>
                    </div>
                    <input
                      type="file"
                      className="w-0 h-0"
                      id="fileInput"
                      onChange={(e) => uploadImage(e)}
                    />
                  </label>
                  <div className="text-black ">
                    <select
                      className="p-2"
                      onChange={(e) => setBanner(e.target.value)}
                    >
                      <option value={0} key={0}>
                        Banner 1
                      </option>
                      <option value={1} key={1}>
                        Banner 2
                      </option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      value={urlTyping}
                      placeholder="Nhập liên kết hình ảnh"
                      onChange={(e) => setUrlTyping(e.target.value)}
                      className="py-3 px-4 text-black  border rounded-full outline-none"
                    />
                  </div>
                </div>
                {Error && (
                  <p className="text-center text-xl text-red-400 font-semibold mt-4 w-[260px]">
                    Vui lòng chọn đúng định dạng
                  </p>
                )}
              </>
            )}

            <div className="" onClick={() => HandleUpload()}>
              {Hidden ? (
                <span className="py-2 px-3 rounded-full w-[100px] border ">
                  Thêm Banner Quảng cáo
                </span>
              ) : (
                <div className="border-white border text-white py-2 px-3 rounded-full w-[100px] hover:text-white hover:bg-redPrimmary ">
                  <span>Cập nhật</span>
                </div>
              )}
            </div>
          </div>
          <div className="h-[390px] w-[340px]">
            <Swiper
              spaceBetween={30}
              direction={"vertical"}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className=""
            >
              {Advertisement.map((items) => (
                <>
                  <SwiperSlide>
                    <img
                      src={items}
                      alt="banner"
                      className="h-[200px] w-[350px] object-cover p-2"
                    />
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
