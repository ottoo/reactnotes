import React from 'react';

export class NoteTextArea extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <textarea className="notetextarea" defaultValue={this.props.noteText} onChange={this.props.handeTextAreaChange}></textarea>
        )
    }
}