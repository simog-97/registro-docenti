import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"




const Navbar = props => {

    const [role, setRole] = useState('guest') 


    useEffect ( () => {
        setRole(Cookies.get('role'))
        console.log('prendo ruolo')
    })

    return (
        <div className="navbar">
            <h1>Registro express</h1>
            <div className="links">
                <Link to="/">Home</Link>
                {/* { Cookies.get('role') === 'guest' && (<Link to="/login">Login</Link>)}
                { Cookies.get('role') !== 'guest' && (<Link to="/logout-procedure">Logout</Link>)} */}
                
                {/* {!props.logOps['logCheck'] && (<Link to="/prof-login">Login</Link>)}
                { props.logOps['logCheck'] && (<Link to="/logout-procedure">Logout</Link>)} */}

                { role === 'guest' && (<Link to="/prof-login">Login</Link>)}
                { role !== 'guest' && (<Link to="/logout-procedure">Logout</Link>)}

            </div>
        </div>
    );
}

export default Navbar;