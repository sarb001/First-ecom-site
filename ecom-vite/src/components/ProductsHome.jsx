import React from 'react'
import { products } from '../data'
import ProductHome from './ProductHome'

import '../styles/ProductsHome.css';

const ProductsHome = () => {
  return (
    <div className = 'ps-container'> 
        {products.map((item) => (
            <ProductHome item = {item} key = {item._id} />
        ))}
    </div>
  )
}

export default ProductsHome