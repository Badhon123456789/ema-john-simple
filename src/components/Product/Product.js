import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, handleAddProduct }) => {
  // const { product, handleAddProduct } = props;
  const { img, url, stock, name, price, seller } = product;

  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="text">
        <div>
          <a href={url}>
            <h4 id="blue">{name}</h4>
          </a>
          <h5>Seller : {seller}</h5>
          <h4>Price : ${price}</h4>
          <h6>Only {stock} left in stock-order soon</h6>
          <button
            className="main-button"
            onClick={() => {
            handleAddProduct(product);
            }}
          >
            <FontAwesomeIcon icon={faCartShopping} /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
