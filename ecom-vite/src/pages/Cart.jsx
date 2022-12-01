import React from 'react'
import { useContext } from 'react'
import Navbar from '../components/Navbar'
import { Store } from '../Store';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import '../styles/Cart.css';

const Cart = () => {

  const navigate = useNavigate();
  const {state,dispatch : ctxdispatch} = useContext(Store);

  const { 
    cart : {cartitems},
  } = state;

  // const updatecarthandler = async (item,quantity) => {
 
  //    const {data} = await axios.get(`/api/products/slug/${item.slug}`);
  //    if(data.countinstock < quantity) {
  //       window.alert('Sorry ! Product is out of Stock');
  //       return;
  //    }

  //     ctxdispatch({
  //         type : 'CART_ADD_ITEM',
  //         payload : {...item , quantity },
  //     });
  // }

   const removeitemhandler = (item) => {
      ctxdispatch({
          type : 'CART_REMOVE_ITEM',
          payload : item,
      });
   }

   const checkoutHanlder = () => 
   {
      navigate('/login?redirect=/shipping');
   }

  return (
    <div>
        <Navbar /> 

        <div className="cart-container">
           <div className="cart-row">
               <h2 className="cart-title"> Shopping cart   </h2>
           </div>
           <div className = "cart-row">
            <div className = "cart-col">
               {cartitems.length === 0 ? (<h2 className='info'>  Cart is Empty
                <Link to = "/shop">
                Go Shipping Cart  </Link> </h2>) : (
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
                                   <button  onClick = {() => updatecarthandler(item,item.quantity - 1)}  disabled = {item.quantity === 1}>
                                    <FontAwesomeIcon  icon = {faMinusCircle} /> </button>
                                   <span  className='cart-quantity'> {item.quantity} </span> {' '}
                                   <button onClick = {() => updatecarthandler(item,item.quantity + 1 )}  disabled = {item.quantity === 1}>
                                    <FontAwesomeIcon  icon = {faPlusCircle} /> </button>
                                </div>
                             </div>
                             <div className="cart-footer">
                              <span className="cart-price"> ${item.price} </span>
                              <button className='footer-btn' onClick={() => removeitemhandler(item)}> <FontAwesomeIcon icon = {faTrashAlt}/> </button>
                              </div>
                          </div>
                        ))}
                  </div>
                </>
               )}
            </div>
            <div className="cart-col">
              <div className="checkout-card">
                   <div className="checkout-body">
                      <h2 className="checkout-title">
                        Subtotal ({cartitems.reduce((a,c) => a + c.quantity,0)} {' '} items  ) : $
                        {cartitems.reduce((a,c) => a + c.price + c.quantity,0)}
                      </h2>
                   </div>
                   <div className="checkout-footer">
                      <button onClick = {checkoutHanlder} className = 'checkout-btn' type = "button" disabled = {cartitems.length === 0}> 
                          Proceed to Checkout
                       </button>
                   </div>
              </div>
            </div>
           </div>
        </div>


    </div>
  )
}

export default Cart