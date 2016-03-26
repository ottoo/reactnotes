import React from 'react';
import { connect } from 'react-redux';
import { saveNote } from './../actions.js';
import NoteArea from './../components/NoteArea';

function mapStateToProps(state) {
    const { notes, currentNoteId } = state.noteReducer;

    return { 
        currentNote: _.find(notes, (note) => { 
            return note.id === currentNoteId; 
        }) 
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        saveNote: (note) => {
            dispatch(saveNote(note));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteArea);