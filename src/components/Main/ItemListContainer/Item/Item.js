import { Link } from 'react-router-dom'
import Items from './Items.css'

const Item = ({ producto }) => {
    return (

        <div className='item-cards'>

            <img className='product-img' alt='prod-img' src={`/images/${producto.imageId}`} />
            <div className='item-descri'>
                <p> {producto.title} </p>
                <p> {producto.description} </p>
                <p> $ {producto.price   } </p>
                <Link className='seeMoreLink' to={`item/${producto.id}`}>
                    <button className='add-to-cart-button'>Ver mas</button>
                </Link>

            </div>
        </div>
    )
}

export default Item
