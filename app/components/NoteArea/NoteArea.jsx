import React from 'react';
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
            titleText: '',
            noteText: '',
            disableSaveBtn: true
        };
    }

    componentDidMount() {
        const { currentNote } = this.props;

        if (currentNote) {
            this.setState({
                titleText: currentNote.titleText,
                noteText: currentNote.noteText,
                disableSaveBtn: false
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        let { titleText, noteText } = this.state;
        let titleExists = titleText.length > 0;
        let noteExists = noteText.length > 0;

        if (this.state.disableSaveBtn && titleExists && noteExists) {
            this.setState({ disableSaveBtn: false });
        } else if (!this.state.disableSaveBtn && !titleExists && !noteExists) {
            this.setState({ disableSaveBtn: true });
        }
    }

    disableSaveBtn() {
        let { titleText, noteText } = this.state;
        
        if (titleText && titleText.length > 0 && noteText && noteText.length > 0) {
            this.setState({ disableSaveBtn: false });
        }
    }

    handleTitleAreaChange(event) {
        this.setState({
            titleText: event.target.value
        });
    }

    handleTextAreaChange(event) {
        this.setState({
            noteText: event.target.value
        });
    }

    onSaveBtnClicked() {
        this.props.saveNote(this.state);
        this.resetState(() => {
            this.context.router.push('/notes');
        });
    }

    onResetBtnClicked() {
        this.resetState();
    }

    resetState(cb) {
        this.setState({
            titleText: '',
            noteText: ''
        });

        if (_.isFunction(cb)) {
            cb();
        }
    }

    render() {
        return (
          <div className="notearea">
            <NoteTitleArea titleText={this.state.titleText} handleTitleAreaChange={this.handleTitleAreaChange}/>
            <NoteTextArea noteText={this.state.noteText} handleTextAreaChange={this.handleTextAreaChange}/>
            <NoteActionBtn label="Save" isDisabled={this.state.disableSaveBtn} onActionBtnClicked={this.onSaveBtnClicked}/>
            <NoteActionBtn label="Reset" onActionBtnClicked={this.onResetBtnClicked}/>
          </div>
        )
    }
}

NoteArea.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default NoteArea;
