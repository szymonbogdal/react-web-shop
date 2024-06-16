import { useCartContext } from "../../context/CartContext";

function CartItem(props){
    const {id, image, title, price, category } = props.item;
    const {removeItem} = useCartContext();
    return(
        <>
            <h1>{id}</h1>
            <button onClick={()=>removeItem(id)}>Remove</button>
        </>
    )
}

export default CartItem;