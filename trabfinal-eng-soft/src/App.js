import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Users from './components/Users';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/users' element={<Users/>} />
          <Route path= '/products' element={<Products/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


