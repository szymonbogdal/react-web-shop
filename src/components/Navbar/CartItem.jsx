import { useCartContext } from "../../context/CartContext";

function CartItem(props){
    const {id, image, title, price, category, qty } = props.item;
    const {removeItem, incrementQty, decrementQty} = useCartContext();
    return(
        <>
            <h1>{id} {qty}</h1>
            <button onClick={()=>removeItem(id)}>Remove</button>
            <button onClick={()=>incrementQty(id)}>Increment</button>
            <button onClick={()=>decrementQty(id)}>Decrement</button>
        </>
    )
}

export default CartItem;