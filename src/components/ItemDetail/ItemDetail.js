// import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import "./ItemDetail.css"

const ItemDetail = ({ productSelected }) => {
  // const [count, setCount] = useState(0)
  
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
              {/* <h2 id="counter"> {count}</h2> */}
              <ItemCount  ></ItemCount>
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
        <p>Color: {productSelected.color}</p>
        <p>Estado: {productSelected.estado}</p>
        <p>Material: {productSelected.material}</p>
        <iframe src={productSelected.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
      </div>
    </div>
  )
}

export default ItemDetail