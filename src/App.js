import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/Main/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
      
      <body>
        <header>
        <NavBar/>
        </header>
        <main>
          <ItemListContainer name="Bienvenidos a MusicArte!"/>
        </main>
      </body>
        
        
  );
}

export default App;
