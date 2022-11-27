import { faEye, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import '../styles/ProductHome.css';

const ProductHome = ({item}) => {
  return (
    <div className = 'hp-card'>
         <div className = "card-header">
              <img src = {item.image} alt = {item.title} className = "product-img"/>
         </div>
         <div className = "card-body">
             <h3 className='title'> {item.title} </h3> 
             <span> ${item.price} </span>
         </div>
         <div className = "card-footer">
                <button id = "btn"><FontAwesomeIcon icon = {faEye} />  </button>
                <button id = "btn"><FontAwesomeIcon icon = {faHeart} />  </button>
                <button id = "btn"><FontAwesomeIcon icon = {faShoppingBag} />  </button>
         </div>
    </div>
  )
}

export default ProductHome