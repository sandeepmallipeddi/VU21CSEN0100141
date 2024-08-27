import React, { useState } from "react";
import { fetchallproducts } from "../services/AllProductsService";

interface Product{
    productName:string,
    price:string,
    rating:string,
    discount:string,
    availability:string

}

function AllProducts() {

    const [company,setCompany] = useState<string>("label");
    const [category,setCategory] = useState<string>("label");
    const [minPrice,setMinPrice] = useState<string>("");
    const [maxPrice,setMaxPrice] = useState<string>("");
    const [allProducts,setAllProducts] = useState<Product[]>([]);


    const fetchProducts = ()=>{
        fetchallproducts(company,category,Number(minPrice),Number(maxPrice)).then((data)=>{
            setAllProducts(data)
        }).catch((err)=>{
            console.log(err)
        })
    }

  return (
    <>
      <div className="container border mt-3 p-2">
        <div className="searchbar row">
          <div className="col-12 col-md-6 col-lg-3">
            <select className="form-select" aria-label="Default select example" value={company} onChange={(e)=>{
                setCompany(e.target.value)
            }}>
              <option value={"label"} disabled>
                Company
              </option>
              <option value="AMZ">AMZ</option>
              <option value="FLP">FLP</option>
              <option value="SNP">SNP</option>
              <option value="MYN">MYN</option>
              <option value="AZO">AZO</option>
            </select>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <select className="form-select" aria-label="Default select example" value={category} onChange={(e)=>{
                setCategory(e.target.value)
            }}>
              <option value={"label"} disabled>
                Category
              </option>
              <option value="Phone">Phone</option>
              <option value="Computer">Computer</option>
              <option value="TV">TV</option>
              <option value="Earphone">Earphone</option>
              <option value="Tablet">Tablet</option>
              <option value="Charger">Charger</option>
              <option value="Mouse">Mouse</option>
              <option value="Keypad">Keypad</option>
              <option value="Bluetooth">Bluetooth</option>
              <option value="Pendrive">Pendrive</option>
              <option value="Remote">Remote</option>
              <option value="Speaker">Speaker</option>
              <option value="Headset">Headset</option>
              <option value="Laptop">Laptop</option>
              <option value="PC">PC</option>
            </select>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <input
              type="text"
              className="form-control"
              id="minPrice"
              placeholder="Min Price"
              value={minPrice} onChange={(e)=>{
                setMinPrice((e.target.value))
            }}
            ></input>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <input
              type="text"
              className="form-control"
              id="maxPrice"
              placeholder="Max Price"
              value={maxPrice} onChange={(e)=>{
                setMaxPrice((e.target.value))
            }}
            ></input>
          </div>
        </div>
        <div className="row">
            <div className="col mt-2">
            <button type="button" className="btn btn-primary" onClick={fetchProducts}>Search</button>
            </div>
        </div>
      </div>

      <div className="container mt-3">
      <h2>Product List</h2>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Discount</th>
            <th>Availability</th>

          </tr>
        </thead>
        <tbody>
          {allProducts.map((product) => (
            <tr key={product?.productName}>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.rating}</td>
              <td>{product.discount}</td>
              <td>{product.availability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default AllProducts;
