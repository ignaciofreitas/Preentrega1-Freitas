import { useEffect, useState } from 'react'
import ItemList from './ItemList/ItemList.js'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import './ItemListContainer.css'

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { categoryName } = useParams();

  const getProducts = () => {
    const db = getFirestore()
    const querySnapshot = collection(db, 'items')
    if (categoryName) {
      const queryFiltered = query(querySnapshot, where("categoryId", "==", categoryName))
      getDocs(queryFiltered)
        .then((response) => {
          const data = response.docs.map((item) => {
            return { id: item.id, ...item.data() }
          });
          setProductList(data)
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getDocs(querySnapshot)
        .then((response) => {
          const data = response.docs.map((item) => {
            return { id: item.id, ...item.data() }
          });
          setProductList(data)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getProducts()
  }, [categoryName])

  return <div className='itemListContainer'>
    <ItemList productList={productList} />
  </div>
}

export default ItemListContainer