/**
   index.js
   ========
   Created 2018-04-13T09:11:55
   Version 0.1.1
   Added Browser Router
   ------------------------------
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
