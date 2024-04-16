import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './style/main.scss';
import App from './App';

ReactDOM.render((
  <HashRouter basename="/">
    <App />
  </HashRouter>
  ), document.getElementById('root')
);
