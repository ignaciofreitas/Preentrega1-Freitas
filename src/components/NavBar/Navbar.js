
import './NavBar.css'
import Categories from './Categories/Categories.js'
import Brand from './Brand/Brand.js'
import CartWidget from './CartWidget/CartWidget'

const Navbar = () => {
  return (
    <>
        <div id='navbar'>
            <Brand/>
            <Categories/>
            <CartWidget/>
        </div>
    </>  
  )
}

export default Navbar