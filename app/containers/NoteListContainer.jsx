import React from 'react';
import { connect } from 'react-redux';
import { setCurrentNoteId } from './../actions.js';
import NoteList from './../components/NoteList';

function mapStateToProps(state) {
    return { notes: state.noteReducer.notes };
}

function mapDispatchToProps(dispatch, props) {
    return {
        setCurrentNoteId: (id) => {
            dispatch(setCurrentNoteId(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);