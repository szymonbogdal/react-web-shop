import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import { CartProvider } from "./context/CartContext";
import './app.css'

import Products from "./pages/Products";
import Product from "./pages/Product";

function App() {
  
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Products/>}/>
          <Route path="/product/:id" element={<Product/>}/>
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
