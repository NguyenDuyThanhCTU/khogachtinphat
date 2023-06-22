import { useStateProvider } from "../../../../Context/StateProvider";
import Contact from "./Webconfig/Contact/Contact";
import Trademark from "./Webconfig/Trademark/Trademark";
import SocialMedia from "./SocialMedia/SocialMedia";
import Products from "./Products/Products";
import Slide from "./Slide/Slide";

const Persona = () => {
  const { isSelected } = useStateProvider();
  return (
    <div className="overflow-scroll h-[864px] w-full  font-LexendDeca text-[#D8D8D8]  ">
      {isSelected === 0 ? (
        <div className="p-5 px-10 flex justify-start gap-10">
          <Contact />
          <Trademark />
        </div>
      ) : isSelected === 1 ? (
        <div className="p-5 px-10 flex justify-start gap-10">
          <Slide />
        </div>
      ) : isSelected === 2 ? (
        <div className="p-5 px-10 flex justify-start gap-10">
          <SocialMedia />
        </div>
      ) : isSelected === 3 ? (
        <>3</>
      ) : isSelected === 4 ? (
        <div className="p-5 px-10 flex justify-start gap-10">
          {" "}
          <Products />
        </div>
      ) : isSelected === 5 ? (
        <div className="p-5 px-10 flex justify-start gap-10">5</div>
      ) : null}
    </div>
  );
};

export default Persona;
