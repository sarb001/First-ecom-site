import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { Store } from '../Store';
import { Link } from 'react-router-dom';



const Wish = () => {

  const {state,dispatch : ctxdispatch} = useContext(Store);

  const { 
    wish : {wishitems},
  } = state;

  return (
    <div>
        <Navbar />
        wish
        {wishitems.length === 0 ? (<h1 className ='info'>  Wish is Empty <Link to = "/wish">
                Go Shipping Wish  </Link> </h1>) : (
                <>
                  <div className="cart-cards">
                      {wishitems.map((item) => (
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
  )
  }
export default Wish