import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart
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
        shipping=0
    }
  
    const productPrice = totalPrice.toFixed(2)
  const tax = (totalPrice / 10).toFixed(2);
  const grandTotal = (totalPrice + shipping +Number(tax)).toFixed(2)
    return (
        <div>
            <h4 className='order'>Order summary</h4>
            <p>Items ordered : {cart.length}</p>
            <p>Product price : ${productPrice}</p>
            <p><small>Shipping cost : ${shipping}</small></p>
            <p><small>Tax + VAT : ${tax}</small></p>
            <p className='total'>Total price : ${grandTotal}</p>
            <button className="main-button">
                Review your order
            </button>
        </div>
        
    );
};

export default Cart;