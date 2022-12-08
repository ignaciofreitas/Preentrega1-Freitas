import { useContext } from "react"
import { cartContext } from "../../context/cartProvider"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"

const Cart = () => {
  const { cart, totalPrice } = useContext(cartContext)
  if (cart.length === 0) {
    return (
      <>
        <div className="empty-cart">
        <p className="text">No hay productos</p>
        <Link className="link-home" to="/">Volver a comprar</Link>
        </div>
      </>
    )
  }
  return (
    <div className="cart-items-container">
    <>
      {
        cart.map(product => <CartItem key={product.id} product={product} />)
      }
      <p className="text">Total: $ {totalPrice()}</p>
    </>
    </div>
  )
}

export default Cart