import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const LogOutProcedure = props => {
    
    const navigate = useNavigate()

    const logOut = () => {
        Cookies.set('role', 'guest')
        // props.setLoggedOut();
        props.logOps['logOut']();
        navigate("/")
        
    }

    let role = Cookies.get('role')

    return (
        <div className="login">

            { role !== 'guest' &&
            (
                <div className="logout-choice">
                <h2> Vuoi davvero eseuire il logout? </h2>
                <br /> <br />
                <button className="logout-button" onClick={() => navigate(-1)}>
                    no
                </button>
                <button className="logout-button" onClick={() => logOut()}>
                    si
                </button>
                </div>
            )}
            { role === 'guest' &&
            (
                <div>
                <p> Non ti sei ancora loggato </p>
                </div>
            )}
            

        </div>
    );
}
 
export default LogOutProcedure;