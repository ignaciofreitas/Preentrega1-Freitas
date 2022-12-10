import { NavLink } from 'react-router-dom'
import './Categories.css'

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
        <NavLink to="/category/cuerdas" className="links" >Cuerdas</NavLink>
      </li>
      <li className='category-items'>
        <NavLink to="/category/percusion" className="links" >Percusión</NavLink>
      </li>
    </ul>
  )
}

export default Categories