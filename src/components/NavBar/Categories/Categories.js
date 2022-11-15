import './Categories.css'
import { NavLink } from 'react-router-dom'

const Categories = () => {
  return (
    <ul id="categories">
        <li className='category-items'>
        <NavLink to="/category/guitarras" className="links" >Guitarras</NavLink>
        </li>
        <li className='category-items'>
        <NavLink to="/category/bajos" className="links" >Bajos</NavLink>
        </li>
        <li className='category-items'>
        <NavLink to="/category/baterias" className="links" >Baterias</NavLink>
        </li>
        <li className='category-items'>
        <NavLink to="/category/violines" className="links" >Violines</NavLink>
        </li>   
    </ul>
  )
}

export default Categories