import Title from "./Title";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
      <button>Login</button>
      <button>Log out</button>
    </div>
  );
};

export default HeaderComponent;
