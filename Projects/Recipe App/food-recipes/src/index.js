import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Submit from './Submit';
import { NavLink } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Router, Route, BrowserRouter, browserHistory } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter>
    <div className="container">

      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <NavLink className="navbar-brand" to="/#">Food-Recipes</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink exact activeClassName="activeNav" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="activeNav" to="/submit">Submit a Recipe</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Route exact path='/' component={Home} />
      <Route path='/submit' component={Submit} history={history} />

    </div>
  </BrowserRouter>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
