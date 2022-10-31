import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <div id='greet-container'>
        <p id='greet'>
            {props.name}
        </p>
    </div>
  )
}

export default ItemListContainer