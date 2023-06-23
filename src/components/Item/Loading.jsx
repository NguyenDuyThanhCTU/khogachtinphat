import React, { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useData } from "../../Context/DataProviders";
import { getDocuments } from "../../Config/Services/Firebase/FireStoreDB";
import { useStateProvider } from "../../Context/StateProvider";
const Loading = ({ loading }) => {
  const {
    setPhone,
    setBrickSize,
    setBrickType,
    setAdvertisement,
    setBanner,
    setLocation,
    setLogo,
    setWebsiteName,
    setProducts,
    setGmail,
    setAddress,
  } = useData();
  const {
    setFacebook,
    setFanpage,
    setMessage,
    setInstagram,
    setTiktok,
    setTwitter,
    setYoutube,
  } = useData();

  const { isRefetch, setIsRefetch } = useStateProvider();

  useEffect(() => {
    setIsRefetch(1);
  }, []);

  useEffect(() => {
    getDocuments("website").then((data) => {
      setPhone(data[0].phone);
      setGmail(data[0].gmail);
      setLocation(data[0].location);
      setAddress(data[0].address);
    });
    getDocuments("website").then((data) => {
      setLogo(data[2].websiteLogo);
      setWebsiteName(data[2].websiteName);
    });

    getDocuments("Swebsite").then((data) => {
      setFacebook(data[0].facebook);
      setBanner(data[0].banner);
      setAdvertisement(data[0].adv);
      setFanpage(data[0].fanpage);
      setMessage(data[0].message);
      setInstagram(data[0].instagram);
      setTiktok(data[0].tiktok);
      setTwitter(data[0].twitter);
      setYoutube(data[0].youtube);
    });

    getDocuments("bricksize").then((data) => {
      setBrickSize(data[0].bricksize);
    });
    getDocuments("bricktype").then((data) => {
      setBrickType(data[0].bricktype);
    });
    getDocuments("products").then((data) => {
      setProducts(data);
    });
  }, [isRefetch]);
  return (
    <div>
      {loading && (
        <div class="z-[100] fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className="text-xl font-bold text-primary flex flex-col items-center">
              <FaSpinner className="animate-spin text-2xl text-black " />
              <div className="text-xl font-bold text-white animate-pulse pt-1">
                Loading...
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loading;
