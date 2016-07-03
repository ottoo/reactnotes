import React from 'react';
import { Field, Form, actions } from 'react-redux-form';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(user) {
        console.log(user)
        this.props.doLogin(user);
    }

    render() {
        let { login } = this.props;

        return (
            <div className="loginpage">
                <Form model="login" className="loginform" onSubmit={this.handleSubmit}>
                    <Field model="login.email">
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                id="email"
                                type="text"
                                placeholder="email"
                                className="form-control"
                            />
                        </div>
                    </Field>
                    <Field model="login.password">
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="password"
                                className="form-control"
                            />
                        </div>
                    </Field>
                    <button type="submit" className="btn btn-default loginbtn">Login</button>
                </Form>
            </div>
        );
    }
}

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Login;
