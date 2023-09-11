// import { useEffect, useState } from "react";
// import axios from "axios";

// const useAuthenticate = (url, credentials) => {

//     const [tokenWrapper, setTokenWrapper] = useState(null);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);
    
//     // useEffect( () => {
//     //     const abortCont = new AbortController();

//     //     fetch(url, {
//     //         signal: abortCont.signal,
//     //         method: 'POST',
//     //         headers: {"Content-Type":"application/json"},
//     //         body: JSON.stringify(credentials) 
//     //     })
//     //     .then(res => {
//     //         if (!res.ok) {
//     //             throw Error('errore di credenziali');
//     //         }
//     //         return res.json();
//     //     })
//     //     .then(data => {
//     //         //console.log(data);
//     //         setTokenWrapper(data);
//     //         setIsPending(false);
//     //     })
//     //     .catch(err => {
//     //         if (err.name === 'AbortError') {
//     //             // console.log('fetch abortito');
//     //         } else{
//     //             setError(err.message);
//     //             setIsPending(false);
//     //         }
//     //     })
//     //     return () => abortCont.abort();
//     // }, [url]);
//     // return {tokenWrapper, isPending, error};

//     //preso da internet
//     // useEffect(() => {
//     //     // POST request using fetch inside useEffect React hook
//     //     const requestOptions = {
//     //         method: 'POST',
//     //         headers: { 'Content-Type': 'application/json' },
//     //         body: JSON.stringify(credentials)
//     //     };
//     //     fetch(url, requestOptions)
//     //         .then(response => response.json())
//     //         .then(data => setPostId(data.id));
    
//     // // empty dependency array means this effect will only run once (like componentDidMount in classes)
//     // }, []);

//     axios.post(url, credentials)
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });


// }
 
// export default useAuthenticate;