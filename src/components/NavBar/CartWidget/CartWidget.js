import cart from '../../../assets/cart.svg'
import './CartWidget.css'


const CartWidget = () => {
  return (
    <div id='cart-container'>
      <img id='shopping-cart' src={cart} alt='shopping-cart'/>
      <span id='cart-counter' >0</span>
    </div>
    
  )
}

export default CartWidget