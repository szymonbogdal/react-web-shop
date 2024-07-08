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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maiores laborum laboriosam harum voluptatum exercitationem quis? Exercitationem assumenda ab, 
                        autem distinctio dolorem, nulla suscipit repellat facilis animi mollitia est maxime deleniti!
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