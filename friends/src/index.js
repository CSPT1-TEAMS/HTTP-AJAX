import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route as Router} from 'react-router-dom';

ReactDOM.render(
<Router>
    <App />
    <Route exact path='/' component={App}/>
    <Route path="/FriendsList/:id" component={FriendsList}/>
</Router>, document.getElementById('root'));
registerServiceWorker();
