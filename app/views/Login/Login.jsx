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
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="email" placeholder="email" />
        <input type="password" ref="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Login;
