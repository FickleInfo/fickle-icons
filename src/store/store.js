/**
 * Created by amir on 26/7/17.
 */
import { createStore, applyMiddleware } from 'redux';
import  reducer  from '../reducers';
import thunkMiddleware from 'redux-thunk';
import getApi from '../middleware/getApi'
import getPlainApi from '../middleware/getApiPlain'
import postApi from '../middleware/postApi'
import deleteApi from '../middleware/deleteApi'
import putApi from '../middleware/putApi';
import createHistory from 'history/createBrowserHistory'
import {   routerMiddleware } from 'react-router-redux'
import getAuthApi from "../middleware/getAuthApi";
import postAuthApi from "../middleware/postAuthApi";
// import logger from 'redux-logger'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const store = createStore(reducer,applyMiddleware(thunkMiddleware,getApi,getAuthApi,getPlainApi,postApi,putApi,postAuthApi,deleteApi,middleware));

// const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api, postApi, middleware)(createStore);

// export default createStoreWithMiddleware(reducer);
export default store;
