import { IMG_CON_URL } from "../constants";

const RestruantCard = ({ name, cuisines, deliveryTime, cloudinaryImageId }) => {
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
    </div>
  );
};

export default RestruantCard;
