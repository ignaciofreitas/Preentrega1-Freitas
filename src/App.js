import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/Main/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import  CartProvider  from './context/cartProvider'

function App() {
  return (
    <CartProvider>

      <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/category/:categoryName' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/category/:categoryName/item/:id' element={<ItemDetailContainer />} />
            <Route path='cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </>

    </CartProvider>


  );
}

export default App;
