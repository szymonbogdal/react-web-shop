import { useState, useEffect } from "react";

const useFetch = (params) =>{
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState();

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                let url = 'https://fakestoreapi.com/products';
                if(params){
                    url += `/category/${params}`
                }
                const request = await fetch(url);
                if(!request.ok){
                    setError(true);
                    setLoading(false);
                    return
                }
                const response = await request.json();
                setData(response);
            } catch (error) {
                setError(true);
            }
            setLoading(false);
        }
        fetchData();
    },[params])
    return {loading, error, data};
}

export default useFetch;