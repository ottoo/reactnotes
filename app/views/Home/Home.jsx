import React from 'react';
import { connect } from 'react-redux';
import NoteContainer from './../../components/NoteContainer';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NoteContainer/>
        )
    }
}

function select(state) {
    return state;
}

export default connect(select)(Home);