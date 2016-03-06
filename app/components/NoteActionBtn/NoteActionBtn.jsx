import React from 'react';

export const NoteActionBtn = ({label, onActionBtnClicked}) =>  <button className="noteactionbtn" onClick={onActionBtnClicked}>{label}</button>;