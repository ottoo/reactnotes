import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class NoteList extends React.Component {

    constructor(props) {
        super(props);

        this.onNoteClicked = this.onNoteClicked.bind(this);
    }

    onNoteClicked(note, event) {
        this.context.router.push(`note/${note.id}`);
        this.props.setCurrentNoteId(note.id);
    }

    render() {
        const createNoteListItem = (note) => {
            let noteItemClick = this.onNoteClicked.bind(this, note);
            return <li key={note.id} onClick={noteItemClick}>{note.titleText}</li>;
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

NoteList.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default NoteList;
