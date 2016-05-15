import React from 'react';
import { connect } from 'react-redux';
import { validateToken } from './../actions.js';
import Home from './../views/Home';
import { browserHistory } from 'react-router';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch, props) {
  return {
    validateToken: () => {
      const token = sessionStorage.getItem('jwtToken');

      if (!token) {
        return;
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
