import React from 'react';
import NoteTitleArea from './../NoteTitleArea';
import NoteTextArea from './../NoteTextArea';
import NoteActionBtn from './../NoteActionBtn';

export class NoteContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            titleText: '',
            noteText: ''
        }
    }

    handleTitleAreaChange(event) {
        console.log(event.target.value);
    }

    handleTextAreaChange(event) {
        console.log(event.target.value);
    }

    onActionBtnClicked() {
        console.log('Clicked');
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