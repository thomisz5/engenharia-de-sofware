import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropDown.css';

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div className="dropdown-container">
      <div 
        className="dropdown" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <input type="text" placeholder="Search everything at Walmart online and in store" className="search-input"/>
        {isOpen && (
          <div 
            className="dropdown-content" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/users">Usuários</Link>
            <Link to="/products">Produtos</Link>
            <Link to="/notafiscal">Nota Fiscal</Link>
            <Link to="/estoque">Estoque</Link>
            <Link to="/reports">Relatórios</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropDown;



