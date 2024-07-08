import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import AddToCartBtn from "../../components/AddToCartBtn";

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
                <AddToCartBtn product={props.product} className={"product__body-btn"}/>
                <Link to={"/checkout"} onClick={()=> !state.items.find(item=>item.id === id) && addItem(props.product)} className="product__body-buy">Buy now</Link>
            </div>
        </div>
    )


}

export default ProductDetails;