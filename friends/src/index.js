import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import FriendsList from "./components/FriendsList";

ReactDOM.render(<FriendsList />, document.getElementById('root'));
registerServiceWorker();
