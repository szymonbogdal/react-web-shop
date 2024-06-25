import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartContext } from "../../context/CartContext";

function ProductDetails(props){
    const {id, image, title, price, category, rating, description} = props.product;
    const {addItem, state} = useCartContext();

    return(
        <div className="product">
            <img className="product__img" src={image} alt={title} />
            <div className="product__body">
                <p className="product__body-title">{title}</p>
                <p className="product__body-category">{category}</p>
                <p className="product__body-description">{description}</p>
                <div className="product__body-info">
                    <p className="product__body-info-price">{price}$</p>
                    <p className="product__body-info-rating">{rating.rate}<FontAwesomeIcon icon="fa-solid fa-star" className="product__body-info-star"/></p>
                </div>
                {state.items.find(item=>item.id === id)?
                <button className="product__body-btn product__body-btn--added" disabled>Item in cart</button>
                :
                <button className="product__body-btn product__body-btn--add" onClick={()=>addItem(props.product)}>Add to cart</button>
                }
            </div>
        </div>
    )


}

export default ProductDetails;