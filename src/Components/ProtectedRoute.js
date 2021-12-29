/* eslint-disable react/prop-types */
import {Route, Redirect, useLocation} from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest}) {
    const userToken = localStorage.getItem("userToken");
    const tokenId = localStorage.getItem("userToken");
    const location = useLocation()
   
    return <>
        <Route 
        {...rest}
        render={props => {
        if (!userToken || !tokenId) {
            return (
                <Redirect
                    to={{ 
                        pathname: "/signin", 
                        state: { from: location }   
                    }}
                />
                );
            } else {
            return( 
                <Component {...props}></Component>
            )
        }
        }} />
        </>
}

export default ProtectedRoute;