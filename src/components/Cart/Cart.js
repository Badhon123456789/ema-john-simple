import React, { useState } from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';
import Review from '../Review/Review';
const Cart = (props) => {
    const {cart,setCart} = props.cart
    const [items, setItems] = useState(cart)
    console.log(cart);
    // const totalPrice = cart.reduce((total, prod)=> total + prod.price,0)

    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price;
    }

    let shipping = 0;
    if (totalPrice > 0 && totalPrice < 15) {
        shipping = 12.99
    }
    else if(totalPrice > 15 && totalPrice < 100){
        shipping = 4.99
    }
    else if(totalPrice > 100){
        shipping= 2.99
    }
  
    const productPrice = totalPrice.toFixed(2)
  const tax = (totalPrice / 10).toFixed(2);
  const grandTotal = (totalPrice + shipping +Number(tax)).toFixed(2)
    return (<>
            <h4 className='order'>Order summary</h4>
            <p>Items ordered : {cart.length}</p>
            <p>Product price : ${productPrice}</p>
            <p><small>Shipping cost : ${shipping}</small></p>
            <p><small>Tax + VAT : ${tax}</small></p>
            <p className='total'>Total price : ${grandTotal}</p>
            <Link to={`/review`}>
            <button className="main-button">
                Review your order
            </button>
            </Link>
        </>
    );
};

export default Cart;