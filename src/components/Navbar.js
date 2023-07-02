import React from 'react';
import { FaBook } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="Sweep AI logo" />
        <button onClick={() => window.open("https://docs.sweep.dev/start")}>
          <FaBook />&nbsp;Docs
        </button>
      </div>
      // Rest of the navbar items...
    </nav>
  );
};

export default Navbar;
