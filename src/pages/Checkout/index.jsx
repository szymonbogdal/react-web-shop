import { useCartContext } from "../../context/CartContext"
import CheckoutItem from "./CheckoutItem";
import "./checkout.css"

function Checkout(){
    const {state} = useCartContext();


    return(
        <div className="checkout">
            <div className="checkout__header">
                <div className="checkout__header-item current-item">
                    <span className="checkout__header-item-number active-number">1</span>
                    <p className="checkout__header-item-title active-title">Cart</p>
                </div>
                <div className="checkout__header-divider"></div>
                <div className="checkout__header-item">
                    <span className="checkout__header-item-number">2</span>
                    <p className="checkout__header-item-title">Delivery and Payment</p>
                </div>
                <div className="checkout__header-divider"></div>
                <div className="checkout__header-item">
                    <span className="checkout__header-item-number">3</span>
                    <p className="checkout__header-item-title">Summary</p>
                </div>
            </div>
            <div className="checkout__body">
                <div className="checkout__body-items">
                    <p className="checkout__body-items-header">Items</p>
                    <hr></hr>
                    {state.items.length>0?
                    state.items.map(item => <CheckoutItem item={item} key={item.id}/>)
                    :
                    <p className="cart-container__body-empty-msg">There are no items</p>    
                    }                       
                </div>
                <div className="checkout__body-summary">
                    <p className="checkout__body-summary-header">Total</p>
                    <hr></hr>
                    <p className="checkout__body-summary-price">{state.sum}$</p>
                    <button disabled={true} className="checkout__body-summary-btn">Next step</button>
                    <p className="checkout__body-summary-info">This action is temporary unavailable</p>
                </div>
            </div>
        </div>
    )
}

export default Checkout;