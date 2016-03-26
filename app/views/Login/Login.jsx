import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { login } from './../../actions.js';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const email = this.refs.email.value;
        const password = this.refs.password.value;

        this.props.dispatch(login(email, password)).then((res) => {
            if (res && res.isLoggedIn) {
                sessionStorage.setItem('jwtToken', res.token);
                this.context.router.replace('/notes');
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref="email" placeholder="email" />
                <input type="password" ref="password" placeholder="password" />
                <button type="submit">Login</button>
            </form>
        )
    }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Login);