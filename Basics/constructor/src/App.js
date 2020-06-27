import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.yourname = "Otieno";
    this.state = {};
  }

sayhello(name) {
  return "Hello " + name;
}


  render() {
    const myName = "Mourice";
    return (
      <div className="App">
        <h2>Just some sample data: {this.yourname}</h2>
      </div>

    );
  }
}

// function App() {
//   function sayhello(name) {
//     return "Hello " + name;
//   }
  
//   const myName = "Mourice"
//   return (
//     <div className="App">
//       <h2>Just some sample data: { sayhello("Mourice") }</h2>
//     </div>
//   );
// }

export default App;
