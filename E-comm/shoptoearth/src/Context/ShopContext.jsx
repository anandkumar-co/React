import React ,{createContext, useState}from 'react'
import all_product from "../Components/Assets/all_product.js"

export const ShopContext=createContext();
const getDefaultcart=()=>{
    let cart={};
    for(let i=0; i<all_product.length; i++){
        cart[i]=0;
    }
    return cart;
}
const ShopContextProvider=(props)=>{
    const[cartitem, setCartitem]=useState(getDefaultcart());
    const addToCart=(itemId)=>{
        setCartitem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartitem)
    }
    const removecart=(itemId)=>{
        setCartitem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const contextvalue={all_product,cartitem,addToCart,removecart};
    return (<ShopContext.Provider value={contextvalue}>
        {props.children}
        </ShopContext.Provider>)
}
 export default ShopContextProvider;