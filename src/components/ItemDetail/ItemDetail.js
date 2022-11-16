import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import "./ItemDetail.css"

const ItemDetail = ({ productSelected }) => {
  const [count, setCount] = useState(0)
  return (
    <div className="item-detail">
      <div className="item-description">
        <div className='item-cards2'>
          <img alt="prod-img" className='product-img' src={`/images/${productSelected.imagen}.jpg`} />
          <div className='item-descri'>
            <p>{productSelected.nombre}</p>
            <p><strong>{productSelected.marca}</strong></p>
            <p>${productSelected.precio}</p>
            <p>Hasta 18 cuotas sin interés</p>
            <div id="counter-container">
            <h2 id="counter"> {count}</h2>
            <ItemCount setCount={setCount} ></ItemCount>
            </div>
            <Link to="/cart">
              <button className='add-to-cart-button'>Confirmar compra</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="prod-descri">
        <p>Modelo: {productSelected.modelo}</p>
        <p>Tipo: {productSelected.tipo}</p>
        <p>Construcción: {productSelected.construccion}</p>
        <p>Cuerpo: {productSelected.cuerpo}</p>
        <p>Cuello: {productSelected.cuello}</p>
        <p>Diapasón: {productSelected.diapason}</p>
        <p>Trastes: {productSelected.trastes}</p>
        <p>Micrófonos: {productSelected.microfonos}</p>
        <p>Controles: {productSelected.controles}</p>
        <p>Clavijero: {productSelected.clavijero}</p>
      </div>
    </div>
  )
}

export default ItemDetail