import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
    console.log(props);
    const {user, ...rest} = props;
    console.log('user:',user);
    console.log('children:',props.children);
    console.log('rest:',{...rest});
    return (
        !!user ? 
        <Route user={user} {...rest}>{props.children}</Route> : <Redirect to="/login"/>
    );
};

export default PrivateRoute;