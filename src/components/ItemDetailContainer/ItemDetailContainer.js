import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { data } from '../../../src/DataBase/Data'
import { useEffect, useState } from "react"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {


  const [productSelected, setProductSelected] = useState()
  const { id } = useParams()

  const getProduct = () => {
    const db = getFirestore()
    const query = doc(db, 'items', id)
    getDoc(query)
      .then((response)=>{
        setProductSelected({id: response.id, ...response.data()})
      })
      .catch((error)=>{
        console.log(error)
      })
  }


  useEffect(() => {
    getProduct()
  }, [id])

  return (
    <div className="item-detail-container">
      {productSelected &&
        <ItemDetail productSelected={productSelected} ></ItemDetail>
      }
    </div>
  )
}

export default ItemDetailContainer