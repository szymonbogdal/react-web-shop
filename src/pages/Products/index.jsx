import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

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
            <h1>Products</h1>
            <ul>
                {data && data.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default Products;