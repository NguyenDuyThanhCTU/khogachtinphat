import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import { Result } from "antd";
import { Pagination } from "antd";
import Banner from "./Banner/Banner";
import { getDocumentsByField } from "../../Config/Services/Firebase/FireStoreDB";
import { useStateProvider } from "../../Context/StateProvider";
import { useData } from "../../Context/DataProviders";

const Home = () => {
  const [current, setCurrent] = useState(1);
  const [DataFetch, setDataFetch] = useState([]);
  const [SelectedIdx, setSelectedIdx] = useState(0);
  const { SortByType, SortBySize, setSortByType } = useStateProvider();
  const { BrickType } = useData();

  useEffect(() => {
    getDocumentsByField("products", SortByType, SortBySize).then((data) => {
      setDataFetch(data.reverse());
    });
  }, [SortByType, SortBySize]);

  const onChange = (page) => {
    setCurrent(page);
  };

  const HandleSelected = (Idx, Type) => {
    if (Idx === 0) {
      setSelectedIdx(Idx);
      setSortByType(" ");
    } else {
      setSelectedIdx(Idx);
      setSortByType(Type);
    }
  };

  return (
    <div className=" font-LexendDeca">
      <Banner />
      <div className="d:m-10 p:m-0">
        <div className="p-5 rounded-xl border shadow-xl p:w-[400px] d:w-auto">
          <h3 className="font-semibold d:text-[24px] p:text-[18px]">
            Tất cả sản phẩm {SortByType} {SortBySize}
          </h3>
          <div className="d:flex mt-7 gap-5 p:hidden ">
            <button
              onClick={() => HandleSelected(0)}
              className={`p-2 px-4 max-w-[100px]  truncate border-2 rounded-lg  ${
                SelectedIdx === 0
                  ? "  text-white bg-BlueFF border-BlueFF"
                  : "hover:text-white hover:bg-BlueFF hover:border-BlueFF"
              }`}
            >
              Tất cả sản phẩm
            </button>
            {BrickType.map((data, index) => (
              <button
                key={index + 1}
                className={`p-2 px-4 max-w-[100px]  truncate border-2 rounded-lg  ${
                  SelectedIdx === index + 1
                    ? "  text-white bg-BlueFF border-BlueFF"
                    : "hover:text-white hover:bg-BlueFF hover:border-BlueFF"
                }`}
                onClick={() => HandleSelected(index + 1, data.typename)}
              >
                {data.typename}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-7 rounded-xl border shadow-xl p-5 p:w-[400px] d:w-auto">
          {DataFetch.length > 0 ? (
            <>
              <div className="grid d:grid-cols-5 gap-5 grid-rows-5 p:grid-cols-1 p:ml-16 d:ml-0">
                {DataFetch?.map((data) => (
                  <Product
                    image={data.image}
                    name={data.name}
                    bricktype={data.brickType}
                    bricksize={data.brickSize}
                  />
                ))}
              </div>
              <div className="mt-5 d:flex justify-center p:hidden ">
                <Pagination current={current} onChange={onChange} total={50} />
              </div>
            </>
          ) : (
            <div>
              <Result
                status="404"
                subTitle="Không tìm thấy sản phẩm theo yêu cầu của bạn!"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
