import React, { useEffect, useState } from "react";
import { AiFillCloseCircle, AiOutlineDelete } from "react-icons/ai";
import { FaCloudUploadAlt } from "react-icons/fa";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getStorage } from "firebase/storage";

import { notification } from "antd";

import { useStateProvider } from "../../../../../../../Context/StateProvider";
import Input from "../../../Item/Input";
import { useData } from "../../../../../../../Context/DataProviders";
import {
  addDocument,
  updateDocument,
} from "../../../../../../../Config/Services/Firebase/FireStoreDB";
import TextEditor from "../../../../../../Item/TextEditor";

const UpdateProduct = () => {
  const [DataSort, setDataSort] = useState([]);
  const { setIsUploadProduct, setIsRefetch, isRefetch } = useStateProvider();
  const { updateId, Products } = useData();
  const [imageUrl, setImageUrl] = useState();
  const [ListImage, setListImage] = useState([]);

  useEffect(() => {
    const sort = Products?.filter((item) => item.id === updateId);
    if (sort) {
      setDataSort(sort[0]);
    }
  }, [Products]);

  useEffect(() => {
    setListImage(DataSort.listimage);
  }, [DataSort]);

  const HandleSubmit = () => {
    const data = {
      ...(ListImage && { listimage: ListImage }),
    };

    updateDocument("products", updateId, data).then(() => {
      notification["success"]({
        message: "Tải lên thành công!",
        description: `Sản phẩm của bạn đã được tải lên !`,
      });
      setIsUploadProduct(0);
      setIsRefetch("edit product");
    });
  };

  const HandleAddImage = () => {
    if (!imageUrl) {
      notification["warning"]({
        message: "Tải lên không thành công!",
        description: `Hình ảnh đang tải lên hoặc trống !`,
      });
    } else {
      const data = {
        image: imageUrl,
      };
      setListImage([...ListImage, data]);
      setImageUrl("");
    }
  };

  const popValue = (indexToRemove) => {
    setListImage((prevUrls) =>
      prevUrls.filter((_, index) => index !== indexToRemove)
    );
  };

  const uploadImage = async (e) => {
    let selectImage = e.target.files[0];
    const filetypes = ["image/jpeg", "image/jpg", "image/png"];

    if (filetypes.includes(selectImage.type)) {
      const storage = getStorage();
      const storageRef = ref(storage, `sanpham/${selectImage.name}`);

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
    }
  };

  return (
    <div
      className={`bg-[rgba(0,0,0,0.3)] w-full 
       h-full
      z-50 absolute rounded-md duration-300`}
    >
      <div className="w-[1500px] h-[700px] absolute bg-white bottom-[15%] left-[12%] flex font-LexendDeca cursor-pointer rounded-sm flex-col items-center">
        <div className="flex flex-col items-center w-full py-5">
          <h3 className="font-LexendDeca text-[30px] font-bold">
            Thêm hình ảnh cho sản phẩm {DataSort.name}
          </h3>
          <div className="justify-center   w-full flex items-center gap-20 mt-2 ">
            <div>
              <div className=" border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center  outline-none mt-10 w-[260px] h-[458px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100">
                {imageUrl ? (
                  <div>
                    <img
                      src={imageUrl}
                      className="w-[100%] h-[100%] object-cover"
                      alt=""
                    />
                    <label>
                      <p className="bg-[#F51997] text-center mt-8 rounded text-white text-md font-medium p-2 w-52 outline-none">
                        Chọn lại
                      </p>
                      <input
                        id="fileInput"
                        type="file"
                        onChange={(e) => uploadImage(e)}
                        className="w-0 h-0"
                      />
                    </label>
                  </div>
                ) : (
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
                      <p className="text-gray-400  text-center mt-10 text-sm leading-10">
                        Định dạng jpg hoặc png <br />
                      </p>
                      <p className="bg-[#0047AB] hover:bg-[#0000FF] text-center mt-8 rounded text-white text-md font-medium p-2 w-52 outline-none">
                        Chọn từ thiết bị
                      </p>
                    </div>
                    <input
                      type="file"
                      onChange={(e) => uploadImage(e)}
                      className="w-0 h-0"
                      id="fileInput"
                    />
                  </label>
                )}
              </div>
              <div
                className="py-2 px-4 bg-red-400 text-white hover:bg-red-600 text-center mt-4"
                onClick={() => HandleAddImage()}
              >
                Thêm
              </div>
            </div>
            <div className="w-[50vw] h-full mt-5 flex flex-col justify-between items-center">
              <div className=" rounded-md w-full ">
                <h3>Danh sách hình ảnh</h3>
                <div className="overflow-y-auto  w-full  mt-5">
                  <div className="p-1 grid grid-cols-4 ">
                    <>
                      {ListImage && (
                        <>
                          {" "}
                          {ListImage.map((items, idx) => {
                            return (
                              <div className="my-2 relative w-[150px] h-[150px] group border flex justify-center items-center">
                                <img src={items.image} alt="" />

                                <div
                                  className="w-full h-full  group-hover:flex justify-center items-center bg-[rgba(0,0,0,0.3)] text-[40px] absolute top-0  z-10 text-redPrimmary hidden"
                                  onClick={() => popValue(idx, "color")}
                                >
                                  <AiOutlineDelete className="" />
                                </div>
                              </div>
                            );
                          })}
                        </>
                      )}
                    </>
                  </div>
                </div>
              </div>
              <div
                className="py-2 px-4 bg-red-500 hover:bg-red-600 duration-300 text-white"
                onClick={() => {
                  HandleSubmit();
                }}
              >
                Tải lên
              </div>
            </div>
          </div>
        </div>

        <AiFillCloseCircle
          className="absolute -top-5 -right-5 text-[40px] border-white border-4 bg-black rounded-3xl text-white "
          onClick={() => {
            setIsUploadProduct(0);
          }}
        />
      </div>
    </div>
  );
};

export default UpdateProduct;
