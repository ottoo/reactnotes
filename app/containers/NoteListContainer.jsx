import { connect } from 'react-redux';
import { setCurrentNoteId } from './../actions/index.js';
import NoteList from './../components/NoteList';

const mapStateToProps = state => ({
    notes: state.noteReducer.get('notes').toJS(),
    login: state.login
});

const mapDispatchToProps = dispatch => ({
    setCurrentNoteId(id) {
        dispatch(setCurrentNoteId(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
