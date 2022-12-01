import React , {useContext, useState} from 'react'
import '../styles/Productscreencard.css';
import { Store } from '../Store';
import { useNavigate } from 'react-router';

const Productscreencard = ({product}) => 
{
    const navigate = useNavigate();

    const [selectedimage,setselectedimage] = useState('');      // default is Empty 

    const {state,dispatch : ctxdispatch} = useContext(Store);

    const addtocarthandler = () => {
        ctxdispatch({
            type : 'CART_ADD_ITEM',
            payload : {...product , quantity : 1},
        });

        navigate('/cart');
    };

    const addtowishhandler = () => {
        ctxdispatch({
            type : 'WISH_ADD_ITEM',
            payload : {...product , quantity : 1},
        });
    };

  return (
    <div className='screen-container'> 
        <div className="screen-row">
            <div className="screen-col">
                <div className="card-images">
                         <div className="card-top">
                              <img src = {selectedimage || product.image}  alt = {product.title} />
                         </div>
                         <div className = "card-bottom">
                            <img src  = {product.image}  onClick= {() => setselectedimage(`${product.image}`)}  alt = {product.title}  />
                            <img src = {product.image1}  onClick= {() => setselectedimage(`${product.image1}`)} alt = {product.title}  />
                            <img src = {product.image2}  onClick= {() => setselectedimage(`${product.image2}`)} alt = {product.title}  />
                            <img src = {product.image3}  onClick= {() => setselectedimage(`${product.image3}`)} alt = {product.title}  />
                         </div> 
                </div>
            </div>
            <div className="screen-col">
                
            <div className="card-row">
                        <div className="first-div div">
                            <h2 className='title'> {product.title} </h2>
                            <p className='category'> {product.category} </p>
                        </div>
                        <div className="second-div div">
                                <span className='price'> Price- ${product.price} </span>
                                <div className="quantity"> Quantity : 1 </div>
                        </div>
                        <div className="third-div div">
                            <p className='desc'>  {product.desc} </p>
                        </div>
                        <div className="fourth-div div">
                            <button className='cart' onClick={addtocarthandler}> Add to Cart  </button>
                            <button className='wish' onClick={addtowishhandler}> Add to Wish  </button>
                         </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Productscreencard