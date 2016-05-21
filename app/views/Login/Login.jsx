import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const email = this.refs.email.value;
        const password = this.refs.password.value;

        this.props.login(email, password);
    }

    render() {
        return (
            <form className="loginform" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        id="email"
                        type="text"
                        ref="email"
                        placeholder="email"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        ref="password"
                        placeholder="password"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-default">Login</button>
            </form>
        );
    }
}

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Login;
