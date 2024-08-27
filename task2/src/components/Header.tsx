import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="bg-primary p-2" style={{display:"flex",alignItems:"center",justifyContent:"start"}}>
      <div className="p-1 ">
        <NavLink to="/product" style={{color:"white",textDecoration:"none"}}>Product</NavLink>
      </div>
     
      <div className="p-1">
        <NavLink to="/allproducts" style={{color:"white",textDecoration:"none"}}>All Products</NavLink>
      </div>
    </div>
  );
}

export default Header;
