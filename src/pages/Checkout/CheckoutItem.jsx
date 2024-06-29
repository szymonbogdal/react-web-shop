import { useCartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function CheckoutItem(props){
    const {id, image, title, price, qty } = props.item;
    const {removeItem, incrementQty, decrementQty} = useCartContext();
    return(
        <div className="checkout-item">
            <img className="checkout-item__img" src={image} alt={title} />
            <div className="checkout-item__body">
                <Link to={`/product/${id}`} className="checkout-item__body-header">{title}</Link>
                <p className="checkout-item__body-price">{(price*qty).toFixed(2)}$</p>
                <div className="checkout-item__body-action">
                    <button className="checkout-item__body-action-btn" onClick={()=>decrementQty(id)} disabled={qty<=1}><FontAwesomeIcon icon="fa-solid fa-minus" /></button>
                    <p className="checkout-item__body-action-qty">{qty}</p>
                    <button className="checkout-item__body-action-btn" onClick={()=>incrementQty(id)} disabled={qty>=9}><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                </div>
            </div>
            <button className="checkout-item__remove" onClick={()=>removeItem(id)}><FontAwesomeIcon icon="fa-solid fa-xmark" /></button>
        </div>
    )
}

export default CheckoutItem;