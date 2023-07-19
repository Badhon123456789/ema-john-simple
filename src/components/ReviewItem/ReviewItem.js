import React from 'react';

const ReviewItem = (props) => {
    const cart = props.cart
    console.log(props.cart);
    const style = {
        border: '1px solid green'
    }
    return (
        <div>
           {
            cart.map((item) => 
            {return <div style={style}>
                <h3>{item.name}</h3>
            </div>})
           }
            
            
        </div>
    );
};

export default ReviewItem;