import React, { useEffect, useState } from "react";

import { useData } from "../../../Context/DataProviders";
import Input from "../../Admin/Item/Input";
import { notification } from "antd";
import { useStateProvider } from "../../../Context/StateProvider";
import { addDocument } from "../../../Config/Services/Firebase/FireStoreDB";

const Contact = () => {
  const { Phone, Location, Address } = useData();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const HandleDiscard = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setTitle("");
    setDescription("");
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (!phone || !name || !email || !title || !description) {
      notification["warning"]({
        message: "Thao tác KHÔNG thành công !",
        description: `
           Vui lòng nhập đầy đủ THÔNG TIN !`,
      });
    } else {
      let data = {
        HọTên: name,
        Email: email,
        SĐT: phone,
        ĐC: address,
        NộiDung: description,
      };
      const response = await fetch(
        "https://formsubmit.co/ajax/thanhnd2512@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        HandleDiscard();
        notification["success"]({
          message: "Thành công !",
          description: `
             Chúng tôi sẽ liên hệ trong thời gian sớm nhất !`,
        });
      } else {
        notification["error"]({
          message: "Lỗi !",
          description: `
             Lỗi không xác định !`,
        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <div>
        {Location ? (
          <>
            {" "}
            <iframe
              src={Location}
              className="w-screen h-[50vh]"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </>
        ) : (
          <div className=" w-screen h-[50vh] overflow-hidden cursor-pointer">
            <img
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/312755810_503545928456727_6996694448340822390_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=300f58&_nc_ohc=02zKygIhm28AX-j48zj&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDz-7LBZKK22TB_Hlobkn42QOpSdainTkM6HcElMfLw-Q&oe=64DDE07F"
              alt="banner"
              className="w-full h-full hover:scale-110 duration-300 object-cover"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col items-center gap-5 py-5 mx-2 ">
        <h3 className="uppercase text-maincontent text-[40px] font-semibold text-center">
          Liên hệ để được tư vấn
        </h3>
        <div className="flex justify-center d:gap-32 d:flex-row p:flex-col p:gap-2">
          <div className="flex flex-col items-center">
            <p className="text-center text-[20px] font-normal text-maincontent">
              Hotline
            </p>
            <p> {Phone}</p>
          </div>
        </div>
      </div>
      <div className="bg-black w-full border-t border-white">
        <div className=" py-10 ">
          <h3 className="uppercase text-maincontent text-[40px] font-semibold text-center py-3 font-SVNDancing">
            Liên hệ nhanh
          </h3>
          <div className="p-2 flex  justify-center gap-5 p:flex-col d:flex-row">
            <div>
              <div className="flex flex-col gap-3 my-3">
                <p>
                  <strong>Văn phòng:</strong> {""}
                  {Address}
                </p>

                <p>
                  <strong>Hotline:</strong> {Phone}
                </p>

                <p>Để lại thông tin, chúng tôi sẽ liên hệ với bạn sớm nhất !</p>
              </div>
              <img
                src="https://ngavietceramics.com/wp-content/uploads/2021/09/z2886099466903_f1203d58ded1b42ceef72163ec3a5e77-560x420.jpg"
                alt="img"
                className="w-[600px]"
              />
            </div>
            <div className="  text-white border border-yellow-400 bg-black w-[400px]  ">
              <form
                onSubmit={HandleSubmit}
                className="flex flex-col gap-3 mb-5 p-3 w-full  text-white h-full shadow-xl"
              >
                <Input
                  text="Họ Tên(*)"
                  Value={name}
                  setValue={setName}
                  Input={true}
                />
                <Input
                  text="Email"
                  Value={email}
                  setValue={setEmail}
                  Input={true}
                />
                <Input
                  text="Điện thoại(*)"
                  Value={phone}
                  setValue={setPhone}
                  Input={true}
                />
                <Input
                  text="Địa chỉ(*)"
                  Value={address}
                  setValue={setAddress}
                  Input={true}
                />
                <Input
                  text="Chủ đề"
                  Value={title}
                  setValue={setTitle}
                  Input={true}
                />
                <Input
                  text="Nội dung(*)"
                  Value={description}
                  setValue={setDescription}
                  Input={false}
                />
                <div className=" ">
                  <button
                    type="submit"
                    className="uppercase py-2 px-6 bg-maincontent text-white cursor-pointer hover:bg-main bg-green-500 hover:bg-green-600"
                  >
                    gửi đi
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
