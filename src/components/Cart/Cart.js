import { useContext, useState } from "react"
import { cartContext } from "../../context/cartProvider"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import { getFirestore, addDoc, collection, doc, updateDoc } from "firebase/firestore"

import "./Cart.css"

const Cart = () => {
  const { cart, totalPrice, clearCart } = useContext(cartContext)
  let [formValues, setFormValues] = useState({
        name: " ",
        phone: " ",
        email: " "  
      })

  const order = {
    buyer: {
      name: formValues.name,
      email: formValues.email,
      phone: formValues.phone,
    },
    items: cart,
    total: totalPrice()
  }

  const newOrder = () => {
    const db = getFirestore()
    const orderCollection = collection(db, "orders")
    addDoc(orderCollection, order)
    .then((response)=>{ alert(`Orden creada numero ${response.id}`)
    const handleInputChange = (e) =>{
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
  const handleInputChange =(e)=>{
    setFormValues({
      ...formValues, [e.target.name] : e.target.value
    })
  }
  return (
    <div className="cart-items-container">
      <>
        {
          cart.map(product => <CartItem key={product.id} product={product} />)
        }
        <p className="text">Total: $ {totalPrice()}</p>
        <Link to ="/">
        <button className="confirm-order" onClick={newOrder} >Confirmar compra</button>
        </Link>
        <button className="clear-cart" onClick={clearCart} >Vaciar carrito</button>
      </>
      <div>
        <h2>Formulario</h2>
        <input type="text" value={formValues.name} onChange={handleInputChange} name="name" />  
        <input type="text" value={formValues.phone} onChange={handleInputChange} name="phone" />
        <input type="text" value={formValues.email} onChange={handleInputChange} name="email"/>
      </div>
    </div>
    
  )
}

export default Cart

