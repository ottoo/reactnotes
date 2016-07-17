import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './../reducers/index.js';

const configureStore = () => {
    let store = null;
    let middlewares = [thunk];

    if (process.env.NODE_ENV === 'development') {
        middlewares.push(createLogger());
    }

    store = createStore(rootReducer, applyMiddleware(...middlewares));
    store.subscribe(() => {});

    return store;
};

export default configureStore;
