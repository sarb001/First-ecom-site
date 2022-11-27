import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingBag ,faHeart , faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'

import '../styles/Navbar.css';

const Navbar = () => {
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
                <div className="icons">
                   <a href = "/">  <span>  <FontAwesomeIcon icon= {faArrowRightToBracket} /> Login  </span> </a>  
                   <a href = "/">  <span>   <FontAwesomeIcon icon= {faHeart} /> <span className='totalItems'> 0  </span>  </span> </a>
                   <a href = "/">  <span>  <FontAwesomeIcon icon= {faShoppingBag} /> <span className='totalItems'> 0</span> </span> </a> 
                </div>
             </div>
        </div>

         <div className="n-row">
            <div className="nav">
                <ul className="items">
                     <li className='list'> Home  </li>
                     <li className='list'> Shop </li>
                     <li className='list'> About  </li>
                     <li className='list'> Contact </li>
                </ul>
            </div>
         </div>

    </div>
  )
}




export default Navbar