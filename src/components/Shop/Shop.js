import React, { useEffect, useState} from "react";
// import f from "../../fakeData/products.json";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";


const Shop = () => { 
    const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
      fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
          .then(res => res.json())
          .then(data => setProducts(data))
  }, []);
 

  const start = Math.round(Math.random()*71)
  const first10 = products.slice(start, start+10);

  //   console.log(f);
  //   const first10 = f.slice(0, 10);
  //   const [products, setProducts] = useState(first10);

  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  }
  return (
        <div className="shop-container">
      <div className="product-container">
        {first10.map((p) => (
          <Product 
          handleAddProduct = {handleAddProduct}
          product={p}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart = {{cart, setCart}}></Cart>
      
      </div>
    </div>
      
  );
};

export default Shop;