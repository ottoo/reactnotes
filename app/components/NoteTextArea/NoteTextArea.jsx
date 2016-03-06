import React from 'react';

export const NoteTextArea = ({noteText, handleTextAreaChange}) => <textarea className="notetextarea" defaultValue={noteText} onChange={handleTextAreaChange}></textarea>
