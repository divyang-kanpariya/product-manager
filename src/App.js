import React, { useState, createContext } from "react";
import { ReactDOM } from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InputDetails from "./components/InputDetails";
import ShowProduct from "./components/ShowProduct";
const UserContext = createContext([]);

function App() {

  const [products, setProducts] = useState([{
    id:45,
    name:"This is first product",
    category:"computer",
    description:"description for product 1 description for product 1description for product 1description for product 1description for product 1description for product 1description for product 1description for product 1",
    color:'pink',
    price:'20',
  }]);
  console.log(products);

  return (
    <>
      <UserContext.Provider value={{ products, setProducts }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />} />
            <Route path='inputdetails' index element={<InputDetails />} />
            <Route path='showproduct' index element={<ShowProduct />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext }