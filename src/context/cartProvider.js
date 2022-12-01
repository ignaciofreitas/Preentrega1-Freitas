import { createContext, useState } from "react";

export const cartContext = createContext([])

const CartProvider = ({ children }) => {
    let [cart, setCart] = useState([])

    const addToCart = (product, quantity) => {
        setCart = ([...cart, { ...product, quantity }])
        console.log(setCart)
    }


    return (
        <cartContext.Provider value={{ cart, addToCart }} >
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider