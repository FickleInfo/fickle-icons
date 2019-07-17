import React from 'react';
import {store} from "../index";
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function checkAuth() {
    const { isAuthenticated } = store.getState().loginReducer;
    return isAuthenticated
}

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        checkAuth()?
            <Redirect to='/dashboard'/>
            : <Component {...props}/>
    )}/>
);

function mapStateToProps(state){
    const {isAuthenticated} = state.loginReducer;
    return {isAuthenticated}
}

export default connect(mapStateToProps)(ProtectedRoute);
