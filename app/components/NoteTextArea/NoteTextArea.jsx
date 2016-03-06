import React from 'react';

export const NoteTextArea = (props) => <textarea className="notetextarea" defaultValue={props.noteText} onChange={props.handleTextAreaChange}></textarea>
