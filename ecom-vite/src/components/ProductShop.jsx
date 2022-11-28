import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ProductShop = ({item}) => {
  return (
    <div className='ps-card'>
        <div className="card-header">

        </div> 
        <div className="card-body">
            <h2 className='title'>  </h2>
            <span>$Price is </span>
        </div>
        <div className="card-footer">
            <button>  <FontAwesomeIcon icon = {faHeart} /> </button>
            <button>  <FontAwesomeIcon icon = {faShoppingBag} /> </button>
        </div>
        ProductShop
    </div>
  )
}

export default ProductShop