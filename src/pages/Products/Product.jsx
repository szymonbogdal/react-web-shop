import { useCartContext } from "../../context/CartContext";
import shortenText from "../../utils/shortenText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Product(props){
    
    const {id, image, title, price, category, rating} = props.product;
    const {addItem, state} = useCartContext();
    return(
        <div className="product-item">
             <Link to={`product/${id}`} className="product-item__link">
                <img className="product-item__img" src={image} alt={title} />
                <p className="product-item__category">{category}</p>
                <p className="product-item__title">{shortenText(title, 40)}</p>
            </Link>
            <div className="product-item__info">
                <p className="product-item__info-price">{price}$</p>
                <p className="product-item__info-rating">{rating.rate}<FontAwesomeIcon icon="fa-solid fa-star" className="product-item__info-star"/></p>
            </div>

            {state.items.find(item=>item.id === id)?
            <button className="product-item__info-added" disabled>Item in cart</button>
            :
            <button className="product-item__info-add" onClick={()=>addItem(props.product)}>Add to cart</button>
            }
        </div>
    )

}

export default Product;