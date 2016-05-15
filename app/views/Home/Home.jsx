import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {

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
      <div className="homecontainer">
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            {this.isUserLoggedIn() ? <li><Link to="/notes">Notes</Link></li> : null}
            {this.isUserLoggedIn() ? <li><Link to="/new">Create note</Link></li> : null}
            {!this.isUserLoggedIn() ? <li><Link to="/login">Login</Link></li> : null}
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

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Home;
