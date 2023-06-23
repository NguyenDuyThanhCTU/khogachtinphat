import React from "react";

const Input = ({ name, placeholder, Type }) => {
  return (
    <div>
      <label>{name}</label>
      <div className="flex gap-5">
        {Type && (
          <Type
            placeholder={placeholder}
            type="text"
            className="px-4 py-2 text-black outline-none rounded-2xl bg-gray-300 w-[240px] "
          />
        )}
        <div>
          <button className="hover:bg-[#bb86fc37] hover:text-[#BB86FC] text-[#74affc] bg-[#74affc43] px-3 py-2 rounded-xl">
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
