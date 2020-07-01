import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      headerText: "Welcome to React!",
      contentText: "This App deals with the Components API"
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
      data: [],
      count: 0,
    };
    this.updateMyState = this.updateMyState.bind(this);
    this.forceUpdateRandomNumber = this.forceUpdateRandomNumber.bind(this);
    this.findMyDOMNode = this.findMyDOMNode.bind(this);
  }
  updateMyState() {
    var count = this.state.count;
    count++;
    var item = "Click - " +count;
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({data: myArray, count: count});
  }
  forceUpdateRandomNumber() {
    this.forceUpdate();
  }
  findMyDOMNode() {
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'blue';
  }
  render() {
    return (
      <div className="App-intro">
        <h1>Components API!</h1>
        <p>This App deals with the Components API</p>
        <button onClick={this.updateMyState}>Click Me</button>
        <h4>State Data: {this.state.data}</h4>
        <button onClick={this.forceUpdateRandomNumber}>Random Number</button>
        <h4>Random Number: {Math.random()}</h4>
        <button onClick={this.findMyDOMNode}>Find My DOM Node</button>
        <div id="myDiv">This is my DIV</div>
      </div>
    );
  }
}

export default App;
