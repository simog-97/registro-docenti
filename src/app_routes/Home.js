import Cookies from "js-cookie";
import ProfHomeBody from "../utility_components/ProfHomeBody";



const Home = () => {

    let role = Cookies.get('role')
    let token = Cookies.get('token')
    let tokenId = Cookies.get('tokenId')
    let userId = Cookies.get('userId')
    
    // const {data:tokenWrapper, isPending:tokenWrapperIsPending, error:tokenWrapperError} = useFetch('http://localhost:3000/api/auth/token');

    const showRole = () => {
      console.log(role);
    }

    if( role === 'professor') {
      return (
        // <div>
        //     <h1>Homepage Docente</h1>
        //     <br /> <br />
        //     <p>Benvenuto professore! </p>
        //     <br/><br/>
        //     <button onClick={() => showRole()}>Mostra ruolo</button>
            
        // </div>
        <ProfHomeBody id={userId} ></ProfHomeBody>
      );
    }
    if( role === 'student') {
      return (
        <div>
            <h1>Homepage Studente</h1>
            <br /> <br />
            <p>Benvenuto studente! </p>
            <button onClick={() => showRole()}>Mostra ruolo</button>
            
        </div>
      );
    }
      
    else {
      return(
        <div className="general">
            <h1>Homepage</h1>
            <br /> <br />
            <p>Sei nella homepage del sito. Effettua il login per continuare</p>
            <br/>
            {/* <button onClick={() => showRole()}>Mostra ruolo</button> */}

        </div>
      )
    }


}
 
export default Home;