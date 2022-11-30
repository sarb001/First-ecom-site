import  { createConttext , useReducer } from 'react';

const initialState = {
    cart : {
        cartitems : [],
    },
}

 function reducer(state,action)
 {
    switch(action.type){
        case 'CART_ADD_ITEM':
             return {...state ,cart :  {...state.cart , cartitems : [...state.cart.cartitems, action.payload]}}

        default : 
         return state;
    }   
 }

  export function StoreProvider(props){

    const [state,dispatch] = useReducer(reducer, initialState );
    const value = {state , dispatch};

    return <Store.Provider value = {value}>
        {props.children}
    </Store.Provider>

  }

export const Store = createConttext();