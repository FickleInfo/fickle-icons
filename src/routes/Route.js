import React, {Component} from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import FontAwesomeIconsIndex from './../container/fontawesome/Index';

class RouteComponent extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={FontAwesomeIconsIndex}/>                        
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}


export default RouteComponent
