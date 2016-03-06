import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
require('./index.scss');

import Home from './views/Home';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
          
        </Route>
    </Router>
), document.getElementById('app'));