import React from "react";
import { ReactDOM } from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InputDetails from "./components/InputDetails";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}/>
          <Route path='inputdetails'  index element={<InputDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
