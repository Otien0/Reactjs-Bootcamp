import React from 'react';
import logo from './logo.svg';
import './App.css';
import EasyABC from './EasyABC';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello! Welcome to Easy ABC.. Alphabet-Game, with React.js</h2>

        <EasyABC />
      </header>
    </div>
  );
}

export default App;
