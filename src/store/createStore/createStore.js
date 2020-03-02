import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/reducers';
import initState from "../initState";


let initialState = {};


if(__isBrowser__ && window){
    initialState = window.__INITIAL_STATE_DATA__;
    delete window.__INITIAL_STATE_DATA__;
}else{
    initialState  = initState;
}


const createStoreClient = createStore(reducers, initialState, applyMiddleware(thunk));

export default createStoreClient;
