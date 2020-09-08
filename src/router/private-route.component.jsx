import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import alertify from 'alertifyjs';

const PrivateRoute = (props) => {
    console.log(props);
    const {user} = props;
    return (
        !!user ? accessCheck(props) : <Redirect to="/login"/>
    );
};

const accessCheck = ({user, accessType,children,...rest}) => {
    console.log('user:',user);
    console.log('children:',children);
    console.log('rest:',{...rest});
    if(user.type === accessType) {
        return (<Route user={user} {...rest}>{children}</Route>);
    } else {
        return accessWarning(accessType);
    }
}

const accessWarning = (accessType) => {
    alertify.warning("You are not a " + accessType + " to access this page");
    return (<Redirect to="/"/>);
}
export default PrivateRoute;