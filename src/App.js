import React, {useState, createContext} from "react";
import { ReactDOM } from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InputDetails from "./components/InputDetails";
import ShowProduct from "./components/ShowProduct";
const UserContext = createContext([]);

function App() {

  const [products, setProducts] = useState([ {
    name : 'car1',
    category : 'car1',
    file :'',
    description : 'this is a super car1',
    price:"20",
    color:"black"
  },{
    name : 'car2',
    category : 'car2',
    file : '',
    description : 'this is a super car2',
    price:"20",
    color:"black"
  }]); 

  return (
    <>
    <UserContext.Provider value={{products, setProducts}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}/>
          <Route path='inputdetails'  index element={<InputDetails />} />
          <Route path='showproduct'  index element={<ShowProduct />} />
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
export {UserContext}