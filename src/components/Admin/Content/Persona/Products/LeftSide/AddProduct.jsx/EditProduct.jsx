import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
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

const EditProduct = () => {
  const [DataSort, setDataSort] = useState([]);
  const { setIsUploadProduct, setIsRefetch, isRefetch } = useStateProvider();
  const { updateId, Products } = useData();
  const [ProductDetail, setProductDetail] = useState("");
  const [describe, setDescribe] = useState("");

  const ProductDetailInit = "<p>Bề mặt:</p><p>Tính năng:</p><p>...</p>";

  useEffect(() => {
    const sort = Products?.filter((item) => item.id === updateId);
    if (sort) {
      setDataSort(sort[0]);
    }
  }, [Products]);

  const HandleSubmit = () => {
    const data = {
      ...(ProductDetail && { detail: ProductDetail }),
      ...(describe && { describe: describe }),
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

  return (
    <div
      className={`bg-[rgba(0,0,0,0.3)] w-full 
       h-full
      z-50 absolute rounded-md duration-300`}
    >
      <div className="w-[1500px] h-[700px] absolute bg-white bottom-[15%] left-[12%] flex font-LexendDeca cursor-pointer rounded-sm flex-col items-center">
        <div className="flex flex-col items-center w-full py-5">
          <h3 className="font-LexendDeca text-[30px] font-bold">
            Thêm thông tin sản phẩm {DataSort.name}
          </h3>
          <div className="justify-center   w-full flex items-center gap-20 mt-2 ">
            <div className="flex-1 flex items-center border flex-col ">
              <h3 className="py-4 font-bold">Thông tin sản phẩm</h3>
              <div className=" w-full h-[500px] overflow-scroll">
                <TextEditor
                  onChange={setProductDetail}
                  initialValue={
                    DataSort.detail ? DataSort.detail : ProductDetailInit
                  }
                />
              </div>
            </div>

            <div className=" flex-1 flex items-center w border flex-col ">
              <h3 className="py-4 font-bold">Mô tả sản phẩm</h3>
              <div className=" h-[500px]  w-full overflow-scroll">
                <TextEditor
                  onChange={setDescribe}
                  initialValue={
                    DataSort.describe ? DataSort.describe : describe
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="py-2 px-4 bg-red-400 text-white hover:bg-red-600"
          onClick={() => HandleSubmit()}
        >
          Thêm
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

export default EditProduct;
