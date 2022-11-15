import { Link } from 'react-router-dom'
import logo from '../../../assets/logo_guitarra.png'
import './Brand.css'

const Brand = () => {
  return (
    <Link to="/">
      <img id='logo-brand' src={logo} alt='logo-brand' ></img>
    </Link>
    
    
    
  )
}

export default Brand