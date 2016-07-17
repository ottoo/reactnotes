import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/index.js';
import Root from './components/Root/index.js';
import './styles/main.scss';

require.context('./res', false, /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/);

const store = configureStore();

ReactDOM.render((
    <AppContainer
        component={Root}
        props={{ store }}
    />
), document.getElementById('app'));

if (module.hot) {
    module.hot.accept('./components/Root/index.js', () => {

    ReactDOM.render((
        <AppContainer
            component={require('./components/Root/index.js').default}
            props={{ store }}
        />
    ), document.getElementById('app'));
  });
}
