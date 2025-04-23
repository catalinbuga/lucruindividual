import React, { useContext, useState } from "react";
import "./Navebar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navebar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () =>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className="navebar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navebar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          acasă
        </Link>
        <a
          href="#explore-m"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          meniu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contactați-ne
        </a>
      </ul>
      <div className="navebar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navebar-search-icon">
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="" />{" "}
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}> sign in </button>
        ) : (
          <div className="navebar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nave-profile-dropdown">
              <li><img src={assets.bag_icon} alt="" /><p>Comenzi</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Deconectare</p></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navebar;
