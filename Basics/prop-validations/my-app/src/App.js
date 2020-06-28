import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      headerText: "Welcome to React!",
      contentText: "This App deals with the prop Validations/types"
    };
  }
  render() {
    return (
      <div className="App">

          {/* <h1>{this.state.headerText}</h1>
          <p>{this.state.contentText}</p> */}
       
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
  render() {
    return (
      <div>
        <div className="App-intro">
          <h1>Prop Validations!</h1>
          <p>This App deals with the prop Validations/types</p>
        </div>
        <div>
          <h4>Array: {this.props.propArray}</h4>
          <h4>Boolean: {this.props.propBool ? "True" : "False"}</h4>
          <h4>Func: {this.props.propFunc(5)}</h4>
          <h4>Number: {this.props.propNumber}</h4>
          <h4>String: {this.props.propString}</h4>
          <h4>Object: {this.props.propObject.objectName1}</h4>
          <h4>Object: {this.props.propObject.objectName2}</h4>
          <h4>Object: {this.props.propObject.objectName3}</h4>
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
  propObject: PropTypes.object
}

Content.defaultProps = {
  propArray: [1,2,3,4,5],
  propBool: true,
  propFunc: function(e) {return e},
  propNumber: 1,
  propString: "String Value.....",
  propObject: {
    objectName1: "objectValue1",
    objectName2: "objectValue2",
    objectName3: "objectValue3",
  }
}

export default App;













