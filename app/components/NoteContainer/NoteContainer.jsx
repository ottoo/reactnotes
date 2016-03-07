import React from 'react';
import { connect } from 'react-redux';
import NoteTitleArea from './../NoteTitleArea';
import NoteTextArea from './../NoteTextArea';
import NoteActionBtn from './../NoteActionBtn';
import { saveNote } from './../../actions.js';

class NoteContainer extends React.Component {

    constructor(props) {
        super(props);

        this.handleTitleAreaChange = this.handleTitleAreaChange.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.onActionBtnClicked = this.onActionBtnClicked.bind(this);

        this.state = {
            titleText: '',
            noteText: ''
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

    onActionBtnClicked() {
        console.log('Clicked', this.state);
        this.props.dispatch(saveNote(this.state));
    }

    render() {
        return (
          <div className="notecontainer">
            <NoteTitleArea titleText={this.state.titleText} handleTitleAreaChange={this.handleTitleAreaChange}/>
            <NoteTextArea noteText={this.state.noteText} handleTextAreaChange={this.handleTextAreaChange}/>
            <NoteActionBtn label="Save" onActionBtnClicked={this.onActionBtnClicked}/>
          </div>
        )
    }
}

function select(state) {
    return state;
}

export default connect(select)(NoteContainer);