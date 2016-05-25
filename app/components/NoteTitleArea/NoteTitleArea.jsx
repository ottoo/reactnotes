import React from 'react';

export const NoteTitleArea = ({handleTitleAreaChange, titleText}) => <input type="text" className="form-control notetitle" placeholder="Title" value={titleText} onChange={handleTitleAreaChange}/>
