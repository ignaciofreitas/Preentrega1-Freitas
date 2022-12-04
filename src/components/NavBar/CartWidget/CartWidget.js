import cartLogo from '../../../assets/cartLogo.svg'
import { Link } from 'react-router-dom'
import './CartWidget.css'
import { useContext } from "react"
import { cartContext } from '../../../context/cartProvider'


const CartWidget = () => {
  const { cart } = useContext(cartContext)
  console.log(cart)

  return (
    <div id='cart-container'>
      <Link to="cart">
      <img id='shopping-cart' src={cartLogo} alt='shopping-cart'/>
      </Link>
      <span id='cart-counter' >{cart.length}</span>
    </div>
    
  )
}

export default CartWidget