import { useContext, useState } from "react"
import { cartContext } from "../../context/cartProvider"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import { getFirestore, addDoc, collection, doc, updateDoc } from "firebase/firestore"

import "./Cart.css"

const Cart = () => {
  const { cart, totalPrice } = useContext(cartContext)
  let [formValues, setFormValues] = useState({
        name: " ",
        phone: " ",
        email: " "  
      })

  const order = {
    buyer: {
      name: "ignacio",
      email: "123@123.com",
      phone: "123456",
      adress: "asdd"
    },
    items: cart,
    total: totalPrice()
  }

  const newOrder = () => {
    const db = getFirestore()
    const orderCollection = collection(db, "orders")
    addDoc(orderCollection, order)
    .then((response)=>{ alert(`Orden creada numero ${response.id}`)
    let handleInputChange = (e) =>{
      console.log(e.target.value)
    }
    return(response)
  })
    .then ((response) =>{
      cart.forEach((product)=>{ 
        const query = doc(db, "items", product.id)
        updateDoc(query, {
          stock: product.stock - product.quantity
        })
      })
      
    })
    .catch((error) => console.log(error)) 
  }


  if (cart.length === 0) {
    return (
      <>
        <div className="empty-cart">
          <p className="text">No hay productos</p>
          <Link className="link-home" to="/">Volver a comprar</Link>
        </div>
      </>
    )
  }
  return (
    <div className="cart-items-container">
      <>
        {
          cart.map(product => <CartItem key={product.id} product={product} />)
        }
        <p className="text">Total: $ {totalPrice()}</p>
        <button onClick={newOrder} >Confirmar compra</button>
      </>
      <div>
        <h2>Formulario</h2>
        <input name="name" type="text" placeholder="Nombre" value={formValues.name} onChange={handleInputChange}>  </input>
        <input name="phone" type="text" placeholder="Telefono" value={formValues.phone} onChange={handleInputChange} ></input>
        <input name="email"  type="text" placeholder="Email" value={formValues.email} onChange={handleInputChange} ></input>
      </div>
    </div>
    
  )
}

export default Cart

