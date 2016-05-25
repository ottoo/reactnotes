import React from 'react';

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
            return <li className="notelistitem" key={note.id} onClick={noteItemClick}>{note.titleText}</li>;
        };

        return (
            <div className="notelist">
                <div className="notelisttitle">Notes</div>
                <ul>
                    {this.props.notes.map(createNoteListItem)}
                </ul>
            </div>
        );
    }
}

NoteList.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default NoteList;
