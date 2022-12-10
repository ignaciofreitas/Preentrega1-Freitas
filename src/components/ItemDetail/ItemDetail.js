
import ItemCount from "../ItemCount/ItemCount"
//import { Link } from "react-router-dom"
import "./ItemDetail.css"
import { useState, useContext } from "react"
import { cartContext } from "../../context/cartProvider"

const ItemDetail = ({ productSelected }) => {
  const [count, setCount] = useState(1)
  const { addToCart } = useContext(cartContext)

  return (
    <div className="item-detail">
      <div className="item-description">
        <div className='item-cards2'>
          
          <img alt="prod-img" className='product-img' src={`/images/${productSelected.imageId}`} />
          <div className='item-descri'>
            <p>{productSelected.title}</p>
            <p>{productSelected.description}</p>
            <p>${productSelected.price}</p>
            <div id="counter-container">
              <h2 id="counter"> {count}</h2>
              <ItemCount setCount={setCount} ></ItemCount>
            </div>

            <button onClick={() => addToCart(productSelected, count)} className='add-to-cart-button'>Agregar al carrito</button>
          </div>
        </div>
      </div>

      <div className="prod-descri">
        <p>Modelo: {productSelected.model}</p>
        <p>Tipo: {productSelected.description}</p>
        <p>Color: {productSelected.color}</p>
        <p>Estado: {productSelected.state}</p>
        <p>Material: {productSelected.material}</p>
      </div>
    </div>
  )
}

export default ItemDetail