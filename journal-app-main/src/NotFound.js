import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {

    return (  
        <div className="not-found">
            <h2> Sorry </h2>
            <p>That page cannot be found</p>
            <button>
                <Link to="/" className="button-link">Back to Home</Link>
            </button>
        </div>
    );
}
 
export default NotFound;