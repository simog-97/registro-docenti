import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const RegisterListBody = props => {

    const registerList = props.registerList

    return (
        <div className="register-list">
        <article>
            <h3>I tuoi registri </h3>
            <br />
        {registerList.map((register) => (
            (
                <div className="register-preview">
                    <Link to={`/register/${register.id}`}>
                    <h4>Registro dell'anno {register.year}</h4>
                    <p>Materia : {register.subject.name} <br/> n. di crediti: {register.subject.cfu} </p>       
                    </Link>                                                             
                </div>
            )
        ))}
            {registerList.length===0 && 
            <div>
                <p>Nessun registro da mostrare </p>
                <br />
            </div>  }
        </article>

    <Link className="button" to={`/add-register/${Cookies.get('userId')}`}>Nuovo registro</Link> 
    </div>
    );
}
 
export default RegisterListBody;