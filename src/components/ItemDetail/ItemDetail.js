
import ItemCount from "../ItemCount/ItemCount"
//import { Link } from "react-router-dom"
import "./ItemDetail.css"
import { useState, useContext } from "react"
import { cartContext } from "../../context/cartProvider"

const ItemDetail = ({ productSelected }) => {
  const [count, setCount] = useState(0)
  const { addToCart } = useContext(cartContext)
  return (
    
    <div className="item-detail">
      <div className="item-description">
        <div className='item-cards2'>
          <img alt="prod-img" className='product-img' src={`/images/${productSelected.imagen}.jpg`} />
          <div className='item-descri'>
            <p>{productSelected.nombre}</p>
            <p><strong>{productSelected.marca}</strong></p>
            <p>${productSelected.precio}</p>
            <div id="counter-container">
              <h2 id="counter"> {count}</h2>
              <ItemCount setCount={setCount} ></ItemCount>
            </div>

            <button onClick={() => addToCart(productSelected, count)} className='add-to-cart-button'>Agregar al carrito</button>

          </div>
        </div>
      </div>

      <div className="prod-descri">
        <p>Modelo: {productSelected.modelo}</p>
        <p>Tipo: {productSelected.tipo}</p>
        <p>Color: {productSelected.color}</p>
        <p>Estado: {productSelected.estado}</p>
        <p>Material: {productSelected.material}</p>
      </div>
    </div>
  )
}

export default ItemDetail