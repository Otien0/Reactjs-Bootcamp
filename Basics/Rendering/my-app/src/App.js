import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* eslint-disable */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerText: "Welcome to React!",
      contentText: "This folder consists of Rendering methods in Reactjs"
    };
  }
  render() {
    return (
      <div className="App">

        <h1>{this.state.headerText}</h1>
        <p>{this.state.contentText}</p>

        <Clock increment={1} />
      </div>
    );
  }
}

class Clock extends Component {
  constructor(props) {
    super(props);


    this.state = { date: new Date(), comment: "Hello" };
  }

  componentDidMount() {
    this.timeID = setInterval(
      () => { this.tick() }
      , 1000)
  }

  tick() {
    this.setState({
      date: new Date(),
      comment: this.state.comment + "o",
    });

    this.setState((prevState, props) => {
      counter: prevState.counter + props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.timeID)
  }

  render() {
    return (
      <div>
        <h2>The time is: {this.state.date.toLocaleTimeString()}</h2>
        <p>{this.state.comment}</p>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}


export default App;
