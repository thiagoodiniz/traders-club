import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers'
import logger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [logger];

const store = createStore(
    reducers, 
    composeEnhancers(
    applyMiddleware(...middlewares)))

export default store;