import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Product from "./Product";
import './products.css';
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import ProductCategories from "./ProductCategories";

function Products(){
    const {'*': category} = useParams();
    const {loading, error, data} = useFetch(category);
    
    if(loading){
        return <Loader/>
    }
    
    if(error){
        return <ErrorMessage/>
    }

    return(
        <div>
            <ProductCategories/>
            <div className="product-container">
                {data && data.map((product) => (
                        <Product product={product} key={product.id}/>
                ))}
            </div>
        </div>
    )
}
export default Products;