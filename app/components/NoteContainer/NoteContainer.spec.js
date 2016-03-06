import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';

import { NoteContainer } from './NoteContainer.jsx';
import { NoteTextArea } from './../NoteTextArea/NoteTextArea.jsx';

expect.extend(expectJSX);

var component, renderer;

describe('NoteContainer', () => {

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<NoteContainer/>);
        renderer = TestUtils.createRenderer();
        renderer.render(<NoteContainer/>);
    });

    it('should contain a textarea', () => {
        let textArea = TestUtils.findRenderedDOMComponentWithTag(component, 'textarea');
        expect(textArea).toExist();
    });

    it('should render a div with a css class', () => {
        let result = renderer.getRenderOutput();
        expect(result.type).toEqual('div');
        expect(result.props.className).toEqual('notecontainer');
    });
});