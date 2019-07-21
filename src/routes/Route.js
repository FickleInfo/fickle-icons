import React, {Component} from 'react';
import {connect} from 'react-redux';
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


// function mapStateToProps(state){
//     return state
// }

// export default connect(mapStateToProps)(RouteComponent);

export default RouteComponent