import React from "react";

const Card = ({ title, Icon, image }) => {
  return (
    <div className="py-3 flex flex-col gap-5 bg-[#353535] rounded-md justify-between shadow-xl cursor-pointer">
      <div className="">
        <div className="flex justify-between items-center mb-4 mx-5">
          <h3>{title}</h3>
          {Icon && <Icon className="text-[25px]" />}
        </div>
        <div>
          <img
            src={image}
            alt="img"
            className="h-[193px] w-full object-cover"
          />
        </div>
      </div>
      <div className="mx-2 ">
        <div className="flex justify-between items-center mb-4">
          <h3 className="italic">{title}</h3>
          <h3 className="text-blue-400 uppercase font-bold">Cập nhật</h3>
        </div>
        <div className="r">
          <input
            type="text "
            className="outline-none text-black py-2 px-3 rounded-md w-full"
          />
        </div>
      </div>
      <div className="text-center uppercase py-2 border mx-2 bg-purple hover:bg-purpleAdmin hover:text-purpleHover hover:border-purpleHover text-blueAdmin border-blueAdmin ">
        Kiểm tra trạng thái
      </div>
    </div>
  );
};

export default Card;
