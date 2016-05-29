import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';

import NoteArea from './NoteArea.jsx';

expect.extend(expectJSX);

let component = null;
let renderer = null;

describe('NoteArea', () => {

    beforeEach(() => {
        NoteArea.contextTypes = {};
        component = TestUtils.renderIntoDocument(<NoteArea />);
        renderer = TestUtils.createRenderer();
        renderer.render(<NoteArea />);
    });

    it('should contain a textarea', () => {
        const textArea = TestUtils.findRenderedDOMComponentWithTag(component, 'textarea');
        expect(textArea).toExist();
    });

    it('should render a div with a css class', () => {
        const result = renderer.getRenderOutput();
        expect(result.type).toEqual('div');
        expect(result.props.className).toEqual('notearea');
    });

    it('should have a state', () => {
        const state = component.state;
        expect(state.id).toEqual('');
        expect(state.titleText).toEqual('');
        expect(state.noteText).toEqual('');
        expect(state.disableSaveBtn).toEqual(true);
    });

    it('should have a save button with text "Save"', () => {
        const saveButton = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button')[0];
        expect(saveButton.textContent).toEqual('Save');
    });

    it('should have a reset button with text "Reset"', () => {
        const resetButton = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button')[1];
        expect(resetButton.textContent).toEqual('Reset');
    });

    it('should reset state when clicking reset button', () => {
        component.state = {
            titleText: 'title',
            noteText: 'note'
        };

        const resetButton = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button')[1];
        TestUtils.Simulate.click(resetButton);

        expect(component.state.titleText).toEqual('');
        expect(component.state.noteText).toEqual('');
    });
});
