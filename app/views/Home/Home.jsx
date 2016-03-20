import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import NoteList from './../../components/NoteList';
import { login, saveNote } from './../../actions.js';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(login('ottoki@gmail.com', 'salasana'));
    }

    render() {
        return (
            <div className="homecontainer">
                <nav className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/new">Create note</Link></li>
                    </ul>
                </nav>
                <div className="content">
                    {this.props.children || <NoteList />}
                </div>
            </div>
        )
    }
}

function select(state) {
    return state;
}

export default connect(select)(Home);