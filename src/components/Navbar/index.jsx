import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Cart from "./Cart";
import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartContext } from "../../context/CartContext"

function Navbar(){
    const [showCart, setShowCart] = useState(false);
    const {state} = useCartContext();
    const location = useLocation();

    useEffect(()=>{
        if(showCart){ setShowCart(false) };
    }, [location])

    return(
        <>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link to="/" className="navbar__item-link navbar__item-link--home">Home</Link>
                    </li>
                    <li className="navbar__item navbar__item--mobile">
                        <Link to="/products" className="navbar__item-link">Products</Link>
                    </li>
                    <li className="navbar__item navbar__item--desktop">
                        <Link to="/products" className="navbar__item-link">All products</Link>
                    </li>
                    <li className="navbar__item navbar__item--desktop">
                        <Link to="/products/category/men's%20clothing" className="navbar__item-link">Men's clothing</Link>
                    </li>
                    <li className="navbar__item navbar__item--desktop">
                        <Link to="/products/category/women's%20clothing" className="navbar__item-link">Women's clothing</Link>
                    </li>
                    <li className="navbar__item navbar__item--desktop">
                        <Link to="/products/category/jewelery" className="navbar__item-link">Jewelery</Link>
                    </li>
                    <li className="navbar__item navbar__item--desktop">
                        <Link to="/products/category/electronics" className="navbar__item-link">Electronics</Link>
                    </li>
                    <li className="navbar__item">
                        <button className="navbar__item-btn" onClick={()=>setShowCart(!showCart)}>
                            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                            <span className="navbar__item-btn-count">{state.qty > 9?"9+":state.qty}</span>
                        </button>
                    </li>
                </ul>
            </nav>
            {showCart && <Cart/>}
        </>
        
    )
}
export default Navbar;