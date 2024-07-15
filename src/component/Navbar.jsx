import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-3xl font-extrabold text-gray-800 hover:text-gray-900 transition duration-300 flex items-center space-x-2">
          <span className="text-yellow-800">SpiceUp</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </Link>
        <div className="flex space-x-8">
          <Link to="/" className="text-xl font-medium text-gray-700 hover:text-gray-900 transition duration-300">
            Home
          </Link>
          <Link to="/search" className="text-xl font-medium text-gray-700 hover:text-gray-900 transition duration-300">
            Search
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


