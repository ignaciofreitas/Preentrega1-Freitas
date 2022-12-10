import { createContext, useState } from "react";


export const cartContext = createContext([])

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])


    const totalPrice = () =>{
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)    
    
    }

    const clearCart = () => setCart ([])

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id ))

    const addToCart = (productSelected, quantity) => {

        if (isInCart(productSelected.id)) {
            setCart(cart.map(product => {
                return product.id === productSelected.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, { ...productSelected, quantity }])
        }
    }

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false
    return (
        <cartContext.Provider value={{ cart, addToCart, removeProduct, clearCart, totalPrice}} >
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider