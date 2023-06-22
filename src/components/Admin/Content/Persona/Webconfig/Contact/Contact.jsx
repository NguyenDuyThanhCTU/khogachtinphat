import React from "react";
import { useData } from "../../../../../../Context/DataProviders";

const Contact = () => {
  const { Phone, Gmail, Location, Adress } = useData();

  return (
    <div className="bg-[#353535] text-white w-[400px] rounded-xl shadow-xl">
      <div className="p-4 ">
        <h3 className="text-[25px] text-center ">Thông tin liên hệ</h3>
        <div className="flex flex-col gap-3 mt-5">
          <label>Số điện thoại</label>
          <div className="flex gap-5">
            <input
              placeholder={Phone}
              type="text"
              className="px-4 py-2 text-black outline-none rounded-2xl bg-gray-300 "
            />
            <button className="hover:bg-[#bb86fc37] hover:text-[#BB86FC] text-[#74affc] bg-[#74affc43] px-3 rounded-xl">
              Cập nhật
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <label>Gmail</label>
          <div className="flex gap-5">
            <input
              type="text"
              placeholder={Gmail}
              className="px-4 py-2 text-black outline-none rounded-2xl bg-gray-300"
            />
            <button className="hover:bg-[#bb86fc37] hover:text-[#BB86FC] text-[#74affc] bg-[#74affc43] px-3 rounded-xl">
              Cập nhật
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <label>Địa chỉ</label>
          <div className="flex gap-5">
            <textarea
              className="px-2 py-2 text-black outline-none rounded-2xl bg-gray-300"
              placeholder={Adress}
            />
            <div>
              <div>
                <button className="hover:bg-[#bb86fc37] hover:text-[#BB86FC] text-[#74affc] bg-[#74affc43] px-3 py-2 rounded-xl">
                  Cập nhật
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-5">
          <label>Vị trí</label>
          <div className="flex gap-5">
            <input
              type="text"
              placeholder={Location}
              className="px-4 py-2 text-black outline-none rounded-2xl bg-gray-300"
            />
            <button className="hover:bg-[#bb86fc37] hover:text-[#BB86FC] text-[#74affc] bg-[#74affc43] px-3 rounded-xl">
              Cập nhật
            </button>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8415184420396!2d105.76804037533972!3d10.029933690077012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895a51d60719%3A0x9d76b0035f6d53d0!2sCan%20Tho%20University!5e0!3m2!1sen!2s!4v1687233172858!5m2!1sen!2s"
            width="300"
            height="200"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
