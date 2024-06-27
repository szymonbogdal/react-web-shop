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
                <p className="product__body-category">{category} </p>
                <p className="product__body-price">{price}$</p>
                <p className="product__body-rating">{rating.rate}<FontAwesomeIcon icon="fa-solid fa-star" className="product__body-rating-star"/></p>
                <p className="product__body-description-header">Description</p>
                <hr></hr>
                <p className="product__body-description">{description}</p>
                
                {state.items.find(item=>item.id === id)?
                <button className="product__body-btn product__body-btn--added" disabled>Item in cart</button>
                :
                <button className="product__body-btn product__body-btn--add" onClick={()=>addItem(props.product)}>Add to cart</button>
                }
                <button className="product__body-btn product__body-btn--buy">Buy now</button>
            </div>
        </div>
    )


}

export default ProductDetails;