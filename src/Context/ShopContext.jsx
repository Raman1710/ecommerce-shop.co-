import React from "react";
import { createContext } from "react";
import all_product from '../Components/Assets/all_product.js';
import { useState } from "react";
import { toast } from 'react-toastify';


export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for(let index = 0; index < all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());


    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
            toast.success('Product added to cart!', {
                
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
            });
            return updatedCart;
        });
    }
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) =>({...prev, [itemId]:prev[itemId]-1}));
        toast.info('Product removed from cart!', {
                
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
    });
    }

    const getTotalCartItems = () => {
        let totalItems = 0;

        for(const items in cartItems){
            if(cartItems[items] > 0){
                totalItems += cartItems[items];
            }
        }
        
        return totalItems;
    }


    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartItems};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;