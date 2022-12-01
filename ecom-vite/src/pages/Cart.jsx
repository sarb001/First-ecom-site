import React from 'react'
import { useContext } from 'react'
import Navbar from '../components/Navbar'
import { Store } from '../Store'

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
           <div className="cart-row">
            <div className="cart-col">
               {cartitems.length === 0 ? (<h1 className='info'>  Cart is Empty <Link to = "/shop">
                Go Shipping Cart  </Link> </h1>) : (
                <>
                  <div className="cart-cards">
                      {cartitems.map((item) => (
                         <div className="cart-card" key = {item._id}>
                             <div className="cart-header">
                              <img src  = {item.image}  alt = {item.title} />
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