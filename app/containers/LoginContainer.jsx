import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { login } from './../actions/index.js';
import Login from './../views/Login';
import { browserHistory } from 'react-router';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    doLogin(user) {
        dispatch(actions.submit('login', login(user).then(res => {
            if (res && res.isValid) {
                sessionStorage.setItem('jwtToken', res.token);
                browserHistory.replace('/notes');
            }
        })));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
