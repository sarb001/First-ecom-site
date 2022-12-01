import React from 'react'
import { useContext } from 'react'
import Navbar from '../components/Navbar'
import { Store } from '../Store';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import '../styles/Cart.css';

const Cart = () => {

  const {state,dispatch : ctxdispatch} = useContext(Store);

  const { 
    cart : {cartitems},
  } = state;

  return (
    <div>
        <Navbar /> 

        <div className="cart-container">
           <div className="cart-row">
               <h2 className="cart-title"> Shopping cart   </h2>
           </div>
           <div className = "cart-row">
            <div className = "cart-col">
               {cartitems.length === 0 ? (<h1 className='info'>  Cart is Empty
                <Link to = "/shop">
                Go Shipping Cart  </Link> </h1>) : (
                <>
                  <div className="cart-cards">
                      {cartitems.map((item) => (
                          <div className="cart-card" key = {item._id}>
                             <div className="cart-header">
                              <img src  = {item.image}  alt = {item.title} />
                             </div>
                             <div className="cart-body">
                                <Link to = {`/product/${item.slug}`}> {item.title} </Link>
                                <div className="buttons">
                                   <button disabled = {item.quantity === 1}><FontAwesomeIcon  icon = {faMinusCircle} /> </button>
                                   <span  className='cart-quantity'> {item.quantity} </span>
                                   <button disabled = {item.quantity === 1}><FontAwesomeIcon  icon = {faPlusCircle} /> </button>
                                </div>
                             </div>
                             <div className="cart-footer">
                              <span className="cart-price">  {item.price} </span>
                              <button> <FontAwesomeIcon icon = {faTrashAlt}/> </button>
                              </div>
                          </div>
                        ))}
                  </div>
                </>
               )}
            </div>
            <div className="cart-col"></div>
           </div>
        </div>


    </div>
  )
}

export default Cart