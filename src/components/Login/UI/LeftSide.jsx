import React, { useEffect, useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { TfiFacebook } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { getDocumentByField } from "../../Config/Services/Firebase/FireStoreDB";

export const LeftSide = ({
  setCorrect,
  setUncorrect,
  setIsLoading,
  setIsChangePasswords,
}) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [Hide, setHide] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [DataFetch, setDataFetch] = useState();
  let EMAIL = "Admin";
  let PASSWORD = "AdminIsuzusuzukisoctrang";

  const navigate = useNavigate();
  console.log(DataFetch);
  useEffect(() => {
    getDocumentByField("accounts", "admin", "username")
      .then((data) => setDataFetch(data))
      .catch((err) => console.error(err));
  }, []);

  const HandleLogin = () => {
    if (Email === EMAIL && Password === PASSWORD) {
      setIsLoading(false);
      setCorrect(true);
      setTimeout(() => {
        setIsLoading(true);
      }, 1000);
      setTimeout(() => {
        navigate("/admin");
      }, 3000);
    } else if (!Email || !Password) {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 2000);
    } else {
      setIsLoading(false);
      setUncorrect(true);
      setTimeout(() => {
        setUncorrect(false);
      }, 2000);
    }
  };

  return (
    <div className="flex-1  m-5 mt-8 mb-2 flex-col flex items-center justify-center  relative">
      <h3 className="text-colortopdownGray text-[20px] font-medium">
        Người quản trị
      </h3>

      <h2 className="text-colortopdownGray text-[24px] font-semibold">
        Đăng nhập
      </h2>
      <div className="py-3 mb-4 text-[14px] w-full font-normal border hover:border-colorBlueBold text-center mt-4 rounded-lg ">
        <div className="hover:scale-125 duration-300">
          <TfiFacebook className="text-blue-600 mr-2 inline-block text-[25px]" />
          Với Facebook
        </div>
      </div>
      <div className="py-3  text-[14px] w-full font-normal border hover:border-colorBlueBold text-center mb-4 rounded-lg">
        <button
          className="hover:scale-125 duration-300 w-full"
          // onClick={() => GoogleAuth()}npo
        >
          <FcGoogle className="text-blue-600 text-[25px] mr-2 inline-block" />
          Với Google
        </button>
      </div>

      <div className="border h-0 w-full relative mt-2 mb-4">
        <p className="absolute bg-white px-10 py-1  -top-4 d:left-[20%] p:left-[9%]">
          Hoặc tiếp tục với email
        </p>
      </div>

      <div className="w-full mt-3  h-[89px] font-semibold text-[13px] ">
        <div className="mb-2">
          Tài khoản
          <p className="text-red-700 inline-block ml-1">*</p>
        </div>
        <div className="w-full border rounded-lg mb-1">
          <input
            type="text"
            className="p-2 w-full font-normal rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full   h-[89px] font-semibold text-[13px] ">
        <div className="mb-2">
          Mật khẩu
          <p className="text-red-700 inline-block ml-1">*</p>
        </div>
        <div className="w-full border rounded-lg mb-1 relative">
          <input
            type={Hide ? "text" : "password"}
            className="p-2 w-full font-normal rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
          />
          {Hide ? (
            <BiHide
              className="absolute right-3 top-[5px] text-[25px] text-colortopdownBlue"
              onClick={() => setHide(false)}
            />
          ) : (
            <BiShow
              className="absolute right-3 top-[5px] text-[25px] text-colortopdownBlue"
              onClick={() => setHide(true)}
            />
          )}
        </div>
        {errorMessage && (
          <p className="text-red-600 font-normal  ml-2">
            Vui lòng nhập tài khoản và mật khẩu!
          </p>
        )}

        <div className="italic font-normal   ">
          <button
            onClick={() => setIsChangePasswords(true)}
            className="p-3 hover:underline"
          >
            Thay đổi mật khẩu
          </button>
        </div>
      </div>

      <div className=" mb-4 w-full ">
        <button
          className="py-3 my-6 bg-blue-900 text-white w-full hover:bg-colorBlueBoldHover rounded-lg"
          onClick={() => HandleLogin()}
        >
          Tiếp tục
        </button>
      </div>
    </div>
  );
};
