import {createStore} from 'redux';
import apidataReducer from './reducer/apidataReducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store=createStore(apidataReducer,applyMiddleware(thunk));

export default store;