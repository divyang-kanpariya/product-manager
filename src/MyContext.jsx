import React, { useState, createContext, Children } from "react";

const UserContext = createContext([]);
const CartContext = createContext([]);

function MyContext(children){

    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProdcts] = useState([])

    return(
        <UserContext.Provider value={{products, setProducts}}>
            <CartContext.Provider value={{cartProducts, setCartProdcts}}>
                {children}
             </CartContext.Provider>
        </UserContext.Provider>
    )
}

export {UserContext, CartContext, MyContext}