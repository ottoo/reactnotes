import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import LoginContainer from './containers/LoginContainer';
import HomeContainer from './containers/HomeContainer';
import NoteAreaContainer from './containers/NoteAreaContainer';
import NoteListContainer from './containers/NoteListContainer';

import { store } from './store.js';

require('./index.scss');

console.log('Initial state', store.getState());

store.subscribe(() =>
  console.log('State updated', store.getState())
);

function requireAuth(nextState, replace) {
  const token = sessionStorage.getItem('jwtToken');
  if (!token) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={HomeContainer}>
        <Route path="login" component={LoginContainer} />
        <Route path="notes" component={NoteListContainer} onEnter={requireAuth} />
        <Route path="note/:noteId" component={NoteAreaContainer} onEnter={requireAuth} />
        <Route path="new" component={NoteAreaContainer} onEnter={requireAuth} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
