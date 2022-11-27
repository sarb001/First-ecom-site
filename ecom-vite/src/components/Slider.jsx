import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowCircleLeft , faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

// import { slideritems } from "../data";

import '../styles/Slider.css';

const Slider  = () => {

    // const [slideindex,setslideindex] = useState(0);
    // const handleClick = (direction) => {

    //     if(direction  === "left")
    //     {
    //         setslideindex(slideindex > 0 ? slideindex - 1 : 2) // 2 is lastimage
    //     }else{
    //         setslideindex(slideindex > 2 ? slideindex + 1 : 0) // 0 is first image
    //     }
    // }

    return(
        <div className="s-container">
             <div className="s-arrow left" onClick={() => handleClick("left")} >
                 <FontAwesomeIcon icon = {faArrowCircleLeft} />
             </div>
             <div className="wrapper">
                     {/* {
                        slideritems.map((item) => 
                        (
                            <div className="slide" key = {item.id}>
                                <div className="img-container">
                                    <img src = {item.image} alt = "" className="s-img" />
                                </div>
                            </div>
                        ))
                     } */}

                
                        <div className="slide" >
                                <div className="img-container">
                                    <img src = "/image-4.jpg" alt = "" className="s-img" />
                                </div>
                            </div> 



             </div>
             <div className="s-arrow right"  onClick={() => handleClick("right")}>
                 <FontAwesomeIcon icon = {faArrowCircleRight} />
             </div>
        </div>
    )
}
export default Slider