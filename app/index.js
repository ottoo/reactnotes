import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import noteReducer from './reducers';

import Home from './views/Home';
import NoteContainer from './components/NoteContainer';
import NoteList from './components/NoteList';

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
                <Route path="notes" component={NoteList} />
                <Route path="new" component={NoteContainer} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));