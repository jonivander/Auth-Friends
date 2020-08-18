import { Route, Redirect } from 'react-router-dom'; 
import { Component } from 'react';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route  
            {...rest}
            render={(props) => {
                if (localStorage.getItem('token')) {
                    return <Component {...props} />
                } else {
                    return <Redirect to='/login' />
                }
            }}
        />
    );
};

export default PrivateRoute; 