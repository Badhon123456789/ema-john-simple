import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
       
          <a href="/home">Shop</a>
         
        <a href="/review">Order Review</a>
        
          <a href="/inventory">Manage Inventory Here</a>
      
      </nav>
      <div className="inp">
      <input type="text" placeholder="Search according to your choice"/>
      <Link to='/review'>
     <div style={{display:'flex' }}>
     <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff", fontSize: '30px', marginLeft: '50px', marginTop:'20px', cursor: 'pointer'}} /><p id="num">0</p>
     </div>
      </Link>
      </div>
    </div>
  );
};

export default Header;
