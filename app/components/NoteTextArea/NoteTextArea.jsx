import React from 'react';

export const NoteTextArea = ({noteText, handleTextAreaChange}) => <textarea className="notetextarea" placeholder="Content" value={noteText} onChange={handleTextAreaChange}></textarea>
