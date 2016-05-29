import React from 'react';

export const NoteTextArea = ({ noteText, handleTextAreaChange }) => <textarea className="notetextarea form-control" placeholder="Content" value={noteText} onChange={handleTextAreaChange}></textarea>
