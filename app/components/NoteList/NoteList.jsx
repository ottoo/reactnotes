import React from 'react';
import { connect } from 'react-redux';

class NoteList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let createNoteListItem = (note) => {
            return <li key={note.id}>{note.titleText}</li>;
        };

        return (
          <div className="notelist">
            <h2>Notes</h2>
            <ul>
                {this.props.notes.map(createNoteListItem)}
            </ul>
          </div>
        )
    }
}

function select(state) {
    return { notes: state.noteReducer.notes };
}

export default connect(select)(NoteList);
