import  { createContext , useReducer } from 'react';

export const Store = createContext();

const initialState = {
    cart : {
        cartitems : [],     // empty cart by default
    },
    wish : {
        wishitems : [],         // empty wish  by default  
    }
}

 function reducer(state,action)
 {
    switch(action.type)
    {
        // add to cart 
        case 'CART_ADD_ITEM':

             const newitem = action.payload;
             const existitem = state.cart.cartitems.find((item) => item._id === newitem._id);
             const cartitems = existitem ?  state.cart.cartitems.map((item) => item._id === existitem._id ? newitem : item) : [...state.cart.cartitems , newitem];

             return {...state ,cart :  {...state.cart , cartitems}};

            //  return {...state ,cart :  {...state.cart , cartitems : [...state.cart.cartitems, action.payload]}}

             // add to Wish 
          case 'WISH_ADD_ITEM':
             return {...state ,wish :  {...state.wish , wishitems : [...state.wish.wishitems, action.payload]}}

        default : 
         return state;
    }   
 }

  export function StoreProvider(props)
  {
    const [state,dispatch] = useReducer(reducer, initialState );
    const value = {state , dispatch};

    return (
        <>
            <Store.Provider value = {value}> 
               {props.children} 
            </Store.Provider>
        </>

    )
  }

