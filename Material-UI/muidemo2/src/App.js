import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
// import SearchAppBar from "./components/AppBar";

function App() {
  return (
    <BrowserRouter>
      {/* <SearchAppBar /> */}
      <div className="App">
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/:id" element={<Tour />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
