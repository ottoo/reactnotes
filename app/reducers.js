import { combineReducers } from 'redux';
import { SAVE_NOTE, UPDATE_NOTE, SET_CURRENT_NOTE_ID } from './actions';
import shortid from 'shortid';
import { List, Map, fromJS } from 'immutable';

let initialState = Map({
    notes: List(),
    currentNoteId: null
});

function noteReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_NOTE:
            const newNotes = state.get('notes').push(Map({
                id: shortid.generate(),
                titleText: action.note.titleText,
                noteText: action.note.noteText
            }));

            return state.set('notes', newNotes);
        case UPDATE_NOTE:
            let notes = state.get('notes');

            notes = notes.update(notes.findIndex((note) => {
                return note.get('id') === action.id;
            }), () => fromJS(action.note));

            return state.set('notes', notes);
        case SET_CURRENT_NOTE_ID:
            return state.set('currentNoteId', action.noteId);
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    noteReducer
});

export default rootReducer;
