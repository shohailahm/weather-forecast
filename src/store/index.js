import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// const logger = require(`redux-logger`)
import reducer from './reducers';

const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
    // middleware.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;