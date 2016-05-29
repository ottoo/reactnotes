import React from 'react';

class NoteList extends React.Component {

    constructor(props) {
        super(props);
        this.onNoteClicked = this.onNoteClicked.bind(this);
    }

    onNoteClicked(note) {
        this.context.router.push(`note/${note.id}`);
        this.props.setCurrentNoteId(note.id);
    }

    render() {
        const createNoteListItem = note => {
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
    router: React.PropTypes.object.isRequired,
    location: React.PropTypes.object
};

NoteList.propTypes = {
    setCurrentNoteId: React.PropTypes.func,
    notes: React.PropTypes.array
};


export default NoteList;
