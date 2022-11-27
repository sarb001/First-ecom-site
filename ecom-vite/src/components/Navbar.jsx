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
                <a href = "/"> <img src = "/public/logi-img.png"   alt = "logoimg" /></a>
            </div>
            
            <div className="n-col">
                <div className="icons">
                    <span>  <FontAwesomeIcon icon= {faArrowRightToBracket} /> Login  </span> 
                    <span>  <FontAwesomeIcon icon= {faHeart} /> 0 </span>
                    <span>  <FontAwesomeIcon icon= {faShoppingBag} /> 0 </span>
                </div>
             </div>
        </div>
    </div>
  )
}




export default Navbar