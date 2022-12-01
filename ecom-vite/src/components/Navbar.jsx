import React, { useContext } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingBag ,faHeart , faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'

import {NavLink} from 'react-router-dom';

import '../styles/Navbar.css';
import { Store } from '../Store';


const Navbar = () => {

    const {state} = useContext(Store);
    const {cart , wish} = state;

  return (
    <div className='n-container'>
        <div className="n-row">
            <div className="n-col">
                <span className='n-email'> mrsinghbusiness05@gmail.com </span>
            </div> 
            <div className="n-col">
                <div className="socials">
                    <a href = "/"> <span> Instagram   </span> </a>
                    <a href = "/"> <span>  Fb </span> </a>
                    <a href = "/"> <span>  Google </span> </a>
                </div>
            </div>
          
        </div>

        <div className="n-row">
            <div className="n-col">
                <a href = "/"> <img src = "/public/logi-img.png"   alt = "logoimg" className ='logo-img' /></a>
            </div>
            
            <div className="n-col">
                <div className = "icons">
                   <a href = "/login">  <span>  <FontAwesomeIcon icon= {faArrowRightToBracket} /> Login  </span> </a>  
                   <a href = "/wish">  <span>   <FontAwesomeIcon icon = {faHeart} />     { wish.wishitems.length > 0 && ( 
                   <span className = 'totalItems'>  { wish.wishitems.length } </span> )}  </span> </a>
                   <a href = "/cart">  <span>  <FontAwesomeIcon icon = {faShoppingBag} /> { cart.cartitems.length > 0 && (
                    <span className = 'totalItems'> { cart.cartitems.length} </span> )}  </span> </a> 
                 
                </div>
             </div>
        </div>

         <div className="n-row">
            <div className="nav">
                <ul className="items">
                     <li className='list'> <NavLink to = "/"         activeclassname = "active">  Home </NavLink>   </li>
                     <li className='list'> <NavLink to = "/shop"     activeclassname = "active"> Shop </NavLink>    </li>
                     <li className='list'> <NavLink to = "/about"    activeclassname = "active"> About  </NavLink>   </li>
                     <li className='list'> <NavLink to = "/contact"  activeclassname = "active"> Contact </NavLink> </li>
                </ul>
            </div>
         </div>

    </div>
  )
}




export default Navbar