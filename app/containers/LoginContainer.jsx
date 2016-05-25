import { connect } from 'react-redux';
import { login } from './../actions/index.js';
import Login from './../views/Login';
import { browserHistory } from 'react-router';

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        login: (email, password) => {
            dispatch(login(email, password)).then((res) => {
                if (res && res.isValid) {
                    sessionStorage.setItem('jwtToken', res.token);
                    browserHistory.replace('/notes');
                }
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
