import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      headerText: "Welcome to React!",
      contentText: "This App deals with the Components Life Cycle methods"
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
      data: 0
    };
    this.setNewNumber = this.setNewNumber.bind(this);
  }
  setNewNumber() {
    this.setState({data: this.state.data + 1})
  }
  render() {
    return (
      <div className="App-intro">
        <h1>Components Life Cycle!</h1>
        <p>This App deals with the Components Life Cycle methods</p>
        <button onClick={this.setNewNumber}>Update Number</button>
        <NumberComponent myNumber={this.state.data}/>
      </div>
    );
  }
}

class NumberComponent extends Component {
  componentWillMount(){
    console.log('Called the COMPONENT WILL MOUNT');
  }
  componentDidMount(){
    console.log('Called the COMPONENT DID MOUNT');
  }
  componentWillReceiveProps(newProps){
    console.log('Called the COMPONENT WILL RECEIVE PROPS');
  }
  shouldComponentUpdate(newProps, nextState) {
   console.log('Called the SHOULD COMPONENT UPDATE'); 
   return true;
  }
  componentWillUpdate(newProps, nextState) {
    console.log('Called the COMPONENT WILL UPDATE');
  }
  componentDidUpdate(newProps, nextState) {
    console.log('Called the COMPONENT DID UPDATE');
  }
  componentWillUnmount() {
    console.log('Called the COMPONENT WILL UNMOUNT');
  }
  render() {
    return (
      <h4>
        {this.props.myNumber}
      </h4>
    );
  }
}

export default App;








