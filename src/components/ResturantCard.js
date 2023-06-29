import { IMG_CON_URL } from "../constants";

const RestruantCard = ({ name, cuisines, deliveryTime, cloudinaryImageId }) => {
  return (
    <div className="card">
      <img alt="card-img" src={IMG_CON_URL + cloudinaryImageId} />
      <h4>{name}</h4>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{deliveryTime + " minutes"}</h4>
    </div>
  );
};

export default RestruantCard;
