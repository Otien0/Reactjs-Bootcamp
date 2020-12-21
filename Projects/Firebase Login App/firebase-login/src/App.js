import logo from './logo.svg';
import './App.css';
import Authenticate from './Authenticate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React Login with Firebase App</h1>
      </header>
      <Authenticate />
    </div>
  );
}

export default App;
