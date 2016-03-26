import React from 'react';
import { connect } from 'react-redux';
import NoteList from './../components/NoteList';

function mapStateToProps(state) {
    return { notes: state.noteReducer.notes };
}

export default connect(mapStateToProps)(NoteList);