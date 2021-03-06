import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const privateRoute = ({component: Component, loggedIn, user, ...rest}) => {
    return(
        <Route {...rest} render={ props => {
            if(loggedIn) {
                return <Component {...props} user={user} />
            } else {
                return <Redirect to="/" />
            }
        }} />
    )
}

export default privateRoute;