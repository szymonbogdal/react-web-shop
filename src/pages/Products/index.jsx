import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Product from "./Product";
import './products.css';

function Products(){
    const {'*': category} = useParams();
    const {loading, error, data} = useFetch(category);
    
    if(loading){
        return <h1>Loading</h1>
    }
    
    if(error){
        return <h1>Error</h1>
    }

    return(
        <div>
            <div className="product-container">
                {data && data.map((product) => (
                    <div className="product-item" key={product.id}>
                        <Product product={product}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Products;