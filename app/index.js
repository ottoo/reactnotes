import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import Login from './views/Login';
import Home from './views/Home';
import NoteAreaContainer from './containers/NoteAreaContainer';
import NoteList from './components/NoteList';

import { store, getToken } from './store.js';
import config from './config.js';

require('./index.scss');

console.log('Initial state', store.getState());

let unsubscribe = store.subscribe(() =>
  console.log('State updated', store.getState())
);

function requireAuth(nextState, replace) {
    const token = getToken();
    if (!token) {
        replace({
          pathname: '/login',
          state: { nextPathname: nextState.location.pathname }
        })
    }
}

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}>
                <Route path="login" component={Login} />    
                <Route path="notes" component={NoteList} />
                <Route path="note/:noteId" component={NoteAreaContainer} />
                <Route path="new" component={NoteAreaContainer} onEnter={requireAuth}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));