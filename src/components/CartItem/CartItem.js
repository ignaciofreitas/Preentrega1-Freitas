import { cartContext } from "../../context/cartProvider"
import { useContext } from "react"

import './CartItem.css'

const CartItem = ({ product }) => {
    const { removeProduct } = useContext(cartContext)
    return (
        
            <div className='cartItem'>
                <img src={`/images/${product.imagen}.jpg`} alt="foto" />
                <div>
                    <p> {product.nombre}</p>
                    <p> {product.marca} </p>
                    <p> Precio unitario: $ {product.precio} </p>
                    <p> Unidades: {product.quantity} </p>
                    <p> Subtotal: $ {product.quantity * product.precio} </p>
                    <img className="trash" onClick={() => { removeProduct(product.id) }} alt="trash" src={`/images/trash.svg`}/>
                </div>
            </div>
        
    )
}

export default CartItem