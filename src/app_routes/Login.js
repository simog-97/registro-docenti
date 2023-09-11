import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="login">
            <h1> Login </h1>
            <h2> Docente o studente? </h2>
            <div >
                <Link to="/prof-login">Login professore</Link>
                <Link to="/student-login">Login studente</Link>
            </div>
        </div>
    );
}
 
export default Login;