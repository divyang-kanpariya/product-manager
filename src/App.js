import React, { useState, createContext } from "react";

import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InputDetails from "./components/InputDetails";
import ShowProduct from "./components/ShowProduct";
import CartPage from "./components/CartPage";
import Header from "./components/Header";

const UserContext = createContext([]);
const CartContext = createContext([]);

function App() {

  const [products, setProducts] = useState([]);

  const [cartProducts, setCartProducts] = useState([])

  return (
    <>
      <UserContext.Provider value={{ products, setProducts }}>
        <CartContext.Provider value={{ cartProducts, setCartProducts }}>

          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout />} />
              <Route path='inputdetails' index element={<InputDetails />} />
              <Route path='showproduct' index element={<ShowProduct />} />
              <Route path='cartpage' index element={<CartPage />} />
            </Routes>
          </BrowserRouter>
        </CartContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext, CartContext }