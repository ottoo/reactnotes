import React from 'react';
import { connect } from 'react-redux';
import { saveNote } from './../actions.js';
import NoteArea from './../components/NoteArea';

function mapStateToProps(state) {
    return { notes: state.noteReducer.notes };
}

function mapDispatchToProps(dispatch, props) {
    return {
        saveNote: (note) => {
            dispatch(saveNote(note))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteArea);