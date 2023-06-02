// import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useAuth } from '../hook';
import { Home, Login, Signup } from '../pages';
import { Loader, Navbar } from './';

function App() {
  const auth = useAuth();

  if (auth.loading) {
    return <Loader />;
  }

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
