import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import configureStore from './store';
import AppWithRedux from './AppWithRedux';

const withoutRedux = <App />;

const withRedux = <Provider store={configureStore()}>
        <AppWithRedux />
    </Provider>;

ReactDOM.render(withRedux, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
