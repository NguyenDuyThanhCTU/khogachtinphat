import { Empty } from "antd";
import React from "react";
import { GiBrickPile } from "react-icons/gi";
import { SiDatabricks } from "react-icons/si";
import { Link } from "react-router-dom";
import { useData } from "../../../../Context/DataProviders";

const Display = ({ Data, title, background }) => {
  const { Phone } = useData();
  return (
    <div
      className={`py-10 font-Montserrat ${background} bg-no-repeat bg-cover`}
    >
      {Data.length === 0 ? (
        <>
          {" "}
          <h3 className="text-center text-[28px] uppercase text-black font-semibold">
            {title}
          </h3>{" "}
          <div className="text-white min-h-screen flex justify-center items-center">
            <Empty />
          </div>
        </>
      ) : (
        <>
          {" "}
          <div>
            <h3 className="text-center text-[28px] uppercase text-white font-semibold">
              {title}
            </h3>
            <div className="grid d:grid-cols-4 p:grid-cols-2  d:grid-rows-3 p:grid-rows-6 gap-5 d:mx-20 mt-5 p:mx-2">
              {Data.map((items, idx) => (
                <Link to={`/san-pham/${items.id}`}>
                  <div className=" bg-[rgba(0,0,0,0.88)] p:h-[300px] d:h-[550px]  cursor-pointer text-yellow-400">
                    <div className="p-5 flex flex-col items-center gap-3">
                      <div className="d:h-[380px] p:h-[150px] flex items-center justify-center overflow-hidden">
                        <img
                          src={items.image}
                          alt="product"
                          className="w-full h-full hover:scale-105 duration-500"
                        />
                      </div>
                      <div className="flex flex-col items-center  font-semibold ">
                        <h4 className="uppercase hover:underline hover:text-yellow-500 truncate1 text-[24px]">
                          {items.name}
                        </h4>
                      </div>
                      <div className="flex gap-5 text-[20px]">
                        <div className="text-yellow-500">
                          <p className="flex items-center">
                            <SiDatabricks className="inline-block mr-2" />
                            <span> {items.brickType}</span>
                          </p>
                          <p className="flex items-center">
                            <GiBrickPile className="   inline-block mr-2" />
                            <span>{items.brickSize}</span>
                          </p>
                        </div>
                        <div className="flex w-full justify-between items-center">
                          <a
                            target="_blank"
                            href={`http://zalo.me/${Phone}`}
                            className="px-2 py-1 border-2 rounded-xl border-black  cursor-pointer hover:scale-105 duration-300 hover:bg-yellow-400 hover:border-white hover:text-black"
                          >
                            Liên hệ
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Display;
