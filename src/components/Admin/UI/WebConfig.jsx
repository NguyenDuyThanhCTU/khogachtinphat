import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const WebConfig = () => {
  return (
    <div className="h-[94vh] w-full bg-black font-LexendDeca text-white flex justify-between">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default WebConfig;
