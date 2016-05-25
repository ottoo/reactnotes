import { connect } from 'react-redux';
import { validateToken } from './../actions/index.js';
import Home from './../views/App';
import { browserHistory } from 'react-router';

/**
 * Maps the available state to components props.
 * @param  {Object} state
 * @return {Object}
 */
function mapStateToProps(state) {
    return state;
}

/**
 * Maps the dispatched actions to component properties so that the dispatched
 * actions can be defined outside of the component.
 * @param  {Function}
 * @return {Object}
 */
function mapDispatchToProps(dispatch) {
    return {
        // Validates the users token and throws the user to the login page if it
        // is not found. Called also on browser refresh.
        validateToken: () => {
            const token = sessionStorage.getItem('jwtToken');

            if (!token) {
                return false;
            }

            return dispatch(validateToken(token)).then(res => {
                if (res && res.token) {
                    sessionStorage.setItem('jwtToken', res.token);
                    browserHistory.push('/notes');
                } else {
                    sessionStorage.removeItem('jwtToken');
                    browserHistory.push('/');
                }
            });
        }
    };
}

/**
 * Finally connect the react component to the redux store.
 * @param  {Function} mapStateToProps
 * @param  {Function} mapDispatchToProps
 */
export default connect(mapStateToProps, mapDispatchToProps)(Home);
