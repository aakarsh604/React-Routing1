import './App.css';
import Navbar from './Components/Navbar';
import {Routes, Route} from "react-router-dom"
import Products from './Pages/Products';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Errorpage from './Pages/Errorpage';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/products/*" element={<Products />} >
          </Route>
          <Route path="products/:id" element={<Product/>}/>
          <Route path="*" element={<Errorpage/>}/>
        </Routes>
    </div>
  );
}

export default App;
