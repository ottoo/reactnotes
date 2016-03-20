import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import Home from './views/Home';
import NoteContainer from './components/NoteContainer';
import NoteList from './components/NoteList';

import config from './config.js';

require('./index.scss');

const store = createStore(rootReducer, applyMiddleware(thunk, createLogger()));

console.log('Initial state', store.getState());

let unsubscribe = store.subscribe(() =>
  console.log('State updated', store.getState())
);

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}>
                <Route path="notes" component={NoteList} />
                <Route path="new" component={NoteContainer} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));