import axios from "axios"

export const fetchallproducts = async (company:string,category:string,minPrice:Number,maxPrice:Number)=>{
    const response =await axios.get(`http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${10}&minPrice=${minPrice}$maxPrice=${maxPrice}`);
    const result = response.data;
    return result;
}