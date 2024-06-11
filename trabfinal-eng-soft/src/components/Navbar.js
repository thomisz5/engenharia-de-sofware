import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DropDown from './DropDown';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">Walmart</Link>
        <div className="location">Sacramento, 95829</div>
      </div>
      <div className="navbar-center">
        <DropDown />
      </div>
      <div className="navbar-right">
        <button>Reorder</button>
        <button>Sign In</button>
        <button>Account</button>
      </div>
    </nav>
  );
}

export default Navbar;




