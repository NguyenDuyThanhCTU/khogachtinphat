import React, { useState } from "react";

import { AiOutlineCloudUpload } from "react-icons/ai";
import { RxUpdate } from "react-icons/rx";
import { SlideDashboard } from "../../../../../Utils/Temp";
import { getStorage } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Empty, notification } from "antd";
import { updateDocument } from "../../../../../Config/Services/Firebase/FireStoreDB";
import { useStateProvider } from "../../../../../Context/StateProvider";

const Slide = () => {
  const [imageUrl, setImageUrl] = useState();
  const [error, setError] = useState(false);
  const [Data, setData] = useState();
  const [selected, setSelected] = useState();
  const { setIsRefetch } = useStateProvider();
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

  const HandleUpload = (e, idx) => {
    uploadImage(e);
    setSelected(idx);
  };

  const HandleUpdate = (idx) => {
    const data = `${imageUrl ? imageUrl : Data}`;
    const newData = {};
    newData[`slide-${idx}`] = data;

    updateDocument("website", "Trademark", newData).then(() => {
      notification["success"]({
        message: "Thành công !",
        description: `
        Thông tin đã được CẬP NHẬT !`,
      });
      setIsRefetch(3);
    });
  };
  const HandleDelete = (idx) => {};
  return (
    <div className="border rounded-xl">
      <div className="p-4 flex gap-5 ">
        <div>
          <h3 className="text-[30px] py-5 text-center text-[#03DAC5] font-bold">
            Cập nhật Slide trình chiếu
          </h3>
          <div className="grid grid-cols-2 gap-5 cursor-pointer overflow-y-scroll h-[300px]">
            {SlideDashboard.map((items, idx) => (
              <div className="shadow-2xl bg-[#353535] h-[300px]">
                <div className="w-[490px] h-[100px]">
                  {(selected === idx && imageUrl) || items.image ? (
                    <>
                      <img
                        src={`${
                          selected === idx && imageUrl ? imageUrl : items.image
                        }`}
                        alt=""
                        className="w-full h-full object-cover"
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
                    <input
                      type="text"
                      placeholder="Nhập liên kết hình ảnh"
                      className="py-3 px-4 text-black  border rounded-full outline-none"
                      onChange={(e) => setData(e.target.value)}
                    />
                  </div>
                </div>
                {!imageUrl && !Data ? (
                  <div className="text-center uppercase py-2 border mx-2 bg-purple  text-gray-400 border-gray-400 block ">
                    Cập nhật
                  </div>
                ) : (
                  <div className="group mt-5">
                    <div className="text-center uppercase py-2 border mx-2 bg-purple hover:bg-purpleAdmin hover:text-purpleHover hover:border-purpleHover text-blueAdmin border-blueAdmin block group-hover:hidden">
                      Cập nhật
                    </div>
                    <div className=" group-hover:block hidden duration-300">
                      <div className="flex w-full justify-center gap-2">
                        <div
                          className="text-center uppercase py-2  mx-2 px-5 bg-purple hover:bg-purpleAdmin hover:text-purpleHover hover:border-purpleHover text-white bg-red-600 "
                          onClick={() => HandleDelete(idx)}
                        >
                          Xóa Slide
                        </div>
                        <div
                          className="text-center uppercase py-2 border mx-2 px-5 bg-purple hover:bg-purpleAdmin hover:text-purpleHover hover:border-purpleHover text-blueAdmin border-blueAdmin "
                          onClick={() => HandleUpdate(idx + 1)}
                        >
                          Cập nhật Slide
                        </div>
                      </div>
                    </div>
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
            <div>25-21200b</div>
            <div className="pl-3 mt-3 w-full">
              <div className="w-full">
                <h3 className="text-[18px] ">Tiêu đề</h3>
                <input
                  type="text"
                  className="outline-none px-3 py-2 w-full text-black"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-[18px]">Nội dung</h3>
                <textarea
                  type="text"
                  className="outline-none px-3 py-2 w-full text-black"
                />
              </div>
              <div className="text-center uppercase py-2 border mt-5 bg-purple hover:bg-purpleAdmin hover:text-purpleHover hover:border-purpleHover text-blueAdmin border-blueAdmin ">
                Cập nhật
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
