import "./ItemDetail.css"

const ItemDetail = ({productSelected}) => {
  return (
    <div className='item-cards'>
        <img alt="prod-img" className='product-img' src={`/images/${productSelected.imagen}.jpg`} />
        <div className='item-descri'>
        <p>{productSelected.nombre}</p>
        <p>{productSelected.marca}</p>
        <p>{productSelected.precio}</p>
        <button className='add-to-cart-button'>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemDetail