import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <div className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2>Welcome to React</h2>
//       </div>
//       <p className="App-intro">
//         To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       <h3>prop number is : {this.props.propNumber}</h3>
//       <h3>prop string is : {this.props.propString}</h3>
//       <h3>prop object is : {this.props.propObject.obj1}</h3>
//       <h3>prop object is : {this.props.propObject.obj2}</h3>
//       <h3>prop object is : {this.props.propObject.obj3}</h3>
//       <Parent />
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          This is App contains a project on <strong>Props and States</strong> in Reactjs
        </p>
        <h3>prop number is : {this.props.propNumber}</h3>
        <h3>prop string is : {this.props.propString}</h3>
        <h3>prop object is : {this.props.propObject.obj1}</h3>
        <h3>prop object is : {this.props.propObject.obj2}</h3>
        <h3>prop object is : {this.props.propObject.obj3}</h3>
        <Parent />
      </div>
    );
  }
}

App.propTypes = {
  propObject: PropTypes.object,
  propString: PropTypes.string,
  propNumber: PropTypes.number
}

App.defaultProps = {
  propNumber: 3,
  propString: "THis is prop string",
  propObject: {
    obj1: "I am object 1",
    obj2: "I am object 2",
    obj3: "I am object 3"
  }

}


// states
class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: ['s-BMW', 's-MERC', 's-City', 's-Audi']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ cars: this.state.cars.reverse() });
  }

  render() {
    return (
      <div>
        <h2 onClick={this.handleClick}>Just some info</h2>
        <Cars msg="cars are cool" model="34765" coolCars={this.state.cars} />
      </div>
    );
  }
}


Parent.defaultProps = {
  cars: ['BMW', 'MERC', 'City', 'Audi']
}

class Cars extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3> I am from cars component</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
        <div>{this.props.coolCars.map((item, i) => {
          return <p key={i}>{item}</p>;
        })}</div>
      </div>
    );
  }
}

export default App;
