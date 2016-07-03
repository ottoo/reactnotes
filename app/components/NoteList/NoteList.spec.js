import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { shallow, mount, render } from 'enzyme';

import NoteList from './NoteList.jsx';
import ContextWrapper from './../../test/ContextWrapper.js';

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
    it('should contain 3 notes', () => {
        const component = shallow(<NoteList notes={mockNotes} login={{email: ''}}/>);
        const notes = component.find('.notelistitem');
        expect(notes.length).toEqual(3);
    });

    it('should redirect to note page', () => {
        const component = mount(<ContextWrapper>
            <NoteList
                notes={mockNotes}
                login={{email: ''}}
                setCurrentNoteId={setCurrentNoteIdMock}
            />
        </ContextWrapper>);
        const note = component.find('.notelistitem').at(1).simulate('click');
        expect(currentNoteIdMock).toEqual(2);
    });
});
