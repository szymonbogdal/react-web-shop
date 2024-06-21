import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";
import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar(){
    const [showCart, setShowCart] = useState(false);
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All products</Link>
                    </li>
                    <li>
                        <Link to="/men's%20clothing">Men's clothing</Link>
                    </li>
                    <li>
                        <Link to="/women's%20clothing">Women's clothing</Link>
                    </li>
                    <li>
                        <Link to="/jewelery">Jewelery</Link>
                    </li>
                    <li>
                        <Link to="/electronics">Electronics</Link>
                    </li>
                    <li>
                        <button onClick={()=>setShowCart(!showCart)}><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></button>
                    </li>
                </ul>
            </nav>
            {showCart && <Cart/>}
        </>
        
    )
}
export default Navbar;