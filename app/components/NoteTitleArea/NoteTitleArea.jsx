import React from 'react';

export const NoteTitleArea = (props) => <input type="text" className="notetitle" defaultValue={props.titleText} onChange={props.handleTitleAreaChange}/>