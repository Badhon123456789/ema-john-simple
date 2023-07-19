import React, {useContext} from "react";
// import f from "../../fakeData/products.json";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { CartContext } from "../Context/Context";


const Shop = () => {
  const {cart,setCart, products,setProducts} = useContext(CartContext)

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
        <Cart cart = {cart}></Cart>
      
      </div>
    </div>
      
  );
};

export default Shop;