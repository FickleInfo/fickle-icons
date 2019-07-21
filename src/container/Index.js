import React, {Component} from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import FontAwesomeIconsIndex from './fontawesome/Index';
import SimpleLineIconsIndex from './simpleline/Index';

import HomeIndex from './homepage/Index';

class App extends Component {
    render() {
        return (
            <div>     
             <Switch>           
                <Route exact path="/" component={HomeIndex} /> 
                <Route path="/fontawesome/" component={FontAwesomeIconsIndex} /> 
                <Route path="/simpleline/" component={SimpleLineIconsIndex} /> 
               </Switch>
            </div>
        );
    }
}


export default App
