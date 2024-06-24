export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Users from './components/Users';
import Products from './components/Products';
import NotaFiscal from './components/NotaFiscal';
import Estoque from './components/Estoque';
import Reports from './components/Reports';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/users' element={<Users/>} />
          <Route path= '/products' element={<Products/>} />
          <Route path= '/notafiscal' element={<NotaFiscal/>} />
          <Route path= '/estoque' element={<Estoque/>} />
          <Route path= '/reports' element={<Reports/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




