import React from 'react'
// import { NavLink } from 'react-router-dom'

import { category } from '../data';

import '../styles/CategoryMain.css'

const CategoryMain = () => {
  return (
    <div className='c-container'>
        <div className="c-row">
            {
            category.map((item) => (
                <div className="c-col">
                    <img src = {item.image} alt = "" className='category-img' />
                    <div className="category-content" key = {item.id}>
                          <p> {item.title} </p>
                          <button className='c-btn'> Shop Now  </button>
                    </div>
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default CategoryMain