import React , {useState , useEffect} from 'react'
// import { NavLink } from 'react-router-dom'
// import { category } from '../data';

import axios from 'axios';
import '../styles/CategoryMain.css'

const CategoryMain = () => {

  const [category,setcategory] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios.get('/api/category');
      setcategory(result.data);
    }
    fetchdata()
  },[])

  return (
    <div className='c-container'>
        <div className="c-row">
            { category.map((item) => (
                <div className="c-col">
                    <img src = {item.image} alt = "" className='category-img' />
                    <div className="category-content" key = {item._id}>
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