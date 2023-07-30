import { useContext } from "react";
import { IMG_CON_URL } from "../constants";
import UserContext from "../utils/UserContext";

const RestruantCard = ({ name, cuisines, deliveryTime, cloudinaryImageId }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-[200px] h-[400px] hover:bg-pink-200 hover:w-[230px]  bg-pink-50 p-3 rounded-2xl shadow-lg my-2">
      <img
        className="border-black rounded-lg my-3 border-2"
        alt="card-img"
        src={IMG_CON_URL + cloudinaryImageId}
      />
      <h4 className="font-bold mb-3">{name}</h4>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{deliveryTime + " minutes"}</h4>
      <h4 className="text-red-700 font-bold">{user.name}</h4>
      <h4 className="text-blue-700">{user.email}</h4>
    </div>
  );
};

export default RestruantCard;
