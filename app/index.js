import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/index.js';
import Root from './components/Root/index.js';
import './styles/main.scss';

require.context('./res', false, /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/);

const store = configureStore();

ReactDOM.render((
    <Root store={store} />
), document.getElementById('app'));
