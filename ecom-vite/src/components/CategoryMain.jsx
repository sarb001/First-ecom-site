import React from 'react'
import { NavLink } from 'react-router-dom'

import { category } from '../data';

import '../styles/CategoryMain.css'

const CategoryMain = () => {
  return (
    <div className='c-container'>
        <div className="c-row">

            {category.map((item) => (

                <div className="c-col">
                    <img src = {item.image} alt = "" />
                    <div className="category-content" key = {item.id}>
                          <p> {item.title} </p>
                          <NavLink to = "/shop" className= "btn" >  Shop Now  </NavLink>
                    </div>
                </div>
            ))
            }

                {/* <div className="c-col">
                    <img src = "/public/Men1.jpg" alt = "" />
                    <div className="category-content">
                          <p> Men </p>
                          <NavLink to = "/shop" className= "btn" >  Shop Now  </NavLink>
                    </div>
                </div> */}

            {/* <div className="c-col">
                 <img  src = "/public/women2.jpg" alt = "" />
                 <div className="category-content">
                    <p> Women </p>
                    <NavLink to = "/shop" className= "btn" >  Shop Now  </NavLink>
                 </div>
            </div>

            <div className="c-col">
                 <img  src = "/public/kids3.jpg" alt = "" />
                 <div className="category-content">
                    <p> Kids </p>
                    <NavLink to = "/shop" className= "btn" >  Shop Now  </NavLink>
                 </div>
            </div> */}


        </div>
    </div>
  )
}

export default CategoryMain