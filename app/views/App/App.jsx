import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.isUserLoggedIn = this.isUserLoggedIn.bind(this);
    }

    componentWillMount() {
        this.props.validateToken();
    }

    handleLogout() {
        sessionStorage.removeItem('jwtToken');
        this.context.router.replace('/');
    }

    isUserLoggedIn() {
        return sessionStorage.getItem('jwtToken');
    }

    render() {
        return (
          <div className="appcontainer">
            <nav className="nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                {this.isUserLoggedIn() ? <li><Link to="/notes">Notes</Link></li> : ''}
                {this.isUserLoggedIn() ? <li><Link to="/new">Create note</Link></li> : ''}
                {!this.isUserLoggedIn() ? <li><Link to="/login">Login</Link></li> : ''}
                {this.isUserLoggedIn() ? <li><a href="" onClick={this.handleLogout}>Logout</a></li>
                : null}
              </ul>
            </nav>
            <div className="content">
              {this.props.children}
            </div>
          </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.object,
    validateToken: React.PropTypes.func
};

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default App;
