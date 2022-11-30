import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductShop.css';

const ProductShop = ({items}) => {

  return (
    <div className='ps-card'>
        <div className="card-header" style = {{width:'40%'}}>
          <Link to = {`/product/${items._id}`}>
             <img src = {items.image}  alt = {items.title}  className = 'img-part' />
          </Link>
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