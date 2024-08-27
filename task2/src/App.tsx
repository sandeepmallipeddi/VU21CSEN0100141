import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import Product from "./components/Product";
import Home from "./components/Home";



function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route   index element={<AllProducts/>}></Route>
        <Route path="allproducts"  element={<AllProducts/>}></Route>
        <Route path="product"  element={<Product/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App;
