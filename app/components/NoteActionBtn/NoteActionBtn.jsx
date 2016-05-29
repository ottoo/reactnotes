import React from 'react';

export const NoteActionBtn = ({ label, onActionBtnClicked, isDisabled, classNames }) => <button className={classNames} disabled={isDisabled} onClick={onActionBtnClicked}>{label}</button>;
