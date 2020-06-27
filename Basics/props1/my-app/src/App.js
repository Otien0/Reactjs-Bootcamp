import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      headerText: "Welcome to React!",
      contentText: "This folder consists of Props methods in Reactjs"
    };
  }
  render() {
    return (
      <div className="App">
          <h1>{this.state.headerText}</h1>
          <p>{this.state.contentText}</p>
          
        <Header header={this.state.headerText}/>
        <Content content={this.state.contentText}/>
      </div>
    );
  }
}

App.defaultProps = {
  header: 'Default Props for the Header...',
  content: 'Default Props for the Content...'
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
  render() {
    return (
      <p className="App-intro">
        <h1>Props</h1>
        <p>This site deals with Props methods in Reactjs</p>
        {this.props.content}
        </p>
    );
  }
}


export default App;
