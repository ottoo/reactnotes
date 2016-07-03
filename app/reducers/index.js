import { combineReducers } from 'redux';
import { modelReducer, formReducer } from 'react-redux-form';
import { SAVE_NOTE, UPDATE_NOTE, SET_CURRENT_NOTE_ID } from './../actions/index.js';
import shortid from 'shortid';
import { List, Map, fromJS } from 'immutable';

const initialState = Map({
    notes: List(),
    // Additional data here..
});

function noteReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_NOTE: {
            const notes = state.get('notes');

            const newNotes = notes.push(Map({
                id: shortid.generate(),
                titleText: action.note.titleText,
                noteText: action.note.noteText,
                updatedAt: Date.now()
            }));

            return state.set('notes', newNotes);
        }
        case UPDATE_NOTE: {
            let notes = state.get('notes');
            let updatedNote = Object.assign({}, action.note, { updatedAt: Date.now() });

            notes = notes.update(notes.findIndex(
                note => note.get('id') === action.note.id), () => fromJS(updatedNote));

            return state.set('notes', notes);
        }
        case SET_CURRENT_NOTE_ID: {
            return state.set('currentNoteId', action.noteId);
        }
        default: {
            return state;
        }
    }
}

const loginModelReducer = modelReducer('login', {
    email: '',
    password: ''
});

const loginFormReducer = formReducer('login', {
    email: '',
    password: ''
})

const rootReducer = combineReducers({
    noteReducer,
    login: loginModelReducer,
    loginForm: loginFormReducer
});

export default rootReducer;
