import { faEye, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import '../styles/ProductHome.css';
import Quick from './Quick';

const ProductHome = ({item}) => {

  const [open,setopen] = useState(false);

  const {state,dispatch : ctxdispatch} = useContext(Store);

  const addtocarthandler = () => {
      ctxdispatch({
          type : 'CART_ADD_ITEM',
          payload : {...item , quantity : 1},
      });
  };

  const addtowishhandler = () => {
    ctxdispatch({
        type : 'WISH_ADD_ITEM',
        payload : {...item , quantity : 1},
    });
};

  return (
    <div className = 'hp-card'>
         <div className = "card-header">
            <Link to = {`/product/${item.slug}`}>
                <img src = {item.image}  alt = {item.title}  className = 'img-part' />
              </Link>       
          </div>
         <div className = "card-body">
             <h3 className='title'> {item.title} </h3> 
             <span> ${item.price} </span>
         </div>
         <div className = "card-footer">
                <button id = "btn" onClick = {() => setopen(true)}><FontAwesomeIcon icon = {faEye} />  </button>
                <button id = "btn"><FontAwesomeIcon icon = {faHeart}       onClick={addtowishhandler} />  </button>
                <button id = "btn"><FontAwesomeIcon icon = {faShoppingBag} onClick={addtocarthandler} />  </button>
         </div>
         {open && <Quick item = {item}  />}
    </div>
  )
}

export default ProductHome