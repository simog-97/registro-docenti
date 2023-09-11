import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const StudentLogin = props => {


    const navigate = useNavigate()

    const setStudentRole = () => { 

        //Implementare qui il dialogo col server per la convalida del token

        Cookies.set('role', 'student')
        // props.setLoggedOut();
        props.logOps['logIn']();
        navigate("/")
    }
    const logOut = () => {
        sessionStorage.setItem("role", null);
        Cookies.set('role', 'guest')
        // props.setLoggedOut();
        props.logOps['logOut']();
        navigate("/")
    }

    return (
        <div className="login">
            <button onClick={() => setStudentRole()}>
                Loggati come studente
            </button>
            <button onClick={() => logOut()}>
                Log out
            </button>

        </div>
    );
}
 
export default StudentLogin;