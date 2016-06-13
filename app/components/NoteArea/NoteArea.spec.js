import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';

import NoteArea from './NoteArea.jsx';

let component = null;
let renderer = null;

describe('NoteArea', () => {

    beforeEach(() => {
        NoteArea.contextTypes = {};
    });

    it('should have a textarea', () => {
        expect(shallow(<NoteArea />).is('.notearea')).toBe(true);
    });

    it('should contain a textarea', () => {
        expect(mount(<NoteArea />).find('textarea').length).toEqual(1);
    });

    it('should have a state', () => {
        const component = shallow(<NoteArea />);
        expect(component.state().id).toEqual('');
        expect(component.state().titleText).toEqual('');
        expect(component.state().noteText).toEqual('');
        expect(component.state().disableSaveBtn).toEqual(true);
    });

    it('should have a save button with text "Save"', () => {
        const component = mount(<NoteArea />);
        const saveButtonText = component.find('.noteactionbtn').first().text();
        expect(saveButtonText).toEqual('Save');
    });

    it('should have a reset button with text "Reset"', () => {
        const component = mount(<NoteArea />);
        const resetButtonText = component.find('.noteactionbtn').at(1).text();
        expect(resetButtonText).toEqual('Reset');
    });

    it('should reset state when clicking reset button', () => {
        const component = mount(<NoteArea />);

        component.setState({
            titleText: 'title',
            noteText: 'note'
        });

        component.find('.noteactionbtn').at(1).simulate('click');

        expect(component.state().titleText).toEqual('');
        expect(component.state().noteText).toEqual('');
    });
});
