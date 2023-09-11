import Cookies from "js-cookie";
import useSecureFetch from "../custom_hooks/useSecureFetch";
import ProfPersonalInfo from "./ProfPersonalInfo";
import Loading from "./Loading";
import RegisterListBody from "./RegisterListBody";

const ProfHomeBody = props => {

    const id = props.id
    const token = Cookies.get('token')

    const {data:professor, isPending, error} = useSecureFetch('http://localhost:3000/api/professor/'+ id, token)
    const {data:registerList, isPending:registerIsPending, error:registerError} = useSecureFetch('http://localhost:3000/api/professor/' +id+ '/registers', token)


    
    return (
        <div className="general">
        <h1>Homepage Docente</h1>
        <br /> <br />
        <p>Benvenuto professore </p>
        <br/><br/>

        {/* <p>
            token: {Cookies.get('token')} <br />
            token id: {Cookies.get('tokenId')} <br />
            user id: {Cookies.get('userId')} <br />
            role: {Cookies.get('role')} <br />
            
        </p> */}

        {isPending && <Loading/>}
        {professor && <ProfPersonalInfo professor={professor} />}
        {error && (
            <div className="error">
                <p>Errore nel fetch : <br/> {error}</p>
            </div>
        )}
        
        <br /> <br />
        {!registerError && registerList && <RegisterListBody registerList={registerList} />}


        

        </div>
    );
}
 
export default ProfHomeBody;












