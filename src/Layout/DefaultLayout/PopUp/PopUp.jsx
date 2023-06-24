import { SiZalo } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useData } from "../../../Context/DataProviders";
const PopUp = () => {
  const { Phone } = useData();
  return (
    <div className="flex flex-col gap-2">
      <a
        className="w-[50px] h-[50px] bg-orange-700 flex justify-center items-center rounded-3xl call-animation"
        href={`tel:${Phone}`}
      >
        <BsFillTelephoneFill className="w-[30px] h-[30px] text-white " />
      </a>

      <a
        className="w-[50px] h-[50px] bg-blue-600 flex justify-center items-center rounded-3xl spin-animation "
        href={`http://zalo.me/${Phone}`}
      >
        <SiZalo className="w-[30px] h-[30px] text-white" />
      </a>
    </div>
  );
};

export default PopUp;
