import { Link } from 'react-router-dom'
import Items from './Items.css'

const Item = ({ producto }) => {
    return (

        <div className='item-cards'>

            <img className='product-img' alt='prod-img' src={`/images/${producto.imagen}.jpg`} />
            <div className='item-descri'>
                <p> {producto.nombre} </p>
                <p> {producto.marca} </p>
                <p> $ {producto.precio} </p>
                <Link className='seeMoreLink' to={`item/${producto.id}`}>Ver más</Link>
                <button className='add-to-cart-button'>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Item
