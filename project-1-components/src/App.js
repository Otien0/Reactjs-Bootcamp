import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Intro from './Intro';

function App() {
  return (
    <div className="App">
      <Header />

      <Intro />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p className="App-intro">
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

/* creating components */
   /*first component */
// class Header extends Component {
//   render(){
//     return(
//       <div>
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />

//           <h2>Welcome to React</h2>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//         </a>
//         </header>
//       </div>
//     )
//   }
// }

/* second component */
// class Intro extends Component {
//   render(){
//     return(
//       <div>
//         <p className="App-intro">
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     )
//   }
// }

export default App;
