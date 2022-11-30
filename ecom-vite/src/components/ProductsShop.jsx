import React , {useState,useEffect} from 'react'
import '../styles/ProductsShop.css';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import axios from 'axios';
import  products  from '../data';
import ProductShop from './ProductShop';
import '../styles/ProductsShop.css';

const ProductsShop = () => {

 // For filter category and all Products 
 const [dataprod,setdataprod] = useState(products); 

 // for Category
 const [categories,setcategories] = useState([])

 // filter and all products 

  // const filterResult = (cartitem) => {
  //   const resultdata = dataprod.products?.filter( function (curdate) {
  //      return curdate.category === cartitem;
  //   });
  //   console.log('Inside final state ',setdataprod(resultdata))
  //   setdataprod(resultdata);
  //   console.log('result is ',resultdata);
  //   // console.log(setdata(result))
  // }

  // const filterResult = (cartitem) =>  { 
  //   const resultedData = dataprod.products?.filter((curdate) => {
  //        return  curdate.category === cartitem;
  //   })
  //   console.log(resultedData);
  //   console.log('dadada ',setdataprod(resultedData));
  //   console.log('eee ',setdataprod({resultedData}));

  //   setdataprod({resultedData});
  // }


  // For showing all Category 
  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios.get('/api/category');
      setcategories(result.data);
    }
    fetchdata();
  },[]);


  return (
    <div className='shop-container'> 
    <div className="shop-row">
         <div className="shop-col">
           <h2> Category </h2>
           <button className = 'shop-btn'  onClick={() => setdataprod(products)}> All <FontAwesomeIcon icon = {faChevronRight} /> </button>
           {categories?.map((item) => (
              <button className='shop-btn' onClick={() => filterResult(item.title)}> {item.title}  <FontAwesomeIcon icon = {faChevronRight} /></button>
           ))}
         </div>
         <div className="shop-col">
            <div className="shop-products">
                 { 
                   dataprod.products?.map((items) => (
                  <ProductShop items = {items} key = {items._id} />
                 ))}
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