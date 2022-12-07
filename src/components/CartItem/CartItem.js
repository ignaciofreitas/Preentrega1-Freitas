import { cartContext } from "../../context/cartProvider"

import './CartItem.css'

const CartItem = ({product}) => {
    const { removeProduct } = cartContext()
  return (
    <div className='cartItem'>
        <img src={`/images/${product.imagen}.jpg`} alt="foto"/>
        <div>
            <p> {product.nombre}</p>
            <p> {product.precio} </p>
            <p> {product.quantity} </p>
            <p> {product.quantity * product.precio} </p>
            <button onClick={()=> {removeProduct(product.id)}} >Borrar</button>

        </div>
    </div>
  )
}

export default CartItem