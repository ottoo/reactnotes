import { connect } from 'react-redux';
import { saveNote, updateNote } from './../actions/index.js';
import NoteArea from './../components/NoteArea';

function mapStateToProps(state) {
    const notes = state.noteReducer.get('notes');
    const currentNoteId = state.noteReducer.get('currentNoteId');

    return {
        currentNote: notes.find(note => note.get('id') === currentNoteId)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        saveNote: (note) => {
            dispatch(saveNote(note));
        },
        updateNote: (params) => {
            dispatch(updateNote(params));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteArea);
