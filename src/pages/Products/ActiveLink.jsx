import { Link, useLocation } from "react-router-dom";

function ActiveLink({to, text}){
    const location = useLocation();
    return( 
        <Link 
            to={to}
            className={to==location.pathname?"category__item-link category__item-link--active":"category__item-link"}
        >
        {text}
        </Link>
        )

}

export default ActiveLink;