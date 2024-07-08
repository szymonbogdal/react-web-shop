import HomeItem from "./HomeItem";
import { Link } from "react-router-dom";

function HomePage(props){
    return(
        <div className="home">
            <div className="home__text-container">
                <div className="home__text-body">
                    <p className="home__text-body-header">New Collection:</p>
                    <p className="home__text-body-title">Men's clothing</p>
                    <p className="home__text-body-info">
                        Discover our latest collection of men's clothing. 
                        Crafted with premium materials and attention to detail, each piece is designed to provide both comfort and style. 
                        Upgrade your wardrobe with our new arrivals and experience the perfect blend of fashion and functionality.
                    </p>
                    <div className="home__body-links">
                        <Link to={"/products/category/men's%20clothing"} className="home__body-link home__body-link--category">Go to category</Link>
                        <Link to={"/products"} className="home__body-link home__body-link--products">See all products</Link>
                    </div>
                </div>
            </div>
            <div className="home__items-container">
                {props.products && props.products.map((product) => (
                    <HomeItem product={product} key={product.id}/>
                ))}
            </div>
        </div>
    )
}

export default HomePage;