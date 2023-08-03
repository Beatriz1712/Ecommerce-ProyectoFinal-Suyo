import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from "./components/context/CartContext";
import Carrito  from './components/Carrito';
import Checkout from './components/Checkout/Checkout';

function App() {

  return (
    <div className='App'>
          
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/contacto' element={<Contacto />} />
            <Route exact path='/productos' element={<ItemListContainer />} />
            <Route exact path='/category/:category' element={<ItemListContainer />} />
            <Route exact path='/Item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/carrito' element={<Carrito />} />
            <Route exact path='/checkout' element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>  
    </div>
  );
}


export default App;

