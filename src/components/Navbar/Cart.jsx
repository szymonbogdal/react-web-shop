import { useCartContext } from "../../context/CartContext"
import CartItem from "./CartItem";

function Cart(){
    const {state} = useCartContext();
    
    return(
        <div className="cart-container">
            <h1 className="cart-container__heading">Your cart</h1>
            <hr></hr>
            <div className="cart-container__body">
                {state.items.length>0?
                state.items.map(item => <CartItem item={item} key={item.id}/>)
                :
                <p className="cart-container__body-empty-msg">Your cart is empty</p>    
                }
            </div>    
            <hr></hr>
            <div className="cart-container__summary">
                <p className="cart-container_summary-total">Total: </p>
                <p className="cart-container_summary-price">245.99$</p>
            </div>
            <button className="cart-container__checkout">Checkout</button>             
        </div>
    )
}
export default Cart