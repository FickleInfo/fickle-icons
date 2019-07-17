import React, {Component} from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import FontAwesomeIconsIndex from './fontawesome/Index';

class App extends Component {
    render() {
        return (
            <div>                
                <Route exact path="/" component={FontAwesomeIconsIndex}/> 
            </div>
        );
    }
}


export default App
