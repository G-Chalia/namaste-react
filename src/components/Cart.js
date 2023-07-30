import { useSelector, useDispatch } from "react-redux";
import FoodCard from "./FoodCard";
import { removeItem } from "../utils/cartSlice";
const Cart = () => {
  // Subscribe to Specific portions not the whole store
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const removeItems = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="flex m-10">
      <h1 className="font-bold text-3xl">CART PAGE</h1>
      {cartItems &&
        cartItems.length !== 0 &&
        cartItems.map((card, e) => (
          <div>
            <FoodCard
              name={card.card.info.name}
              cloudinaryImageId={card.card.info.imageId}
            />
            <button className="bg-green-400" onClick={() => removeItems(card)}>
              REMOVE ITEM
            </button>
          </div>
        ))}
    </div>
  );
};

export default Cart;
