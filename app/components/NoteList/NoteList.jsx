import React from 'react';
import moment from 'moment';

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
            const noteItemClick = this.onNoteClicked.bind(this, note);
            const formattedDate = moment(note.updatedAt).format('DD / MM / YYYY, h:mm:ss');

            return (
                <li className="notelistitem" key={note.id} onClick={noteItemClick}>
                    <div className="title">{note.titleText}</div>
                    <div className="updatedat">{formattedDate}</div>
                </li>
            );
        };

        return (
            <div className="notelist">
                <div className="notelisttitle">Notes</div>
                {this.props.notes.length > 0 ? (
                    <div className="notelistheader">
                        <span>Title</span>
                        <span>Last updated</span>
                    </div>
                ) : ''}
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
