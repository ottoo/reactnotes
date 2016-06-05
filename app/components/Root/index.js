import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import AppContainer from './../../containers/AppContainer';
import LoginContainer from './../../containers/LoginContainer';
import NoteAreaContainer from './../../containers/NoteAreaContainer';
import NoteListContainer from './../../containers/NoteListContainer';

function requireAuth(nextState, replace) {
    const token = sessionStorage.getItem('jwtToken');
    if (!token) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}

const Root = ({ store }) => (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
          <Route path="login" component={LoginContainer} />
          <Route path="notes" component={NoteListContainer} onEnter={requireAuth} />
          <Route path="note/:noteId" component={NoteAreaContainer} onEnter={requireAuth} />
          <Route path="new" component={NoteAreaContainer} onEnter={requireAuth} />
        </Route>
      </Router>
    </Provider>
);

export default Root;
