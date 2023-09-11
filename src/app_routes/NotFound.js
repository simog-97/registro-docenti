import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Spiacente</h1>
            <br /> <br />
            <p>Pagina non trovata</p>
            <br /> <br />
            <Link className="button" to="/">Torna alla homepage</Link>
        </div>
    );
}
 
export default NotFound;