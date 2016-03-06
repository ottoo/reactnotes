import React from 'react';

export const NoteTitleArea = ({handleTitleAreaChange, titleText}) => <input type="text" className="notetitle" defaultValue={titleText} onChange={handleTitleAreaChange}/>