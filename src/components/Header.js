import Title from "./Title";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  console.log("cartItem", cartItems);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg rounded-xl sm:bg-pink-200">
      <Title />
      <h1 className="p-10 font-bold text-pink-950 text-2xl">{user.name}</h1>
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>

          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="px-2">Cart- {cartItems.length}</li>
          </Link>
        </ul>
      </div>
      <button>Login</button>
      <button className="mx-3">Log out</button>
    </div>
  );
};

export default HeaderComponent;
