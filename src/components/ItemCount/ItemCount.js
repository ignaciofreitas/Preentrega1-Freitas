import "./ItemCount.css"
//import { useState } from "react"


const ItemCount = ({ setCount }) => {

    const increase = () => {
        setCount((currentValue) => currentValue + 1)
    }
    const decrease = () => {
        setCount((currentValue) => {
            if (currentValue > 0) {
                return currentValue - 1
            }
            else {
                return currentValue
            }
        })
    }

    return (
        <div id="prod-qty">
            <div id="prod-counter">
            </div>
            <div id="prod-buttons">
                <button onClick={increase} >+</button>
                <button onClick={decrease} >-</button>
            </div>
        </div>
    )
}

export default ItemCount