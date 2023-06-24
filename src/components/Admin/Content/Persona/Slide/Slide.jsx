import React, { useRef, useState } from "react";
import { RxUpdate } from "react-icons/rx";
import { AiOutlineCloudUpload } from "react-icons/ai";

import { getStorage } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Empty, notification } from "antd";
import { updateArrayFieldAtIndex } from "../../../../../Config/Services/Firebase/FireStoreDB";
import { useStateProvider } from "../../../../../Context/StateProvider";
import { useData } from "../../../../../Context/DataProviders";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Slide = () => {
  const [imageUrl, setImageUrl] = useState();
  const [error, setError] = useState(false);
  const [Data, setData] = useState();
  const [selected, setSelected] = useState();
  const { setIsRefetch } = useStateProvider();
  const { Banner } = useData();
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

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
  setTimeout(() => {
    setError(false);
  }, 3000);
  const HandleUpload = (e, idx) => {
    uploadImage(e);
    setSelected(idx);
  };

  const HandleUpdate = (idx) => {
    const data = `${imageUrl ? imageUrl : Data}`;

    updateArrayFieldAtIndex("website", "Slide", "Slide0", data, idx).then(
      () => {
        notification["success"]({
          message: "Thành công !",
          description: `
        Thông tin đã được CẬP NHẬT !`,
        });
        setIsRefetch("slide");
      }
    );
  };

  const HandleDelete = (idx) => {};

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="border rounded-xl">
      <div className="p-4 flex gap-5 ">
        <div>
          <h3 className="text-[25px] py-2  text-[#486fbd] font-bold">
            Cập nhật Slide trình chiếu
          </h3>
          <div className="grid grid-cols-2 gap-10 cursor-pointer overflow-y-scroll h-[350px]  p-5">
            {Banner.map((items, idx) => (
              <div className="shadow-2xl bg-[#353535] h-[300px] hover:shadow-gray-700 duration-300">
                <div className="w-[480px] h-[120px]">
                  {(selected === idx && imageUrl) || items ? (
                    <>
                      <img
                        src={`${
                          selected === idx && imageUrl ? imageUrl : items
                        }`}
                        alt=""
                        className="w-[467px] h-full object-cover"
                      />
                    </>
                  ) : (
                    <div className="text-white  bg-w w-full">
                      <Empty
                        imageStyle={{ height: 60 }}
                        description={
                          <span className="text-white">
                            Hình ảnh chưa được tải lên
                          </span>
                        }
                      />
                    </div>
                  )}
                </div>
                <div className=" ml-3 ">
                  <h3 className="py-3 text-[25px] font-bold ">
                    Thay đổi hình ảnh
                  </h3>
                  <div className="mb-5 flex  items-center gap-2">
                    <label className="cursor-pointer px-4 py-2 text-[20px] bg-[#6A35EE] rounded-full  text-center z-10 flex items-center gap-2">
                      <AiOutlineCloudUpload className="text-white " />
                      <p>Tải lên</p>
                      <input
                        type="file"
                        name="upload-video"
                        className="w-0 h-0"
                        onChange={(e) => HandleUpload(e, idx)}
                      />
                    </label>
                    <p>hoặc</p>
                    <div onClick={() => setSelected(idx)}>
                      <input
                        type="text"
                        placeholder="Nhập liên kết hình ảnh"
                        className="py-3 px-4 text-black  border rounded-full outline-none"
                        onChange={(e) => setData(e.target.value)}
                      />
                    </div>
                  </div>
                  {error && (
                    <p className="text-center text-xl text-red-400 font-semibold mt-4 w-[260px]">
                      Vui lòng chọn đúng định dạng
                    </p>
                  )}
                </div>
                {selected === idx ? (
                  <div className="group mt-5">
                    <div className="text-center  uppercase py-2 border mx-2 bg-purple hover:bg-purpleAdmin hover:text-purpleHover hover:border-purpleHover text-blueAdmin border-blueAdmin block group-hover:hidden">
                      Cập nhật
                    </div>
                    <div className=" group-hover:block hidden ">
                      <div className="flex w-full justify-center gap-2">
                        <div
                          className="text-center uppercase py-2  mx-2 px-5 w-[130px] bg-purple hover:bg-purpleAdmin hover:text-purpleHover hover:border-purpleHover text-white bg-red-600 "
                          onClick={() => HandleDelete(idx)}
                        >
                          Xóa Slide
                        </div>
                        <div
                          className="text-center duration-300 uppercase py-2 border mx-2 px-5 w-[178px] bg-purple hover:bg-purpleAdmin hover:text-purpleHover hover:border-purpleHover text-blueAdmin border-blueAdmin "
                          onClick={() => HandleUpdate(idx)}
                        >
                          Cập nhật Slide
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center uppercase py-2 border mx-2 bg-purple  text-gray-400 border-gray-400 block ">
                    Cập nhật
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[400px] shadow-2xl bg-[#353535]">
          <div className="p-3">
            <div className="flex justify-between items-center text-[25px] pb-3">
              <p>Ngày cập nhật gần nhất</p>
              <RxUpdate />
            </div>
            <div className="h-[200px] w-[350px] border mt-5 rounded-2xl">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
              >
                {Banner.map((items) => (
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
                <div className="autoplay-progress" slot="container-end">
                  <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                  </svg>
                  <span ref={progressContent}></span>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
