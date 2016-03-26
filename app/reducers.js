import { combineReducers } from 'redux';
import update from 'react-addons-update';
import shortid from 'shortid';
import { SAVE_NOTE, SET_CURRENT_NOTE_ID } from './actions';

function noteReducer(state = { notes: [], currentNoteId: null }, action) {
    switch (action.type) {
        case SAVE_NOTE:
            return Object.assign({}, state, {
                notes: [
                    ...state.notes,
                    {
                        id: shortid.generate(),
                        titleText: action.note.titleText,
                        noteText: action.note.noteText
                    }
                ]
            });
        case SET_CURRENT_NOTE_ID:
            return Object.assign({}, state, {
                currentNoteId: action.noteId
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    noteReducer
});

export default rootReducer;