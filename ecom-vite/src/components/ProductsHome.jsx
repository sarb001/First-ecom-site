import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { products } from '../data'
import ProductHome from './ProductHome'

import '../styles/ProductsHome.css';

const ProductsHome = () => {

   const [products,setproducts] = useState([]);

    useEffect(() => {
      const fetchdata = async() => {
        const result = await axios.get('/api/products');
        setproducts(result.data);
      }
      fetchdata()
    },[])
    
  return (
    <div className = 'ps-container'> 
        {products.map((item) => (
            <ProductHome item = {item} key = {item._id} />
        ))}
    </div>
  )
}

export default ProductsHome