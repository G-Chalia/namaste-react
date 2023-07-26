import Title from "./Title";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg rounded-xl sm:bg-pink-200">
      <Title />
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
          <li className="px-2">Cart</li>
        </ul>
      </div>
      <button>Login</button>
      <button>Log out</button>
    </div>
  );
};

export default HeaderComponent;
