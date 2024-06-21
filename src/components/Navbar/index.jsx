import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";
import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar(){
    const [showCart, setShowCart] = useState(false);
    return(
        <>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link to="/" className="navbar__item-link">All products</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/men's%20clothing" className="navbar__item-link">Men's clothing</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/women's%20clothing" className="navbar__item-link">Women's clothing</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/jewelery" className="navbar__item-link">Jewelery</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/electronics" className="navbar__item-link">Electronics</Link>
                    </li>
                    <li className="navbar__item">
                        <button className="navbar__item-btn" onClick={()=>setShowCart(!showCart)}><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></button>
                    </li>
                </ul>
            </nav>
            {showCart && <Cart/>}
        </>
        
    )
}
export default Navbar;