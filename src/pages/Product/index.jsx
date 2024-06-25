import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ProductDetails from "./ProductDetails";
import './product.css'

function Product(){
    const {id} = useParams();
    const {loading, error, data} = useFetch(id);

    if(loading){
        return <h1>Loading</h1>
    }
    
    if(error){
        return <h1>Error</h1>
    }

    return <ProductDetails product={data} />
}

export default Product;