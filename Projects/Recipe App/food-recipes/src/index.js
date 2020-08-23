import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Submit from './Submit';
import * as serviceWorker from './serviceWorker';
import { Router, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
        <Route path='/' component={App} />
        <Route path='/home' component={Home} />
        <Route path='/submit' component={Submit} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
