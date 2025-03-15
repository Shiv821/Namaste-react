import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(loggedInUser);
  return (
    <div className="flex justify-between shadow-lg bg-blue-200 border-solid">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            {" "}
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            {" "}
            <Link to="/cart">🛒-({cartItems.length}) </Link>
          </li>
          <button
            className="px-4"
            onClick={() => {
              btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
            }}
          >
            {btnText}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
