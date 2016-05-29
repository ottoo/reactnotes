import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';

import NoteList from './NoteList.jsx';
import ContextWrapper from './../../test/ContextWrapper.js';

expect.extend(expectJSX);

let component = null;
let renderer = null;
let currentNoteIdMock = null;
const setCurrentNoteIdMock = (id) => {
    currentNoteIdMock = id;
};
const mockNotes = [
    {
        id: 1,
        titleText: 'Title 1',
        noteText: 'Note Text 1'
    }, {
        id: 2,
        titleText: 'Title 2',
        noteText: 'Note Text 2'
    }, {
        id: 3,
        titleText: 'Title 3',
        noteText: 'Note Text 3'
    }
];

describe('NoteList', () => {

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<ContextWrapper><NoteList notes={mockNotes} setCurrentNoteId={setCurrentNoteIdMock} /></ContextWrapper>);
        renderer = TestUtils.createRenderer();
        renderer.render(<NoteList notes={mockNotes} />);
    });

    it('should contain 3 notes', () => {
        const notes = TestUtils.scryRenderedDOMComponentsWithClass(component, 'notelistitem');
        expect(notes.length).toEqual(3);
    });

    it('should redirect to note page', () => {
        const note = TestUtils.scryRenderedDOMComponentsWithClass(component, 'notelistitem')[0];
        TestUtils.Simulate.click(note);
        expect(currentNoteIdMock).toEqual(1);
    });
});
