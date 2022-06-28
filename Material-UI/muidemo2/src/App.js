import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Tour from "./pages/Tour";
import { Container, Grid } from '@mui/material';
import SearchAppBar from './components/AppBar';
// import SearchAppBar from "./components/AppBar";

function App() {
  return (
    <div className='App'>
      <SearchAppBar />

      <Container sx={{ marginY: 5 }}>
        <Grid container spacing={5}>
          <Tour/>
          <Tour/>
          <Tour/>
          <Tour/>
        </Grid>
      </Container>

    </div>
    // <BrowserRouter>
    //   {/* <SearchAppBar /> */}
    //   <div className="App">
    //     <Routes>
    //         <Route path='/' element={<Home />}/>
    //         {/* <Route path="/:id" element={<Tour />} /> */}
    //         <Route path="/tour" element={<Tour />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
