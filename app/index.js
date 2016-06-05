import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/index.js';
import Root from './components/Root/index.js';
import './styles/main.scss';

const store = configureStore();

ReactDOM.render((
    <Root store={store} />
), document.getElementById('app'));
