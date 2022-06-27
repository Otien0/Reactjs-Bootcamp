import {Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Buttons from './pages/Buttons';
import Form from './pages/Form';
import Checkbox from './pages/Checkbox';
import Missing from './components/Missing';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/buttons' element={<Buttons/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/checkbox' element={<Checkbox/>}/>
            <Route path="*" element={<Missing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
