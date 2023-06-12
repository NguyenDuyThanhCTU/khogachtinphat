import { SiZalo } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
const PopUp = () => {
  return (
    <div className="flex flex-col gap-2">
      <a
        className="w-[50px] h-[50px] bg-orange-700 flex justify-center items-center rounded-3xl call-animation"
        href="tel:0939699629"
      >
        <BsFillTelephoneFill className="w-[30px] h-[30px] text-white " />
      </a>

      <a
        className="w-[50px] h-[50px] bg-blue-600 flex justify-center items-center rounded-3xl spin-animation "
        href="http://zalo.me/0939699629"
      >
        <SiZalo className="w-[30px] h-[30px] text-white" />
      </a>
    </div>
  );
};

export default PopUp;
