import React from 'react';
import  ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';

// import * as serviceWorker from './serviceWorker';
import store, { history } from './store';


const target = document.querySelector('#root');
// <ConnectedRouter history={history}>
// </ConnectedRouter>
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
