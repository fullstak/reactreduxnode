import { createStore, combineReducers, applyMiddleware } from 'redux';
import users from '../reducers/users'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default createStore(combineReducers({
    users
}),
{},
    applyMiddleware(logger, thunk)
);
