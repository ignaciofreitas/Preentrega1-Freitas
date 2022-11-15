import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import {data} from '../../../src/DataBase/Data'
import { useEffect, useState } from "react"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
  
  
  const [productSelected, setProductSelected] = useState()
  const {id} = useParams()
  const getProduct = ()=>{
    const productFiltered = data.filter((product)=>{
      return product.id == id
    })
    setProductSelected(...productFiltered)
  }
    useEffect(()=>{
      getProduct()
    }, [id])
  return (
    <div className="itemDetailContainer">
        {productSelected && 
          <ItemDetail productSelected={productSelected} ></ItemDetail>}
    </div>
  )
}

export default ItemDetailContainer