import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full absolute z-30 ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 animate-clipReveal opacity-0">
        <Link to="/" className="text-3xl font-extrabold text-gray-800 hover:text-gray-900 transition duration-300 flex items-center space-x-2">
          <span className="text-yellow-400">SpiceUp</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </Link>
        <div className="flex space-x-8">
          <Link to="/" className="text-2xl font-bold text-yellow-500 hover:text-gray-900 transition duration-300">
            Home
          </Link>
          <Link to="/search" className="text-2xl font-bold text-yellow-500 hover:text-gray-900 transition duration-300">
            Search
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


