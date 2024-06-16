import { useCartContext } from "../../context/CartContext"
import CartItem from "./CartItem";

function Cart(){
    const {state} = useCartContext();
    
    return(
        <div className="cart-container">
            {state.items?.map(item => <CartItem item={item} key={item.id}/>)}             
        </div>
    )
}
export default Cart