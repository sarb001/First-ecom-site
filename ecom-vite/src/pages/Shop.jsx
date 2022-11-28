import React from 'react'
import Navbar from '../components/Navbar'
import ProductsShop from '../components/ProductsShop';

import '../styles/Shop.css';

const Shop = () => {
  return (
    <div>
        <Navbar />
          <div className="s-row">
            <div className="s-col">
              <ProductsShop />
            </div>
          </div>
    </div>
  )
}

export default Shop