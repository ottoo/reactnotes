import React from 'react';

export const NoteActionBtn = ({label, onActionBtnClicked, isDisabled}) =>  <button className="noteactionbtn" disabled={isDisabled} onClick={onActionBtnClicked}>{label}</button>;