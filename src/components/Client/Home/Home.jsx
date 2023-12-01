import React, { useEffect, useState } from "react";
import ProductItem from "./Product/ProductItem";
import { Result } from "antd";
import { Pagination } from "antd";
import Banner from "./Banner/Banner";

import { Link } from "react-router-dom";
import { useStateProvider } from "../../../Context/StateProvider";
import { getDocumentsByField } from "../../../Config/Services/Firebase/FireStoreDB";
import { useData } from "../../../Context/DataProviders";

const Home = () => {
  const [current, setCurrent] = useState(1);
  const [DataFetch, setDataFetch] = useState([]);
  const [SelectedIdx, setSelectedIdx] = useState(0);
  const { SortByType, SortBySize, setSortByType, Search, setSearch } =
    useStateProvider();
  const { BrickType, BrickSize } = useData();
  const [sort, setSort] = useState("");

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
      setSearch("");
    } else {
      setSelectedIdx(Idx);
      setSortByType(Type);
    }
  };

  return (
    <div className=" font-LexendDeca pb-10">
      <Banner />
      <div className="d:m-auto d:w-[1505px] p:w-auto p:m-0 d:mt-10 p:my-5">
        <div className="p-5 p:rounded-none d:rounded-xl border shadow-xl w-auto">
          <h3 className="font-semibold d:text-[24px] p:text-[18px]">
            Tất cả sản phẩm {SortByType} {SortBySize}
          </h3>
          <div className="d:flex mt-7 gap-5 p:hidden ">
            <button
              onClick={() => HandleSelected(0)}
              className={`p-2 px-4 max-w-[100px]  truncate border-2 rounded-lg  ${
                SelectedIdx === 0
                  ? "  text-white bg-gray-500 border-gray-500"
                  : "hover:text-white hover:bg-gray-500 hover:border-gray-500"
              }`}
            >
              Tất cả sản phẩm
            </button>
            {BrickType.map((data, index) => (
              <button
                key={index + 1}
                className={`p-2 px-4 max-w-[100px]  truncate border-2 rounded-lg  ${
                  SelectedIdx === index + 1
                    ? "  text-white bg-gray-500 border-gray-500"
                    : "hover:text-white hover:bg-gray-500 hover:border-gray-500"
                }`}
                onClick={() => HandleSelected(index + 1, data.typename)}
              >
                {data.typename}
              </button>
            ))}
          </div>
          <div className="d:flex mt-7 gap-5 p:hidden ">
            <div className="flex flex-col gap-2">
              <select
                className="outline-none lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
                onChange={(e) => setSort(e.target.value)}
              >
                <option>Tất cả sản phẩm</option>

                {BrickSize.map((item, idx) => (
                  <option
                    key={idx}
                    className=" outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300"
                    value={item.typename}
                  >
                    {item.typename}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-7 rounded-xl border-yellow-400 border shadow-xl p-5 p:w-auto d:w-full bg-gray-500 flex flex-col items-center">
          {DataFetch.length > 0 ? (
            <>
              <div className="grid w-full  d:grid-cols-5 gap-5 grid-rows-5 p:grid-cols-2 ">
                {(sort !== ""
                  ? DataFetch.filter((item) => item.brickSize === sort)
                  : Search !== ""
                  ? DataFetch.filter((items) => items.brickType === Search)
                  : DataFetch
                )?.map((data) => (
                  <>
                    <Link to={`/san-pham/${data.id}`}>
                      <ProductItem
                        image={data.image}
                        name={data.name}
                        bricktype={data.brickType}
                        bricksize={data.brickSize}
                      />
                    </Link>
                  </>
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
