import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      headerText: "Welcome to React!",
      contentText: "This file consists of the Components And states in Reactjs"
    };
  }
  render() {
    return (
      <div className="App">
        {
          /*
          <h1>{this.state.headerText}</h1>
          <p>{this.state.contentText}</p>
          */
        }
        <Header />
        <Content />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}

class Content extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data: [
        {
          "id": 1,
          "name": "Mourice",
          "age": "20"
        },
        {
          "id": 2,
          "name": "Otieno",
          "age": "30"
        },
        {
          "id": 3,
          "name": "Oduor",
          "age": "40"
        }
      ]
    };
  }
  render() {
    return (
      <p className="App-intro">
        <h1>What is Component!</h1>
        <p>This file consists of the Components And states in Reactjs</p>
        <table>
          <thead>
            <th> 
              <td>Id</td>
              <td>Name</td>
              <td>Age</td>
            </th>
          </thead>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key={i} data={person}/> )}
          </tbody>
        </table>
      </p>
    );
  }
}

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

export default App;
