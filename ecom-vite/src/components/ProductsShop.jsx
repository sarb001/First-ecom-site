import React , {useState,useEffect} from 'react'
import '../styles/ProductsShop.css';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import axios from 'axios';
import products from '../data';
import ProductShop from './ProductShop';


const ProductsShop = () => {

 // For filter category and all Products 
 const [data,setdata] = useState(products); 
 

 // for Category
 const [category,setcategory] = useState([])

 // filter and all products 
  const filterResult = (cartitem) => {
    const result = products.filter((curdate) => {
       return curdate.category === cartitem
    })
    setdata(result);
  }

  useEffect(() => {

    const fetchdata = async () => {
      const result = await axios.get('/api/category');
      setcategory(result.data);
    }
    fetchdata();
  },[]);

  return (
    <div className='shop-container'> 
    <div className="shop-row">
         <div className="shop-col">
           <h2> Category </h2>
           <button className = 'shop-btn' onClick={() => setdata(products)}> All <FontAwesomeIcon icon = {faChevronRight} /> </button>
           {category.map((item) => (
              <button className='shop-btn' onClick={() => filterResult(item.title)}> {item.title}  <FontAwesomeIcon icon = {faChevronRight} /></button>
           ))}
         </div>
         <div className="shop-col">
            <div className="shop-products">
                 {data.map((item) => {
                  <ProductShop item = {item} key = {item._id} />
                 })}
            </div>
            <div className="shop-pagination">
                 Pagination 
            </div>
         </div>
    </div>
    </div>
  )
}

export default ProductsShop