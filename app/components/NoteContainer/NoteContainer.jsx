import React from 'react';
import NoteTextArea from './../NoteTextArea';

export class NoteContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            noteText: ''
        }
    }

    handeTextAreaChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
          <div className="notecontainer">
            <NoteTextArea noteText={this.state.noteText} handeTextAreaChange={this.handeTextAreaChange}/>
          </div>
        )
    }
}