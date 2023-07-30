import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useResturant from "../utils/useResturant";
import { IMG_CON_URL } from "../constants";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestMenu = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const restInformation = useResturant(params.id);
  //const [restInformation, setRestInformation] = useState({});

  const cardInfo =
    restInformation?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1]
      .card.card.itemCards;
  console.log("cards", cardInfo);

  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      <h1 className="text-4xl text-blue-950 font-bold m-6">
        Resturant Id-{params.id}{" "}
      </h1>
      {cardInfo &&
        cardInfo.map((card, index) => (
          <div className="font-bold text-xl flex border border-red-300 w-1/2 rounded-lg shadow-xl my-4 mx-4 justify-between">
            <div className="my-6 text-3xl text-pink-700 mx-5">
              {card.card.info.name}
            </div>
            <button
              className="my-16 p-2 bg-blue-400 rounded-2xl"
              onClick={() => handleAddItem(card)}
            >
              Add
            </button>

            <img
              className="my-6 mx-6 rounded-xl shadow-xl w-60 justify-end"
              src={`${IMG_CON_URL + card.card.info.imageId}`}
            />
          </div>
        ))}
      <ul></ul>
    </div>
  );
};

export default RestMenu;
