import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/Main/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
    
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/category/:categoryName' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/category/:categoryName/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>





  );
}

export default App;
