import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <NavLink className="navbar-brand" to="/#">Food-Recipes</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Submit">Submit recipe</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default App;
