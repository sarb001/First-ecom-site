import React, {useReducer , useEffect} from 'react'
import { useParams} from 'react-router-dom';
import axios from 'axios';
import Productscreencard from './Productscreencard';
import Navbar from '../components/Navbar';

const reducer = (state,action) => {
  switch(action.type){
    case 'FETCH_REQUEST':
      return { ...state , loading : true};
    case 'FETCH_SUCCESS':
       return { ...state , product : action.payload , loading : false };
    case 'FETCH_FAIL':
      return {...state , loading : false , error : action.payload}; 
    default : 
     return state ;
  }
}

const Productscreen = () => {

  const params = useParams();
  const {slug} =  params;

  const [{loading , error , product }, dispatch] = useReducer(reducer, {
    loading : true ,
    error : '',
    product: [],
  });

  useEffect(() => {
    const fetchdata = async() => {
      dispatch({type : 'FETCH_REQUEST'});
        try {
          const result = await axios.get(`/api/products/slug/${slug}`);
          dispatch({type : 'FETCH_SUCCESS' ,payload : result.data});
        }
        catch(err){
           dispatch({type : 'FETCH_FAIL' , payload: err.message});
        }
    }
    fetchdata()
  },[slug])

  return loading ? (<h1 className = 'loading'> Loading.... </h1>) :  error ? (
    <h1 className='error'> {error} </h1>) : (
      <>
      <Navbar />
      <Productscreencard product = {product} /> 
      </> 
    )
}


export default Productscreen