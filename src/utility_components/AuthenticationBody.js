import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";





const  AuthenticationBody = props => {

    const [formEmail, setEmail] = useState('');
    const [formPassword, setPassword] = useState('');
    const url = 'http://localhost:3000/api/auth/authenticate'   
    const navigate = useNavigate()

    const [tokenWrapper, setTokenWrapper] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        // let username = {"username":formEmail}
        // let password = {"password":formPassword}
        // let credentials = {username, password}

        let username = formEmail
        let password = formPassword
        const credentials = { 'username' : username , 'password': password}


        const resp = axios.post(url, credentials)
        .then(resp => {
            console.log('credenziali corrette')
            Cookies.set('token', resp.data.token.token)
            Cookies.set('tokenId', resp.data.token.id)
            Cookies.set('userId', resp.data.userId)
            Cookies.set('role', 'professor')
            props.logOps['logIn']();
            navigate('/')
        })
        .catch(error => {
                let statusCode = error.response.status
                if (statusCode == 401)
                    console.log('credenziali errate!')
                else 
                    console.log(error)
        })
        
        
    }


    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <label>Email</label> <br />
                <input 
                    type="email" 
                    required
                    value={formEmail} 
                    onChange={(e) => setEmail(e.target.value)}
                /> <br /><br />

                <label>Password</label> <br />
                <input 
                    type="password" 
                    required
                    value={formPassword} 
                    onChange={(e) => setPassword(e.target.value)}
                /> <br /><br />

                <button className="button">Login</button>
            </form>

        </div>
    );
}
 
export default AuthenticationBody;