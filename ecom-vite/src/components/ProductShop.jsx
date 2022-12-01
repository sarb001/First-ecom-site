import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import '../styles/ProductShop.css';

const ProductShop = ({items}) => {

  const {state,dispatch : ctxdispatch} = useContext(Store);

  const addtocarthandler = () => {
      ctxdispatch({
          type : 'CART_ADD_ITEM',
          payload : {...items , quantity : 1},
      });
  };

  const addtowishhandler = () => {
    ctxdispatch({
        type : 'WISH_ADD_ITEM',
        payload : {...items , quantity : 1},
    });
};
  return (
    <div className='ps-card'>
        <div className="card-header" style = {{width:'40%'}}>
          <Link to = {`/product/${items.slug}`}>
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
             <button style = {{width:'40%',height:'70%'}}>  <FontAwesomeIcon icon = {faHeart}      onClick = {addtowishhandler} /> </button>
            <button style = {{width:'40%',height:'70%'}}>  <FontAwesomeIcon icon = {faShoppingBag} onClick = {addtocarthandler}  /> </button>
        </div>
      </div>
  )
}

export default ProductShop