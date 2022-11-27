import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowCircleLeft , faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

import '../styles/Slider.css';

const Slider  = () => {
    return(
        <div className="s-container">
             <div className="s-arrow left">
                 <FontAwesomeIcon icon = {faArrowCircleLeft} />
             </div>
             <div className="s-arrow right">
                 <FontAwesomeIcon icon = {faArrowCircleRight} />
             </div>
        </div>
    )
}
export default Slider