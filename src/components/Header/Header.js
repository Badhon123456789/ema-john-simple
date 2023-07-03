import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/mange">Manage Inventory Here</a>
      </nav>
      <div className="inp">
      <input type="text" placeholder="Search according to your choice"/>
      <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff", fontSize: '30px', marginLeft: '50px', cursor: 'pointer'}} />
      <p id="num">0</p>
      </div>
    </div>
  );
};

export default Header;
