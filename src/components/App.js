// import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from '../pages';
import { Navbar } from './';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route exact path="/register" element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
