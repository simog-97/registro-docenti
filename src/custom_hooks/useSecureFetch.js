import { useEffect, useState } from "react";

const useSecureFetch = (url, token) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect( () => {
        //console.log("asdadsadaikii")
        const abortCont = new AbortController();

        fetch(url, {
            signal: abortCont.signal,
            headers: {
                Authorization: token
            }
            
        })
        .then(res => {
            if (!res.ok) {
                throw Error('errore nel fetch -> status : '+ res.status);
            }
            return res.json();
        })
        .then(data => {
            //console.log(data);
            setData(data);
            setIsPending(false);
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                // console.log('fetch abortito');
            } else{
                setError(err.message);
                setIsPending(false);
            }
        })
        return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error};

}
 
export default useSecureFetch;