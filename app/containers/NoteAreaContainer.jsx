import { connect } from 'react-redux';
import { saveNote, updateNote } from './../actions/index.js';
import NoteArea from './../components/NoteArea';

const mapStateToProps = state => {
    const notes = state.noteReducer.get('notes');
    const currentNoteId = state.noteReducer.get('currentNoteId');

    return {
        currentNote: notes.find(note => note.get('id') === currentNoteId)
    };
}

const mapDispatchToProps = dispatch => ({
    saveNote(note) {
        dispatch(saveNote(note));
    },
    updateNote(note) {
        dispatch(updateNote(note));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteArea);
