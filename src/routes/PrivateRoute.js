import React from 'react';
import {  Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {store} from "../index";


function checkAuth() {
    const { isAuthenticated } = store.getState().loginReducer;
    return isAuthenticated
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        checkAuth()?
            <Component {...props}/>
            : <Redirect to='/login' />
    )}/>
);

function mapStateToProps(state){
    const {isAuthenticated} = state.loginReducer;
    return {isAuthenticated}
}

export default connect(mapStateToProps)(PrivateRoute);
