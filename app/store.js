import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

export const store = createStore(rootReducer, applyMiddleware(thunk, createLogger()));

export function getToken() {
    return store.getState().userReducer.token;
}

export function getNotes() {
    return store.getState().noteReducer.notes;
}

export function findNote(id) {
    return _.filter(getNotes(), (note) => {
        return note.id === id;
    });
}