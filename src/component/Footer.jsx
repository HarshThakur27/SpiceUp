import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold">SpiceUp</h2>
            <p className="text-gray-400">© 2024 . All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-400 hover:text-white transition duration-300">
              Home
            </Link>
            <Link to="/search" className="text-gray-400 hover:text-white transition duration-300">
              Search
            </Link>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/harsh-thakur-543572249" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.401 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.725A.723.723 0 0 1 0 14.854V1.146zM4.943 12.522V6.169H2.542v6.353h2.401zM3.743 5.079c.837 0 1.344-.55 1.344-1.237-.015-.701-.507-1.237-1.331-1.237-.823 0-1.344.536-1.344 1.237 0 .687.507 1.237 1.315 1.237h.016zm4.785 7.443h2.401V9.359c0-.215.016-.43.079-.583.173-.43.568-.874 1.231-.874.868 0 1.215.659 1.215 1.626v3.014h2.401V9.286c0-2.524-1.351-3.7-3.152-3.7-1.455 0-2.104.807-2.47 1.383h.016V6.169H8.528c.03.75 0 6.353 0 6.353z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

