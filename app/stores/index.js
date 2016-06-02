import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './../reducers/index.js';

// TODO: Can add preloaded state as the 2nd argument
export const store = createStore(rootReducer, applyMiddleware(thunk, createLogger()));

export const getNotes = () => {
    return store.getState().noteReducer.notes;
}

export const findNote = id => {
    return _.filter(getNotes(), (note) => {
        return note.id === id;
    });
}
