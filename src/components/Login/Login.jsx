import React from "react";
import { useState } from "react";

import { LeftSide } from "./UI/LeftSide";
import { RightSide } from "./UI/RightSide";
import { ChangePassword } from "./UI/ChangePassword";
import Alert from "../Item/Alert";
import Loading from "../Item/Loading";
const Login = () => {
  const [Correct, setCorrect] = useState(false);
  const [Uncorrect, setUncorrect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChangePasswords, setIsChangePasswords] = useState(false);

  return (
    <div className="bg-[rgba(0,0,0,0.3)] w-full h-full z-50 absolute">
      <div className="">
        <Alert correct={Correct} uncorrect={Uncorrect} />
      </div>
      {/* Fetch Data for admin page in Alert Component */}
      <Loading loading={isLoading} />

      <div className="d:w-[880px] p:w-[90vw] h-[529px] absolute  bg-white bottom-[25%] p:left-[5%] d:left-[30%] flex font-LexendDeca cursor-pointer rounded-sm -z-10">
        {isChangePasswords ? (
          <ChangePassword setIsChangePasswords={setIsChangePasswords} />
        ) : (
          <LeftSide
            setIsChangePasswords={setIsChangePasswords}
            setCorrect={setCorrect}
            setUncorrect={setUncorrect}
            setIsLoading={setIsLoading}
          />
        )}

        <RightSide />
      </div>
    </div>
  );
};

export default Login;
