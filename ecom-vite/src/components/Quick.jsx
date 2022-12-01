import React, { useContext } from 'react'
import { useState } from 'react'
import { Store } from '../Store';
import '../styles/Quick.css'

// this Page to Show on clicking Item 


const Quick = ({item}) => {

    // For change Popup 
    const [selectedimage,setselectedimage] = useState('');      // default is Empty 

    // For close Popup
    const [style,setstyle] = useState('main-container');

    // For closing POpuofunction works
    const changestyle = () => 
    {
        setstyle('main-containerOne');
    };

    const {state,dispatch : ctxdispatch} = useContext(Store);

    const addtocarthandler = () => {
        ctxdispatch({
            type : 'CART_ADD_ITEM',
            payload : {...item , quantity : 1},
        });
    };

    const addtowishhandler = () => {
        ctxdispatch({
            type : 'WISH_ADD_ITEM',
            payload : {...item , quantity : 1},
        });
    };

  return (
    <div className = {style}>
            <div className="card-quick" key = {item._id} >
                <div className="card-row">
                    <div className="card-images">
                         <div className="card-top">
                              <img src = {selectedimage || item.image}  alt = {item.title} />
                         </div>
                         <div className = "card-bottom">
                            <img src  = {item.image}  onClick= {() => setselectedimage(`${item.image}`)}  alt = {item.title}  />
                            <img src = {item.image1}  onClick= {() => setselectedimage(`${item.image1}`)} alt = {item.title}  />
                            <img src = {item.image2}  onClick= {() => setselectedimage(`${item.image2}`)} alt = {item.title}  />
                            <img src = {item.image3}  onClick= {() => setselectedimage(`${item.image3}`)} alt = {item.title}  />
                         </div> 
                    </div>
                </div>

                    <div className="card-row">
                        <div className="first-div div">
                            <h2 className='title'> {item.title} </h2>
                            <p className='category'> {item.category} </p>
                        </div>
                        <div className="second-div div">
                                <span className='price'> Price- ${item.price} </span>
                                <div className="quantity"> Quantity : 1 </div>
                        </div>
                        <div className="third-div div">
                            <p className='desc'>  {item.desc} </p>
                        </div>
                        <div className="fourth-div div">
                            <button className='cart' onClick={addtocarthandler}> Add to Cart  </button>
                            <button className='wish' onClick={addtowishhandler}> Add to Wish  </button>
                         </div>
                    </div>
            </div>

        <button className='back' onClick={changestyle}> Close </button>

    </div>  
  )
}

export default Quick