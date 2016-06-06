import { connect } from 'react-redux';
import { saveNote, updateNote } from './../actions/index.js';
import NoteArea from './../components/NoteArea';

const mapStateToProps = (state, ownProps) => {
    const notes = state.noteReducer.get('notes');

    return {
        currentNote: notes.find(note => note.get('id') === ownProps.params.noteId)
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
