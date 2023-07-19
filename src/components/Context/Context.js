import React, {useState,useEffect,createContext} from 'react';

const CartContext = createContext()
const Context = ({children}) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
      fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
        <>
       <CartContext.Provider value={{cart,setCart, products,setProducts}}>
        {children}
       </CartContext.Provider>
       </>
    );
};

export default Context;
export {CartContext}