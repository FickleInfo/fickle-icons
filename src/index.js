import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import RouteComponent from './routes/Route';
import combineReducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import './static/css/primary.css';
import './static/css/common.css';
import './static/css/grid.css';
import './static/css/forms.css';
import './static/css/table.css';

export const store = createStore(combineReducers, applyMiddleware(thunkMiddleware) );

ReactDOM.render(
    <Provider store={store}>
      <RouteComponent />
    </Provider>, document.getElementById('root'));
