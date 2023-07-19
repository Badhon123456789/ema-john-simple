import React, {useContext} from 'react';
import { CartContext } from '../Context/Context';
const Review = () => {
    const {cart,setCart, products,setProducts} = useContext(CartContext);
    return (
        
        <div>
            <h1>Cart Items: {cart.length}</h1>
        </div>
    );
};

export default Review;