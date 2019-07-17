import React, {Component} from 'react';
import {BrowserRouter, Switch, Redirect, Route, HashRouter} from 'react-router-dom';
import App from './../container/Index';

class RouteComponent extends Component {
    render() {
        return (
            <HashRouter>
                <App />
            </HashRouter>
        );
    }
}


export default RouteComponent
