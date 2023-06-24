import React, { useState } from "react";

import Card from "./Card/Card";
import { useData } from "../../../../../Context/DataProviders";
import { updateDocument } from "../../../../../Config/Services/Firebase/FireStoreDB";
import { notification } from "antd";
import { iconMapping } from "../../../../../Utils/Item";
import { useStateProvider } from "../../../../../Context/StateProvider";

const SocialMedia = () => {
  const { setIsRefetch } = useStateProvider();
  const { SocialMedia } = useData();
  const [isSelected, setSelected] = useState();
  const [isChange, setChange] = useState("");

  const HandleUpdate = (id) => {
    const newData = {
      data: isChange,
    };
    updateDocument("SocialMedia", id, newData).then(() => {
      notification["success"]({
        message: "Cập nhật thành công",
        description: `Thông tin ${id} của bạn đã được cập nhật !`,
      });
      setIsRefetch("SocialMedia");
    });
  };
  const HandleDelete = () => {};
  return (
    <div className="">
      <div className="  border rounded-md border-gray-500">
        <h3 className="p-5 shadow-lg rounded-t-md text-[25px] bg-[#353535]">
          Các kênh truyền thông
        </h3>
        <div className="p-5 grid grid-cols-4 gap-10 ">
          {SocialMedia.map((items, idx) => {
            let Icon = iconMapping[items.icon];

            return (
              <Card
                title={items.title}
                Icon={Icon}
                image={items.image}
                style={items.style}
                data={items.data}
                setSelected={setSelected}
                idx={idx}
                id={items.id}
                setChange={setChange}
                isSelected={isSelected}
                HandleUpdate={HandleUpdate}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
