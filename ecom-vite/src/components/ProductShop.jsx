import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import '../styles/ProductShop.css';

const ProductShop = ({items}) => {

  return (
    <div className='ps-card'>
        <div className="card-header" style = {{width:'40%'}}>
          {/* <img src = "/public/Amazon-Product- 14-.png"  className = 'img-part' /> */}
        <img src = {items.image}  alt = {items.title}  className = 'img-part' />
         </div> 
        <div className="card-body">
           <span> Amazon Product Shirt  </span>
           <span>Price is - $40 </span>
            <span className='title'>  {items.title} </span>
            <span>$Price is {items.price} </span>
        </div>
        <div className="card-footer" style = {{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
             <button style = {{width:'40%',height:'70%'}}>  <FontAwesomeIcon icon = {faHeart} /> </button>
            <button style = {{width:'40%',height:'70%'}}>  <FontAwesomeIcon icon = {faShoppingBag} /> </button>
        </div>
      </div>
  )
}

export default ProductShop