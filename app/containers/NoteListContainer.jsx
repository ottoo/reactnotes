import { connect } from 'react-redux';
import { setCurrentNoteId } from './../actions.js';
import NoteList from './../components/NoteList';

function mapStateToProps(state) {
    return { notes: state.noteReducer.get('notes').toJS() };
}

function mapDispatchToProps(dispatch) {
    return {
        setCurrentNoteId: (id) => {
            dispatch(setCurrentNoteId(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
