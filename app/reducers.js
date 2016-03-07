import update from 'react-addons-update';
import { SAVE_NOTE } from './actions';

const initialState = {
    notes: []
};

function noteReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_NOTE:
            return Object.assign({}, state, {
                notes: [
                    ...state.notes,
                    action.note
                ]
            });
        default:
            return state;
    }
}

function addNote(notes, note) {
    return [...notes, note];
}

export default noteReducer;