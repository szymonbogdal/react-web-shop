import { Link } from "react-router-dom";
import './navbar.css'

function Navbar(){
    return(
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
                    <a>Cart</a>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;