import React, { useEffect, useState ,useReducer } from 'react';
import axios from 'axios';
import  products  from '../data'
import ProductHome from './ProductHome'
import logger from 'use-reducer-logger';

import '../styles/ProductsHome.css';


const reducer = (state,action) => {
  switch(action.type){
    case 'FETCH_REQUEST':
      return { ...state , loading : true};
    case 'FETCH_SUCCESS':
       return { ...state , products : action.payload , loading : false };
    case 'FETCH_FAIL':
      return {...state , loading : false , error : action.payload}; 
    default : 
     return state ;
  }
}

const ProductsHome = () => {

  const [{loading , error , products }, dispatch] = useReducer(logger(reducer), {
    loading : true ,
    error : '',
    products: [],
  })

  //  const [products,setproducts] = useState([]);

    useEffect(() => {
      const fetchdata = async() => {
        dispatch({type : 'FETCH_REQUEST'});
          try {
            const result = await axios.get('/api/products');
            dispatch({type : 'FETCH_SUCCESS' ,payload : result.data});
          }
          catch(err){
             dispatch({type : 'FETCH_FAIL' , payload: err.message});
          }
      }
      fetchdata()
    },[])
    
  return (
    <div className = 'ps-container'> 
    
        { 
          loading ? (<h1 className = 'loading'> Loading.... </h1>) : error ? (<h1>{error}</h1>) : (
          products.map((item) => (
              <ProductHome item = {item} key = {item._id} />
          )))
        }
    </div>
  )
}

export default ProductsHome