import "./ItemCount.css"
import { useState } from "react"


const ItemCount = () => {
    const [count, setCount] = useState(0)
    const decrease = () => {
        setCount(count - 1)
    }

    const increase = () => {
        setCount(count + 1)
    }

    return (
        <div id="prod-qty">
            <div id="prod-counter">
                <h2 id="counter">{count}</h2>
            </div>
            <div id="prod-buttons">
                <button onClick={increase} >+</button>
                <button disabled={count <= 0} onClick={decrease} >-</button>
            </div>
        </div>
    )
}

export default ItemCount