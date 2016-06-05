import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './../reducers/index.js';

const configureStore = () => {
    // TODO: Can add preloaded state as the 2nd argument
    const store = createStore(rootReducer, applyMiddleware(thunk, createLogger()));

    store.subscribe(() =>
      console.log('State updated', store.getState())
    );

    return store;
};

export default configureStore;
