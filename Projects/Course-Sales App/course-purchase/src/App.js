import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render(){

    var courses = [
      { name: 'Complete Full-Stack Java-Spring Course', price: '$199' },
      { name: 'Complete Front-end Developer Course', price: '$299'},
      { name: 'Complete Pentesting Course', price: '$160' },
      { name: 'Complete Full-Stack Python-Django Course', price: '$255' }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Course-sales App</h2>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
        <Coursesales items={courses}/>
      </div>
    );
  }
  
}

export default App;
