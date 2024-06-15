import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import './app.css'

import Products from "./pages/Products";

function App() {
  
  return (
    <Router>
			<Navbar />
			<Routes>
				<Route path="/*" element={<Products/>}/>
			</Routes>
    </Router>
  )
}

export default App
