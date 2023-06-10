import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

import { Pagination } from "antd";
import Banner from "./Banner/Banner";
import { BrickType } from "../../Utils/Item";
import {
  getDocuments,
  getProducts,
} from "../../Config/Services/Firebase/FireStoreDB";

const Home = () => {
  const [current, setCurrent] = useState(1);
  const [DataFetch, setDataFetch] = useState([]);

  useEffect(() => {
    getProducts("products").then((data) => {
      setDataFetch(data.reverse());
    });
  }, []);

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <div className=" font-LexendDeca">
      <Banner />
      <div className="m-10 ">
        <div className="p-5 rounded-xl border shadow-xl">
          <h3 className="font-semibold text-[24px]">Tất cả sản phẩm</h3>
          <div className="flex mt-7 gap-5">
            <button className="p-2 px-4 border-2 rounded-lg text-gray-400">
              Tất cả sản phẩm
            </button>
            {BrickType.map((data) => (
              <button className="p-2 px-4 max-w-[100px]  truncate border-2 rounded-lg text-white bg-BlueFF border-BlueFF">
                {data.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-7 rounded-xl border shadow-xl p-5">
          <div className="grid grid-cols-5 gap-5 grid-rows-5">
            {DataFetch?.map((data) => (
              <Product
                image={data.image}
                name={data.name}
                bricktype={data.brickType}
                bricksize={data.brickSize}
              />
            ))}
          </div>
          <div className="mt-5 flex justify-center">
            <Pagination current={current} onChange={onChange} total={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
