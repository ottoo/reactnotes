import React from 'react';
import { Link } from 'react-router';
import NoteTitleArea from './../NoteTitleArea';
import NoteTextArea from './../NoteTextArea';
import NoteActionBtn from './../NoteActionBtn';

class NoteArea extends React.Component {

    constructor(props) {
        super(props);

        this.handleTitleAreaChange = this.handleTitleAreaChange.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.onSaveBtnClicked = this.onSaveBtnClicked.bind(this);
        this.onResetBtnClicked = this.onResetBtnClicked.bind(this);
        this.resetState = this.resetState.bind(this);

        this.state = {
            id: '',
            titleText: '',
            noteText: '',
            updatedAt: '',
            disableSaveBtn: true
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname === '/new') {
            this.resetState();
        }
    }

    componentDidMount() {
        const currentNote = this.props.currentNote;

        if (currentNote && !this.isPathForNewNote()) {
            this.setState({
                id: currentNote.get('id'),
                titleText: currentNote.get('titleText'),
                noteText: currentNote.get('noteText'),
                disableSaveBtn: false
            });
        }
    }

    componentDidUpdate() {
        const { titleText, noteText } = this.state;
        const titleExists = titleText.length > 0;
        const noteExists = noteText.length > 0;

        if (this.state.disableSaveBtn && titleExists && noteExists) {
            this.setState({ disableSaveBtn: false });
        } else if (!this.state.disableSaveBtn && !titleExists && !noteExists) {
            this.setState({ disableSaveBtn: true });
        }
    }

    onSaveBtnClicked() {
        const pathname = this.props.location.pathname;

        this.props.currentNote && !this.isPathForNewNote()
            ? this.props.updateNote(this.state)
            : this.props.saveNote(this.state);

        this.resetState(() => {
            this.context.router.push('/notes');
        });
    }

    onResetBtnClicked() {
        this.resetState();
    }

    handleTitleAreaChange(event) {
        this.setState({ titleText: event.target.value });
    }

    isPathForNewNote() {
        return this.props.location.pathname === '/new';
    }

    handleTextAreaChange(event) {
        this.setState({ noteText: event.target.value });
    }

    disableSaveBtn() {
        const { titleText, noteText } = this.state;

        if (titleText && titleText.length > 0 && noteText && noteText.length > 0) {
            this.setState({ disableSaveBtn: false });
        }
    }

    resetState(cb) {
        this.setState({ titleText: '', noteText: '' });

        if (_.isFunction(cb)) {
            cb();
        }
    }

    render() {
        return (
            <div className="notearea">
                <Link to="/notes" className="goback">Go back</Link>
                <NoteTitleArea titleText={this.state.titleText} handleTitleAreaChange={this.handleTitleAreaChange}/>
                <NoteTextArea noteText={this.state.noteText} handleTextAreaChange={this.handleTextAreaChange}/>
                <NoteActionBtn label="Save" classNames="noteactionbtn btn btn-default" isDisabled={this.state.disableSaveBtn} onActionBtnClicked={this.onSaveBtnClicked}/>
                <NoteActionBtn label="Reset" classNames="noteactionbtn btn btn-default" onActionBtnClicked={this.onResetBtnClicked}/>
            </div>
        );
    }
}

NoteArea.contextTypes = {
    router: React.PropTypes.object.isRequired,
    location: React.PropTypes.object
};

NoteArea.propTypes = {
    location: React.PropTypes.object.isRequired,
    currentNote: React.PropTypes.object,
    saveNote: React.PropTypes.func,
    updateNote: React.PropTypes.func,
};

export default NoteArea;
