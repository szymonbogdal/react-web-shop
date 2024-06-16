import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import { CartProvider } from "./context/CartContext";
import './app.css'

import Products from "./pages/Products";

function App() {
  
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Products/>}/>
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
