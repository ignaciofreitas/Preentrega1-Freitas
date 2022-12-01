import cart from '../../../assets/cart.svg'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div id='cart-container'>
      <Link to="cart">
      <img id='shopping-cart' src={cart} alt='shopping-cart'/>
      </Link>
      <span id='cart-counter' >0</span>
    </div>
    
  )
}

export default CartWidget