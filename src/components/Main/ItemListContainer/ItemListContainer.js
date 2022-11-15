import { useEffect, useState } from 'react'
import {data} from '../../../../src/DataBase/Data.js'
import ItemList from './ItemList/ItemList.js'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

const ItemListContainer = () => {
  const[productList,setProductList] = useState([]);
  const {categoryName} = useParams();
  const getProducts = new Promise((resolve,reject) =>{
    setTimeout(()=>{
      if (categoryName){
        const filteredData = data.filter((item)=>{
          return item.category === categoryName
        });
        resolve(filteredData) 
      }
      else{
        resolve(data)
      }
    }, 2000)
  })
  useEffect(()=>{
    getProducts.then((respuesta)=>{
      setProductList(respuesta)
    })
    setTimeout(()=>{

    },4000)
  }, [categoryName])
  return <div className='itemListContainer'>
            <ItemList productList={productList}/>
          </div>  
}

export default ItemListContainer