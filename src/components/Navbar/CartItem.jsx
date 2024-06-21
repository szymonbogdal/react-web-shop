import { useCartContext } from "../../context/CartContext";
import shortenText from "../../utils/shortenText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartItem(props){
    const {id, image, title, price, qty } = props.item;
    const {removeItem, incrementQty, decrementQty} = useCartContext();
    return(
        <div className="cart-item">
            <img className="cart-item__img" src={image} alt={title} />
            <div className="cart-item__body">
                <h4 className="cart-item__body-heading">{shortenText(title, 30)}</h4>
                <div className="cart-item__body-action">
                    <button className="cart-item__body-action-btn" onClick={()=>decrementQty(id)} disabled={qty<=1}><FontAwesomeIcon icon="fa-solid fa-minus" /></button>
                    <p className="cart-item__body-action-qty">{qty}</p>
                    <button className="cart-item__body-action-btn" onClick={()=>incrementQty(id)} disabled={qty>=9}><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                </div>
            </div>
            <p className="cart-item__price">{(price*qty).toFixed(2)}$</p>
            <button className="cart-item__remove" onClick={()=>removeItem(id)}><FontAwesomeIcon icon="fa-solid fa-xmark" /></button>
        </div>
    )
}

export default CartItem;