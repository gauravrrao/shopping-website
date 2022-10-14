import './App.css';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <> 
    <div className="main-box">
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path=""  element={<Product/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
