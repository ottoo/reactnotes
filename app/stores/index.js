import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './../reducers/index.js';

const configureStore = () => {
    let store = null;

    if (process.env.NODE_ENV === 'production') {
        store = createStore(rootReducer, applyMiddleware(thunk));
    } else {
        store = createStore(rootReducer, applyMiddleware(thunk, createLogger()));
    }

    store.subscribe(() => {});

    return store;
};

export default configureStore;
