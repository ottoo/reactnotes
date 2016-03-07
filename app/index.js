import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import noteReducer from './reducers';

import Home from './views/Home';

require('./index.scss');

let store = createStore(noteReducer);

console.log('Initial state', store.getState());

let unsubscribe = store.subscribe(() =>
  console.log('State updated', store.getState())
);

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}>
              
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));