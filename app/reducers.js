import update from 'react-addons-update';
import shortid from 'shortid';
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
                    {
                        id: shortid.generate(),
                        titleText: action.note.titleText,
                        noteText: action.note.noteText
                    }
                ]
            });
        default:
            return state;
    }
}

export default noteReducer;