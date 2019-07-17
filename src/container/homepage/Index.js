import React, {Component} from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';

class HomeIndex extends Component {
    render() {
        return (
            <div>
            	<Redirect to="/fontawesome/" />
            </div>
        );
    }
}


export default HomeIndex
