import { Redirect, Route } from "react-router-dom";

function CustomPublicRoute({children, auth, ...rest}) {
    return(
        // Opposite of Private Routing
        <Route {...rest} render={() => auth ? <Redirect to={'/'} /> : children } />
    );
}

export default CustomPublicRoute;