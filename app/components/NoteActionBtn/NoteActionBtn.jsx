import React from 'react';

export const NoteActionBtn = (props) =>  <button className="noteactionbtn" onClick={props.onActionBtnClicked}>{props.label}</button>;