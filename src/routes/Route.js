import React, {Component} from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import App from './../container/Index';

class RouteComponent extends Component {
    render() {
        return (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    }
}


export default RouteComponent
