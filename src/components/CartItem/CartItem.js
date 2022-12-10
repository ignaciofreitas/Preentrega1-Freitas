import { cartContext } from "../../context/cartProvider"
import { useContext } from "react"

import './CartItem.css'

const CartItem = ({ product }) => {
    const { removeProduct } = useContext(cartContext)
    return (
        
            <div className='cartItem'>
                <img src={`/images/${product.imageId}`} alt="foto" />
                <div>
                    <p> {product.title}</p>
                    <p> {product.brand} </p>
                    <p> Precio unitario: $ {product.price} </p>
                    <p> Unidades: {product.quantity} </p>
                    <p> Subtotal: $ {product.quantity * product.price} </p>
                    <img className="trash" onClick={() => { removeProduct(product.id) }} alt="trash" src={`/images/trash.svg`}/>
                </div>
            </div>
        
    )
}

export default CartItem