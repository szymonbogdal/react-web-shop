import "./error.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ErrorMessage(){
    return( 
        <div className="error-container">
            <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" className="error__exclamation"/>
            <div className="error__body">
                <p className="error__body-header">Error</p>
                <p className="error__body-message">Something went wrong, Please try again later.</p>
            </div>
        </div>
    )
}

export default ErrorMessage;