import "./home.css"
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import HomePage from "./HomePage";

function Home(){
    const {data, loading, error} = useFetch("?limit=9");

    if(loading){
        return <Loader/>
    }

    if(error){
        return <ErrorMessage/>
    }

    return <HomePage products={data}/>
}

export default Home;