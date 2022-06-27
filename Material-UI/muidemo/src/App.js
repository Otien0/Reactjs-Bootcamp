import {Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Buttons from './pages/Buttons';
import Missing from './components/Missing';
// import { Button } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/buttons' element={<Buttons/>}/>
            <Route path="*" element={<Missing />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
