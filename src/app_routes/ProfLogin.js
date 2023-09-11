import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import AuthenticationBody from "../utility_components/AuthenticationBody";


const ProfLogin = props => {

    const navigate = useNavigate();

    // const setProfRole = () => {
    //     Cookies.set('role', 'professor')
    //     // props.setLoggedIn()
    //     props.logOps['logIn']();
    //     navigate("/")
    // }
    const logOut = () => {
        Cookies.set('token', '')
        Cookies.set('tokenId', '')
        Cookies.set('userId', '')
        Cookies.set('role', 'guest')
        
        console.log('sloggato')
        
        
        // props.setLoggedOut();
        props.logOps['logOut']();
        navigate("/")
    }

    return (
        <div className="general">

            {/* <button onClick={() => setProfRole()}>
                Loggati come prof
            </button> */}

            <AuthenticationBody logOps= {props.logOps} ></AuthenticationBody>
            
            <br /> <br />

            {/* <button onClick={() => logOut()}>
                Log out
            </button> */}

        </div>
    );
}
 
export default ProfLogin;