// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-700 fixed w-full top-0 shadow-md z-10">
      <div className="container mx-auto p-4">
        <ul className="flex justify-center space-x-8 text-white">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">Sobre Nós</Link></li>
          <li><Link to="/promotions" className="hover:text-yellow-400">Promoções</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contato</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
