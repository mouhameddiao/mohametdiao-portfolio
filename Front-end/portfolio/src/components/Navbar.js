import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  const [navBackground, setNavBackground] = useState(false);

  // Changer la couleur de fond de la navbar lors du défilement
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${
        navBackground ? 'bg-gray-800 shadow-md' : 'bg-white'
      } transition-colors duration-500`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl font-bold ${
            navBackground ? 'text-white' : 'text-gray-800'
          }`}
        >
          Portfolio
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`${
              navBackground ? 'text-white' : 'text-gray-800'
            } hover:text-primary`}
          >
            <FaHome className="inline-block mr-2" /> Home
          </Link>
          <Link
            to="/about"
            className={`${
              navBackground ? 'text-white' : 'text-gray-800'
            } hover:text-primary`}
          >
            <FaUser className="inline-block mr-2" /> About
          </Link>
          <Link
            to="/projects"
            className={`${
              navBackground ? 'text-white' : 'text-gray-800'
            } hover:text-primary`}
          >
            <FaFolderOpen className="inline-block mr-2" /> Projects
          </Link>
          <Link
            to="/contact"
            className={`${
              navBackground ? 'text-white' : 'text-gray-800'
            } hover:text-primary`}
          >
            <FaEnvelope className="inline-block mr-2" /> Contact
          </Link>
        </div>

        {/* Menu burger pour les petits écrans */}
        <div className="md:hidden">
          {/* Bouton burger (réactif) */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
