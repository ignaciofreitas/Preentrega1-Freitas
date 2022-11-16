import "./ItemCount.css"

const ItemCount = ({ setCount }) => {

    return (
        <div id="prod-qty">
            <button onClick={() => setCount((currentValue) => currentValue +1)} >+</button>
            <button onClick={() => setCount((currentValue) => currentValue -1)} >-</button>
        </div>
    )
}

export default ItemCount