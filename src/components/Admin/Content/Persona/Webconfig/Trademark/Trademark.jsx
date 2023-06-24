import React, { useState } from "react";
import { useData } from "../../../../../../Context/DataProviders";
import { notification } from "antd";
import { useStateProvider } from "../../../../../../Context/StateProvider";
import { updateDocument } from "../../../../../../Config/Services/Firebase/FireStoreDB";
import { getStorage } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Trademark = () => {
  const { Websitename, Logo } = useData();
  const { setIsRefetch } = useStateProvider();
  const [Data, setData] = useState("");
  const [imageUrl, setImageUrl] = useState();
  const [error, setError] = useState(false);

  const uploadImage = async (e) => {
    let selectImage = e.target.files[0];
    const filetypes = ["image/jpeg", "image/jpg", "image/png"];

    if (filetypes.includes(selectImage.type)) {
      const storage = getStorage();
      const storageRef = ref(storage, `img/logo`);

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

  const ContactTrademark = [
    {
      name: "Tên website",
      type: "input",
      placeholder: Websitename,
    },
    {
      name: "Logo Website",
      type: "input",
      placeholder: Logo,
    },
  ];
  const HandleUpdate = (idx) => {
    if (Data === "" && !imageUrl) {
      notification["error"]({
        message: "Lỗi !",
        description: ` 
        Vui lòng nhập thông tin trước khi CẬP NHẬT !`,
      });
    } else {
      let newData;
      if (idx === 0) {
        newData = { websiteName: Data };
      } else if (idx === 1) {
        newData = { websiteLogo: Data };
      } else if (idx === 3) {
        newData = { websiteLogo: imageUrl };
      }

      updateDocument("website", "Trademark", newData).then(() => {
        notification["success"]({
          message: "Thành công !",
          description: `
          Thông tin đã được CẬP NHẬT !`,
        });
        setIsRefetch("trademark");
      });
    }
  };
  return (
    <div className="bg-[#353535] text-white w-[400px] rounded-xl shadow-xl">
      <div className="p-4 ">
        <h3 className="text-[25px] text-center ">Thương hiệu website</h3>
        <div className="flex flex-col gap-3 mt-5">
          {ContactTrademark.map((items, idx) => {
            let Type = items.type;
            return (
              <>
                <label>{items.name}</label>
                <div className="flex gap-5">
                  {Type && (
                    <Type
                      placeholder={items.placeholder}
                      type="text"
                      className="px-4 py-2 text-black outline-none rounded-2xl bg-gray-300 w-[240px] "
                      onChange={(e) => setData(e.target.value)}
                    />
                  )}
                  <div>
                    <button
                      className="hover:bg-[#bb86fc37] hover:text-[#BB86FC] text-[#74affc] bg-[#74affc43] px-3 py-2 rounded-xl"
                      onClick={() => HandleUpdate(idx)}
                    >
                      Cập nhật
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <label>
          <div className="flex justify-center mt-10 w-full h-[300px] border rounded-lg cursor-pointer">
            <img
              src={`${imageUrl ? imageUrl : Logo}`}
              alt="logo"
              className="object-contain p-2"
            />

            <input
              type="file"
              className="w-0 h-0"
              onChange={(e) => uploadImage(e)}
            />
          </div>
        </label>
        {error && (
          <p className="text-center text-xl text-red-400 font-semibold mt-4 w-[260px]">
            Vui lòng chọn đúng định dạng
          </p>
        )}
        {imageUrl ? (
          <div className="w-full justify-center flex">
            <button
              className="hover:bg-[#bb86fc37] hover:text-[#BB86FC] text-[#fc7474] bg-[#fc747443] px-3 py-2 rounded-xl mt-3 "
              onClick={() => HandleUpdate(3)}
            >
              Cập nhật
            </button>
          </div>
        ) : (
          <p className="text-white italic text-[13px] mt-2">
            Nhấp vào logo để tải hình ảnh lên{" "}
            <strong className="text-redPrimmary">(*)</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default Trademark;
