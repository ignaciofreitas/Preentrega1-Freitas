import { cartContext} from "../../context/cartProvider"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
const Cart = () => {
    const { cart, totalPrice } = cartContext()
      if(cart.length === 0){
        return (
          <>
          <p>No hay productos</p>
          <Link to="/">Volver a comprar</Link>
          </>
        )
      }
    return (
    <div>
      {
        cart.map (product => <CartItem key={product.id} product = {product} ></CartItem>)
      }
      <p>{totalPrice()}</p>
    </div>
    
  )
}

export default Cart